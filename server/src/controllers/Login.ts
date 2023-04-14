import { Request, Response } from "express";
import Joi, { Schema } from "joi";
import { LoginForm } from "../lib/types.def";
import prisma_client from "../lib/database";
import hashing from "bcrypt";
import jwt from "jsonwebtoken";

export default async function Login(req: Request, res: Response) {
  const schema: Schema = Joi.object({
    email: Joi.string().required().min(8).max(56).label("email"),
    password: Joi.string().required().min(8).max(56).label("Password"),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.message);

  const { email, password }: LoginForm = req.body;

  try {
    let artist = await prisma_client.artist.findFirst({
      where: { email },
      select: { email: true, password: true, id: true },
    });
    if (artist === null) return res.status(400).send("Email Doesn't Exist");

    let hashed_pass: boolean = await hashing.compare(password, artist.password);
    if (!hashed_pass) return res.status(400).send("Invalid Password");

    let token = jwt.sign({ id: artist.id }, process.env.JWT_PASS!);
    res.status(200).header({ "x-auth-token": token }).send("You Can Login");
  } catch (error) {
    res.json(error);
  }
}
