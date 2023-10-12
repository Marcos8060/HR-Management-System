import React from 'react'
import Layout from '@/components/Layout'

const Clients = () => {
  return (
    <div>Clients</div>
  )
}

Clients.getLayout = (page: React.ReactNode) => (
    <Layout>{page}</Layout>
)

export default Clients