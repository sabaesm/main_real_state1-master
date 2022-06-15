import api from "../hooks/useAxios";

export async function AboutUs() {
  let apiCall = await api().get("/AboutUs/", {
    "Content-Type": "application/json",
  });
  return apiCall;
}
export async function consultants() {
  let apiCall = await api().get("/consultants/", {
    "Content-Type": "application/json",
  });
  return apiCall;
}
//end of about us root
//contact us root
export async function getContactUsBanner() {
  let apiCall = await api().get("/ContactUsBanner/", {
    "Content-Type": "application/json",
  });
  return apiCall;
}
export async function getContactUs() {
  let apiCall = await api().get("/ContactUs/", {
    "Content-Type": "application/json",
  });
  return apiCall;
}

// end of contact us root

export async function getConsultans() {
  let apiCall = await api().get("/consultants/", {
    "Content-Type": "application/json",
  });
  return apiCall;
}
//blog root
export async function getBlog() {
  let apiCall = await api().get("/weblog/", {
    "Content-Type": "application/json",
  });
  return apiCall;
}
export async function tags() {
  let apiCall = await api().get("/tags/", {
    "Content-Type": "application/json",
  });
  return apiCall;
}

export async function weblogTypes() {
  let apiCall = await api().get("/weblogTypes/", {
    "Content-Type": "application/json",
  });
  return apiCall;
}
export async function MostViewWeblogs() {
  let apiCall = await api().get("/MostViewWeblogs/", {
    "Content-Type": "application/json",
  });
  return apiCall;
}

export async function HomePage() {
  let apiCall = await api().get("/HomePage/", {
    "Content-Type": "application/json",
  });
  return apiCall;
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
export async function getBlogDynamic(id) {
  let apiCall = await api().get(`/weblog/${id}`, {
    "Content-Type": "application/json",
  });
  return apiCall;
}
export async function getSearch({
  estate_type,
  unit_price__gte,
  unit_price__lte,
  region,
  estate_code
}) {
  let apiCall = await api().get(
    `/cases/?&estate_type=${estate_type && estate_type !== undefined ? estate_type : ""}&unit_price__gte=${unit_price__gte && unit_price__gte !== undefined ? unit_price__gte : ""}&unit_price__lte=${unit_price__lte && unit_price__lte !== undefined ? unit_price__lte : ""}&region=${region && region !== undefined ? region : ""}&estate_code=${estate_code && estate_code !== undefined ? estate_code : ""}`,
    {
      "Content-Type": "application/json",
    }
  );
  return apiCall;
}
export async function getSearchDynamic(id) {
  let apiCall = await api().get(`/cases/${id}`, {
    "Content-Type": "application/json",
  });
  return apiCall;
}
export async function GetReview(slug ) {
  let apiCall = await api().get(`weblog/${slug}/review`, {
    "Content-Type": "application/json",
  });
  return apiCall
}


export async function usersinfo() {
  let apiCall = await api().get("/usersinfo/", {
    "Content-Type": "application/json",
  });
  return apiCall;
}
