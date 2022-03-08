import axios from "axios";
const login = (email, password) => {
  return axios
    .post(process.env.REACT_APP_API_LOGIN, {
      email: email,
      password: password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};
const logout = () => {
  localStorage.removeItem("user");
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { logout, login };
