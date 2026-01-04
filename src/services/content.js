import api from "../api";
import { REWRITE_URL } from "./endpoints";

export const rewriteContent = (data) => {
  return api.post(REWRITE_URL, data);
};

export const expandContent = (data) => {
  return api.post("/v1/content/expand", data);
};

export const shortenContent = (data) => {
  return api.post("/v1/content/shorten", data);
};

export const generateArticle = (data) => {
  return api.post("/v1/content/article", data);
};

export const contentHistory = () => {
  return api.get("/v1/content/history");
};
