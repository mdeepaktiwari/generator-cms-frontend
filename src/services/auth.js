import api from "../api";

export const signUp = (data) => {
  return api.post("/v1/auth/sign-up", data);
};
