import React, { useState } from 'react'
import { LeftArrow, RightArrow } from './category/Arrow';
import ReelsCategory from './Reels/Caregory'

// menu category
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

import "./globalStyles.css";
import "./hideScrollbar.css";
import usePreventBodyScroll from "./usePreventBodyScroll";

const Reels = () => {
  const roomPantip = [
    {
      icon: <img src='https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg' className="h-full w-full rounded-lg object-cover object-center group-hover:opacity-75" />,
      name: "ชีวิตคู่ชีวิตตัวจริง",
      nimDetail: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      icon: <img src='https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg' className="h-full w-full rounded-lg object-cover object-center group-hover:opacity-75" />,
      name: "กิน - ที่ไหนดี",
      nimDetail: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      icon: <img src='https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg' className="h-full w-full rounded-lg object-cover object-center group-hover:opacity-75" />,
      name: "ท่องเที่ยว สนุกทั้งทวีป",
      nimDetail: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      icon: <img src='https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg' className="h-full w-full rounded-lg object-cover object-center group-hover:opacity-75" />,
      name: "การ์ตูน & อนิเมะ",
      nimDetail: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      icon: <img src='https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-05.jpg' className="h-full w-full rounded-lg object-cover object-center group-hover:opacity-75" />,
      name: "กีฬา",
      nimDetail: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      icon: <img src='https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-06.jpg' className="h-full w-full rounded-lg object-cover object-center group-hover:opacity-75" />,
      name: "กล้อง ภาพถ่าย ดีไซน์",
      nimDetail: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      icon: <img src='https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-07.jpg' className="h-full w-full rounded-lg object-cover object-center group-hover:opacity-75" />,
      name: "ไอที",
      nimDetail: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      icon: <img src='https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-08.jpg' className="h-full w-full rounded-lg object-cover object-center group-hover:opacity-75" />,
      name: "เกม",
      nimDetail: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      icon: <img src='https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg' className="h-full w-full rounded-lg object-cover object-center group-hover:opacity-75" />,
      name: "คอมพิวเตอร์",
      nimDetail: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      icon: <img src='https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg' className="h-full w-full rounded-lg object-cover object-center group-hover:opacity-75" />,
      name: "โทรศัพท์มือถือ",
      nimDetail: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      icon: <img src='https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg' className="h-full w-full rounded-lg object-cover object-center group-hover:opacity-75" />,
      name: "การศึกษา การเรียน",
      nimDetail: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      icon: <img src='https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg' className="h-full w-full rounded-lg object-cover object-center group-hover:opacity-75" />,
      name: "สุขภาพ",
      nimDetail: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      icon: <img src='https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-05.jpg' className="h-full w-full rounded-lg object-cover object-center group-hover:opacity-75" />,
      name: "ความงาม แฟชั่น",
      nimDetail: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      icon: <img src='https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-06.jpg' className="h-full w-full rounded-lg object-cover object-center group-hover:opacity-75" />,
      name: "หนัง ตามหนัง และดูหนัง",
      nimDetail: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      icon: <img src='https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-07.jpg' className="h-full w-full rounded-lg object-cover object-center group-hover:opacity-75" />,
      name: "ความรัก",
      nimDetail: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      icon: <img src='https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-08.jpg' className="h-full w-full rounded-lg object-cover object-center group-hover:opacity-75" />,
      name: "สังคม",
      nimDetail: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      icon: <img src='https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg' className="h-full w-full rounded-lg object-cover object-center group-hover:opacity-75" />,
      name: "เล่นเกมออนไลน์",
      nimDetail: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      icon: <img src='https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg' className="h-full w-full rounded-lg object-cover object-center group-hover:opacity-75" />,
      name: "การออกกำลังกาย",
      nimDetail: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      icon: <img src='https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg' className="h-full w-full rounded-lg object-cover object-center group-hover:opacity-75" />,
      name: "ดนตรี",
      nimDetail: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      icon: <img src='https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg' className="h-full w-full rounded-lg object-cover object-center group-hover:opacity-75" />,
      name: "ความรู้สึก ความคิดเห็น",
      nimDetail: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
  ]

  const getItems = roomPantip.map((room, ind) => ({
    id: ind,
    icon: room.icon,
    name: room.name,
    nimDetail: room.nimDetail
  }));

  const [items] = useState(getItems);
  const { disableScroll, enableScroll } = usePreventBodyScroll();

  const onWheel = (apiObj, ev) => {
    const isTouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

    if (isTouchpad) {
      ev.stopPropagation();
      return;
    }

    if (ev.deltaY < 0) {
      apiObj.scrollNext();
    } else if (ev.deltaY > 0) {
      apiObj.scrollPrev();
    }
  }

  return (
    <div className="pt-5">
      <h2 className='px-8 font-bold'>Reels Pantip</h2>
      <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
        <ScrollMenu
          LeftArrow={LeftArrow}
          RightArrow={RightArrow}
          onWheel={onWheel}
        >
          {items.map(({ id, name, icon, nimDetail }) => (
            <ReelsCategory
              icon={icon}
              title={id}
              name={name}
              nimDetail={nimDetail}
              itemId={id} // NOTE: itemId is required for track items
              key={id}
            />
          ))}
        </ScrollMenu>
      </div>
    </div>
  )
}

export default Reels