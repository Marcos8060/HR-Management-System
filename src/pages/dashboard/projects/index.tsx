import React from "react";
import Layout from "@/components/Layout";
import ProjectsDataGrid from "@/components/dashboard/projects/projects-datagrid";
import { Container } from "@mui/material";

const Projects = () => {
  return (
    <Container maxWidth="xl" className="py-4 h-[88vh]">
      <h1 className="text-2xl font-semibold my-4">All Projects</h1>
      <ProjectsDataGrid />
    </Container>
  );
};

Projects.getLayout = (page: React.ReactNode) => <Layout>{page}</Layout>;

export default Projects;
