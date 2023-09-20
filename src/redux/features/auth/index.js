import { createSlice } from "@reduxjs/toolkit";
import { fetchRoles, fetchUserPermissions } from "../../services/auth";


const initialState = {
  userPermissions: [],
  roles: [],
};

const PermissionSlice = createSlice({
  name: "permissions",
  initialState,
  reducers: {
    setUserPermissions: (state, action) => {
      state.userPermissions = action.payload;
    },
    setRoles: (state, action) => {
      state.roles = action.payload;
    },
  },
});

export const { setUserPermissions,setRoles } = PermissionSlice.actions;


export const getAllUserPermissions = (userId) => async (dispatch) => {
  try {
    const response = await fetchUserPermissions(userId);
    dispatch(setUserPermissions(response));
  } catch (error) {
    console.log("USER_PERMISSIONS_ERROR ", error);
  }
};

export const getAllRoles = () => async (dispatch) => {
  try {
    const response = await fetchRoles();
    dispatch(setRoles(response));
  } catch (error) {
    console.log("ROLES_ERROR ", error);
  }
};

export default PermissionSlice.reducer;
