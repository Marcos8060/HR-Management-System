import React from 'react'
import Layout from '@/components/Layout'
import { useAuth } from '@/assets/hooks/use-auth'
import { Container } from '@mui/material';

const GeneralDashboard = () => {
    const user = useAuth();

  return (
    <Container maxWidth="xl" className="py-4">
        <h1 className='text-xl'>Welcome {user.username}</h1>
    </Container>
  )
}

GeneralDashboard.getLayout = (page:React.ReactNode)=>(
    <Layout>{page}</Layout>
)

export default GeneralDashboard