import { fetchBankData } from "../../services/bankService";

export const getBankData = (latitude, longitude, service = "SMEservices") => {
  return async (dispatch) => {
    try {
      const data = await fetchBankData(latitude, longitude, service);
      dispatch(setBankData(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const setBankData = (data) => {
  return {
    type: 'SET_BANK_DATA',
    payload: data,
  };
};