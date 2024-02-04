

import { EmailOutlined, LocationOnOutlined, PhoneOutlined } from '@mui/icons-material'
import React from 'react'

const ContactInfo = () => {
  return (
    <div className='flex flex-col items-end gap-2 w-fit text-[20px]'>
        <div className='flex flex-row  gap-2'>
            <p>Yehuda makabi 6, pisgat zeev 489271</p>
            <LocationOnOutlined/>
        </div>
        <div className='flex flex-row gap-2'>
            <p dir="ltr">+972 506678762  fax: 077-08976259</p>
            <PhoneOutlined/>
        </div>
        <div className='flex flex-row gap-2'>
            <p>MyBiz@gmail.com, ron.gov@io.com</p>
            <EmailOutlined/>
        </div>
    </div>
  )
}

export default ContactInfo