import { CalendarDays } from 'lucide-react'
import React from 'react'

const AddToPlan = () => {
  return (
    <div>
        <button className='btn-primary flex items-center gap-1'>
          <span><CalendarDays size={17} /></span>
          Add to {"today's"} plan</button>
    </div>
  )
}

export default AddToPlan