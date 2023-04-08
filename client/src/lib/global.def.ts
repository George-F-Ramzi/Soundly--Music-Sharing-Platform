export function FastLogin() {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfSWQiOjQ2LCJpYXQiOjE2NzI2NTU5NjN9.L3--b-OvkWmEPbkUS3TlinjFay_y0s6aDIcAqxEu5nA";
  localStorage.setItem("token", token);
  window.location.reload();
}
