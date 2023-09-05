import React from 'react'
import Layout from '@/components/Layout'
import { Container } from '@mui/material'
import ApprovedProjectsDataGrid from '@/components/dashboard/projects/approved-projects-datagrid'



const ApprovedProjects = () => {
  return (
    <Container maxWidth="xl" className="py-4 h-[88vh]">
      <h1 className="text-2xl font-semibold my-4">Approved Projects</h1>
      <ApprovedProjectsDataGrid />
    </Container>
  )
}

ApprovedProjects.getLayout = (page:React.ReactNode) =>(
    <Layout>{page}</Layout>
)

export default ApprovedProjects
