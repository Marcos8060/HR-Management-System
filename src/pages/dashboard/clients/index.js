import React from 'react'
import Layout from '@/components/Layout'

const Clients = () => {
  return (
    <div>Clients</div>
  )
}

Clients.getLayout = (page) => (
    <Layout>{page}</Layout>
)

export default Clients