import React from 'react'
import { Table } from './Table'
import { userDetails } from './data/data'

const UserDetails = () => {
  return (
    <div>
    <Table userData={userDetails} />
  </div>
  )
}

export  {UserDetails}