import React from 'react'
import { Table } from './Table'
import {disputedOrder} from './data/data2'
const DisputedOrder = () => {
  return (
    <div>

    <Table userData={disputedOrder}/>
</div>
  )
}

export {DisputedOrder}