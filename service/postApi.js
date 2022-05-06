import api from "../hooks/useAxios";

export async function vilayab(data) {
  let apiCall = await api().post("/vilayab/",data, {
    "Content-Type": "application/json",
  });
  return apiCall
}
