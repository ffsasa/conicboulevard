const API_URL = "https://api.conicboulevard.info/api";

import axios from "axios";

const consultationClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export function sendConsultation(data) {
  return consultationClient.post("/consultation", data);
}