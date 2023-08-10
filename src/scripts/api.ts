import axios from "axios";

export const registerUser = async (user: any) => {
  await axios.post("https://reqres.in/api/users", user);

  const users = JSON.parse(localStorage.getItem("users") || "[]");
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
};

export const getUsers = () => {
  return JSON.parse(localStorage.getItem("users") || "[]");
};

export const deleteUser = (email: string) => {
  const localUsers = JSON.parse(localStorage.getItem("users") || "[]");
  const updatedUsers = localUsers.filter((user: any) => user.email !== email);
  localStorage.setItem("users", JSON.stringify(updatedUsers));
};

export const authenticateUser = (email: string, password: string) => {
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  return users.find(
    (u: { email: string; password: string }) =>
      u.email === email && u.password === password
  );
};
