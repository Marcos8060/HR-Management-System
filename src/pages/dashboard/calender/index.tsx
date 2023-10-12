import React from 'react'
import Layout from '@/components/Layout'

const Calender = () => {
  return (
    <div>Calender</div>
  )
}

Calender.getLayout = (page: React.ReactNode) => (
    <Layout>{page}</Layout>
)

export default Calender