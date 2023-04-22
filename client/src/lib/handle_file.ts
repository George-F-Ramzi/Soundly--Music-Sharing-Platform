import { UploadPoint } from "../api/authorization";

async function HandleFileUpload(form: FormData): Promise<void> {
  let name: FormDataEntryValue = form.get("name")!;
  let song: FormDataEntryValue = form.get("song")!;
  let photo: FormDataEntryValue = form.get("photo")!;

  if (name != null && song != null && photo != null) {
    await UploadPoint(form);
  } else throw Error("Choose Files First");
}

export default HandleFileUpload;
