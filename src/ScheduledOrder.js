import React from 'react'
import { Table } from './Table'
import {scheduledOrder} from './data/data2'
const ScheduledOrder = () => {
  return (
    <div>

    <Table userData={scheduledOrder}/>
</div>
  )
}

export  {ScheduledOrder}