import { UploadPoint } from "../api/authorization";

interface Args {
  form: FormData;
}

async function HandleFileUpload({ form }: Args): Promise<void> {
  let name: FormDataEntryValue = form.get("name")!;
  let song: FormDataEntryValue = form.get("song")!;
  let photo: FormDataEntryValue = form.get("photo")!;

  if (name != null && song != null && photo != null) {
    await UploadPoint(form);
  } else throw Error("Choose Files First");
}

export default HandleFileUpload;
