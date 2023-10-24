import { createSlice } from "@reduxjs/toolkit";
import { fetchClients } from "../../services/clients";


const initialState = {
  clients: [],
};

const ClientSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    setClients: (state, action) => {
      state.clients = action.payload;
    },
  },
});

export const { setClients } = ClientSlice.actions;


export const getAllClients = (auth) => async (dispatch) => {
  try {
    const response = await fetchClients(auth);
    dispatch(setClients(response));
  } catch (error) {
    console.log("CLIENTS_ERROR ", error);
  }
};

export default ClientSlice.reducer;
