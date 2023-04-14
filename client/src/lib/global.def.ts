export function FastLogin() {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiaWF0IjoxNjgxMzc4MzY5fQ.gEBb6hmEXmV9JcQyYULmvicma_xvjT7M0Z8be8da_2A";
  localStorage.setItem("token", token);
  window.location.reload();
}
