import axios from "axios";
import { api } from "../api/axiosConfig";

export const fetchBankData = async (latitude, longitude, service="SMEservices") => {
  try {
    const response = await api.get(`/getNearBanks?latitude=${latitude}&longitude=${longitude}&service=${service}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
