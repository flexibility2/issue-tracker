'use client'
import React from 'react'

import { Select } from '@radix-ui/themes'
import { Status } from '@prisma/client'


const statusOptions: {label: string, value?: Status}[] = [
    { label: 'All' },
    { label: 'Open', value: 'OPEN' },
    { label: 'In Progress', value: 'IN_PROGRESS' },
    { label: 'Closed', value: 'DONE' },
]

const IssueStatusFilter = () => {
  return (
    <Select.Root>
        <Select.Trigger placeholder='Filter by status...' />
        <Select.Content>
        {statusOptions.map(status => (
            <Select.Item key={status.value} value={status.value || ''}>
               {status.label}
            </Select.Item>
         ))}
        </Select.Content>
    </Select.Root>
  )
}

export default IssueStatusFilter