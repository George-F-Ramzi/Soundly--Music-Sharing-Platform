export default function FastLogin() {
  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTY4MjE1ODQzMX0.xa1ofRbJftZEXImaarN-DJWZdAYB9kROUAYpswA62GQ";
  localStorage.setItem("token", token);
  window.location.reload();
}
