import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import ProjectsDataGrid from "@/components/dashboard/projects/projects-datagrid";
import { Container } from "@mui/material";
import { getAllProjects } from "@/redux/features/projects";
import { useSelector, useDispatch } from "react-redux";
import { useAuth } from "@/assets/hooks/use-auth";
import ProtectedRoute from "@/assets/utils/hoc/protected-route";

const Projects = () => {
  const dispatch = useDispatch();
  const { projects } = useSelector(({ project }) => project);
  const { userPermissions } = useSelector(({ auth }) => auth);
  const authUser = useAuth();

  console.log("AUTH_USER_USER ", authUser);

  useEffect(() => {
    if (authUser && userPermissions) {
      dispatch(getAllProjects(authUser));
    }
  }, [authUser]);

  return (
    <ProtectedRoute permission="CAN_ACCESS_PROJECTS">
      <Container maxWidth="xl" className="py-4 h-[88vh]">
        <h1 className="text-2xl font-semibold my-4">All Projects</h1>
        <ProjectsDataGrid />
      </Container>
    </ProtectedRoute>
  );
};

Projects.getLayout = (page: React.ReactNode) => <Layout>{page}</Layout>;

export default Projects;
