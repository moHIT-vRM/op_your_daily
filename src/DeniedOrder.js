import React from 'react'
import { Table } from './Table'
import {deniedOrder} from './data/data2'

const DeniedOrder = () => {
  return (
    <div>

        <Table userData={deniedOrder}/>
    </div>
  )
}

export {DeniedOrder}