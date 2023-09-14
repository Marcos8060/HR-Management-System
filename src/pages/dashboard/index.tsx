import React from 'react'
import Layout from '@/components/Layout'

const GeneralDashboard = () => {
  return (
    <div>GeneralDashboard</div>
  )
}

GeneralDashboard.getLayout = (page:React.ReactNode)=>(
    <Layout>{page}</Layout>
)

export default GeneralDashboard