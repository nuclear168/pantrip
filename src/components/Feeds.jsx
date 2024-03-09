import React from 'react'
import Sidebar from './Sidebar'
import Leftbar from './Leftbar'

const Feeds = () => {
  const products = [
    {
      id: 1,
      name: 'ชวนแชร์ปัญหาผิวเป็นสิวและวิธีการดูแลของคุณ ลุ้นรับเซรั่มใหม่ล่าสุดจากไบโอเดอร์มา! 100 รางวัล',
      href: '#',
      price: '$48',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      nimDetail: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'ทำยังไงเมื่อโดนรุ่นพี่ขอเป็น FWB และเราปฏิเสธ แต่ยังต้องทำงานด้วยกันต่อ',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      nimDetail: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'เชียร์สด ! แบดมินตัน YONEX French Open 2024 : รอบรองชนะเลิศ (9 มี.ค. 67) (คู่แรกเวลา 16.00 น.)',
      href: '#',
      price: '$89',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      nimDetail: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'อะไรคือ จุดอ่อนที่ทำให้กระแสตีกลับของละคร ลออจันทร์ ดวงใจเทวพรหม',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      nimDetail: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 5,
      name: 'ทำไมคาริน่าเป็นคนเดียวในวงที่ไม่รับเเบรนด์เเอมเเฟชั่นเสื้อผ้าครับ?',
      href: '#',
      price: '$64',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-05.jpg',
      nimDetail: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 6,
      name: 'Focus Multi-Pack',
      href: '#',
      price: '$39',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-06.jpg',
      nimDetail: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 7,
      name: 'ลูก30ปีกับ15ปีผมของไม่ยอมเรียนไม่ยอมทำงาน ผมเตรียมทรัพย์32ล้านให้จะพอไหมครับ',
      href: '#',
      price: '$50',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-07.jpg',
      nimDetail: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 8,
      name: 'ร้านรับเฉพาะเงินสด กับ ร้านไม่รับเงินสด ตอนนี้ แบบไหนเยอะกว่ากัน',
      href: '#',
      price: '$32',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-08.jpg',
      nimDetail: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
  ]

  return (
    <div className='flex'>
      <div className='w-1/4 sm:px-6 sm:py-10 lg:px-8'>
        <Sidebar />
      </div>
      <div className="w-1/2 mx-auto sm:px-6 sm:py-10 lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.nimDetail}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-[12px] text-gray-900">{product.name}</h3>
            </a>
          ))}
        </div>
      </div>
      <div className='w-1/4 sm:px-6 sm:py-10 lg:px-8'>
        <Leftbar />
      </div>
    </div>
  )
}

export default Feeds