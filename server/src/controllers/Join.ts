import { Request, Response } from "express";
import Joi, { Schema } from "joi";
import { JoinForm } from "../lib/types.def";
import prisma_client from "../lib/database";
import hashing from "bcrypt";
import jwt from "jsonwebtoken";

export default async function Join(req: Request, res: Response) {
  const schema: Schema = Joi.object({
    email: Joi.string().email().required().min(8).max(56).label("Email"),
    username: Joi.string().required().min(8).max(56).label("Username"),
    password: Joi.string().required().min(8).max(56).label("Password"),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.message);

  const { email, password, username }: JoinForm = req.body;

  try {
    let artist = await prisma_client.artist.findFirst({ where: { email } });
    if (artist !== null) return res.status(400).send("Email ALready Joined");

    let hashed_pass: string = await hashing.hash(password, 10);
    let { id } = await prisma_client.artist.create({
      data: { email, password: hashed_pass, username },
    });

    let token = jwt.sign({ id }, process.env.JWT_PASS!);
    res.status(200).header({ "x-auth-token": token }).send("joining Done");
  } catch (error) {
    res.json(error);
  }
}
