import axios from "axios";

// register new user
export const registerUser = async (user: any) => {
  // async post request with user as the payload
  await axios.post("https://reqres.in/api/users", user);

  const users = JSON.parse(localStorage.getItem("users") || "[]");
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
};

// retrieve users from local storage
export const getUsers = () => {
  return JSON.parse(localStorage.getItem("users") || "[]");
};

// delete users from local storagr
export const deleteUser = (email: string) => {
  const localUsers = JSON.parse(localStorage.getItem("users") || "[]");
  const updatedUsers = localUsers.filter((user: any) => user.email !== email);
  localStorage.setItem("users", JSON.stringify(updatedUsers));
};

// authenticate user
export const authenticateUser = (email: string, password: string) => {
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  // Finding the user that matches the provided email and password
  return users.find(
    (u: { email: string; password: string }) =>
      u.email === email && u.password === password
  );
};
