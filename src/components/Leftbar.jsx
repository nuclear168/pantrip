import React from 'react'
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'

const Leftbar = () => {
  const listSidebar = [
    'กฎ กติกาและมารยาท',
    'คำแนะนำการโพสต์',
    'นโยบายเกี่ยวกับข้อมูลส่วนบุคคล',
    'สิทธิ์การใช้งานของสมาชิก',
    'ติดต่อทีมงาน Pantip',
    'ติดต่อลงโฆษณา',
    'ร่วมงานกับ Pantip',
    'Download App Pantip',
    'Pantip Certified Developer',
    '© 2024 Internet Marketing co., ltd'
  ];

  const mapListSidebar = listSidebar.map((detail) => {

    return (
      <>
        {detail}<br /><br />
      </>
    )
  })

  return (
    <div className='text-[12px]'>
      {mapListSidebar}
    </div>
  )
}

export default Leftbar