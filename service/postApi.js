import api from "../hooks/useAxios";
import axios from "axios";

export async function vilayab(data) {
  let apiCall = await api().post("/vilayab/",data, {
    "Content-Type": "application/json",
  });
  return apiCall
}

