import { createSlice } from "@reduxjs/toolkit";
import { fetchProjects } from "../../services/projects";


const initialState = {
  projects: [],
};

const ProjectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
  },
});

export const { setProjects } = ProjectSlice.actions;


export const getAllProjects = (auth) => async (dispatch) => {
  try {
    const response = await fetchProjects(auth);
    dispatch(setProjects(response));
  } catch (error) {
    console.log("PROJECTS_ERROR ", error);
  }
};

export default ProjectSlice.reducer;
