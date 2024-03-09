import React from 'react'
const Sidebar = () => {
  const listSidebar = [
    'กฎ กติกาและมารยาท',
    'คำแนะนำการโพสต์',
    'นโยบายเกี่ยวกับข้อมูลส่วนบุคคล',
    'สิทธิ์การใช้งานของสมาชิก',
    'ติดต่อทีมงาน Pantip',
    'ติดต่อลงโฆษณา',
    'ร่วมงานกับ Pantip',
    'Download App Pantip',
    'Pantip Certified Developer'
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
      <img src='https://upload.wikimedia.org/wikipedia/th/c/c5/Pantip_Logo.png' />
      <br />
      {mapListSidebar}
    </div>
  )
}

export default Sidebar