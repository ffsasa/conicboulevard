const API_URL = "http://103.90.224.27:8080/api";

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