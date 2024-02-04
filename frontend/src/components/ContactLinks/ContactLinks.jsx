

import { links, openLink } from '@/constants'
import { PhoneRounded, WhatsApp } from '@mui/icons-material'
import React from 'react'



const ContactLinks = () => {


  return (
    <div className='flex flex-row gap-4 px-4 item-center'>
        <WhatsApp className='text-[green] cursor-pointer' onClick={() => openLink("whatsapp")}/>
        <PhoneRounded className='text-[#2f4882] cursor-pointer' onClick={() => openLink("phone")}/>
    </div>
  )
}

export default ContactLinks