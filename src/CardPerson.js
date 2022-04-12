import React from 'react'
import { Table } from './Table'
import { carPerssonDetails } from './data/data'

const CardPerson = () => {
  return (
    <div>

        <Table userData={carPerssonDetails}/>
    </div>
  )
}

export  {CardPerson}