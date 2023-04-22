import { UploadPoint } from "../api/authorization";

async function HandleFileUpload(form: FormData): Promise<void> {
  let name: FormDataEntryValue = form.get("name")!;
  let song: FormDataEntryValue = form.get("song_file")!;
  let photo: FormDataEntryValue = form.get("cover_file")!;

  if (name != null && song != null && photo != null) {
    await UploadPoint(form);
  }
}

export default HandleFileUpload;
