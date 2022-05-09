import api from "../hooks/useAxios";
export async function getConsultans() {
  let apiCall = await api().get("/consultants/", {
    "Content-Type": "application/json",
  });
  return apiCall
}
export async function getBlog() {
    let apiCall = await api().get("/weblog/", {
      "Content-Type": "application/json",
    });
    return apiCall
}
export async function getBlogDynamic(id) {
    let apiCall = await api().get(`/weblog/${id}`, {
      "Content-Type": "application/json",
    });
    return apiCall
}
export async function getContactUsBanner() {
  let apiCall = await api().get("/ContactUsBanner/", {
    "Content-Type": "application/json",
  });
  return apiCall
}
export async function getContactUs() {
  let apiCall = await api().get("/ContactUs/", {
    "Content-Type": "application/json",
  });
  return apiCall
}
export async function weblogTypes() {
  let apiCall = await api().get("/weblogTypes/", {
    "Content-Type": "application/json",
  });
  return apiCall
}
export async function AboutUs() {
  let apiCall = await api().get("/AboutUs/", {
    "Content-Type": "application/json",
  });
  return apiCall
}
export async function HomePage() {
  let apiCall = await api().get("/HomePage/", {
    "Content-Type": "application/json",
  });
  return apiCall
}
export async function cases() {
  let apiCall = await api().get("/cases/", {
    "Content-Type": "application/json",
  });
  return apiCall;
}
export async function beach() {
  let apiCall = await api().get("/cases/?estate_type=V&beach=true/", {
    "Content-Type": "application/json",
  });
  return apiCall;
}
export async function special() {
  let apiCall = await api().get("/cases/?special=true/", {
    "Content-Type": "application/json",
  });
  return apiCall;
}
