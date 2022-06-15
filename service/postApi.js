import api from "../hooks/useAxios";
import axios from "axios";
export async function vilayab(data) {
  let apiCall = await api().post("/vilayab/",data, {
    "Content-Type": "application/json",
  });
  return apiCall
}
export async function footer(data) {
  console.log(data)
  let apiCall = await api().post("/footer/",data, {
    "Content-Type": "application/json",
  });
  return apiCall
}

export async function conversation(id ,data) {
  let apiCall = await api().post(`cases/${id}/conversation/`,data, {
    "Content-Type": "application/json",
  });
  return apiCall
}
export async function review(slug ,data) {
  let apiCall = await api().post(`weblog/${slug}/review/`,data, {
    "Content-Type": "application/json",
  });
  return apiCall
}

