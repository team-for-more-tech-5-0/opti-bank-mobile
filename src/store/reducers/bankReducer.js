import {mockBanks} from "./mockBanks";
const initialState = {
  bankData: [],
};

export const bankDataReducer = (state = initialState.bankData, action) => {
  switch (action.type) {
    case 'SET_BANK_DATA':
      return action.payload;
    default:
      return state;
  }
};