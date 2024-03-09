import React from 'react'

const Result = () => {
    const products = [
        {
            id: 1,
            name: 'มิจฉาชีพ มีรูปแบบใหม่มาอีกแล้ว?',
            href: '#',
            price: '8 มี.ค. 67',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
            nimDetail: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        },
        {
            id: 2,
            name: 'สามีหารทุกอย่าง ควรไปต่อหรือแยกย้ายดี',
            href: '#',
            price: '8 มี.ค. 67',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
            nimDetail: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        },
        {
            id: 3,
            name: 'พี่สาวลาออกจากเงินเดือน 13,500 มารับเงินเดือน 6,500 บอกเพื่อความมั่นคงในอนาคต',
            href: '#',
            price: '4 มี.ค. 67',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
            nimDetail: 'Person using a pen to cross a task off a productivity paper card.',
        },
        {
            id: 4,
            name: 'อายุ39​ย่าง40​ หย่าร่างและมีลูกติด​ มีสิทธิ์​พบเริ่มต้นใหม่กับสาวโสดไม่มีลูกติดไหมครับ',
            href: '#',
            price: '4 มี.ค. 67',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
            nimDetail: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        },
        {
            id: 5,
            name: 'มาแล้วครับ ต่อทะเบียนพ่วงค่าปรับจรารร...//////////',
            href: '#',
            price: '28 ก.พ. 67',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-05.jpg',
            nimDetail: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        },
        {
            id: 6,
            name: 'บริษัท อิตาเลียนไทย ดีเวล๊อปเมนต์ จำกัด (มหาชน) จ่ายเงินเดือนพนักงานล่าช้ามา2เดือนเเล้ว',
            href: '#',
            price: '28 ก.พ. 67',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-06.jpg',
            nimDetail: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        },
        {
            id: 7,
            name: 'ผู้หญิง​ที่ผชซื้อรถญี่ปุ่น​ รถอีโค่คาร์​ให้ ทำไมยังยอมทนเป็นเมียน้อย',
            href: '#',
            price: '20 ก.พ. 67',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-07.jpg',
            nimDetail: 'Person using a pen to cross a task off a productivity paper card.',
        },
        {
            id: 8,
            name: 'แฟนเอาเงินเดือนให้พ่อเเม่หมดเเถมยังไม่ยอมเล่าเรื่องครอบครัวให้เรารู้',
            href: '#',
            price: '18 ก.พ. 67',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-08.jpg',
            nimDetail: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        },
    ]

    return (
        <div className="mx-auto max-w-1xl sm:px-6 sm:py-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 xl:gap-x-8">
                {products.map((product) => (
                    <a key={product.id} href={product.href} className="group">
                        <h3 className="text-sm font-bold text-gray-700 h-20">{product.name}</h3>
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                            <img
                                src={product.imageSrc}
                                alt={product.nimDetail}
                                className="h-full w-full object-cover object-center group-hover:opacity-75"
                            />
                        </div>
                        <p className="mt-1 text-[12px] text-gray-600">{product.price}</p>
                        <p className="mt-1 text-[12px] text-gray-600">{product.nimDetail}</p>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Result