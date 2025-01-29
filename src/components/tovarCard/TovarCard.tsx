"use client";
import { useState } from "react";
import Image from "next/image";
//imgs
import tovarImg from "../../../public/img/card/image 18.png";
import cartImg from "../../../public/img/card/cart.svg";
import heartSelectedImg from "../../../public/img/card/SelectedHeart.svg";
import heartNotSelectedImg from "../../../public/img/card/Heart.svg";
import starImg from "../../../public/img/card/Star.svg";

export const TovarCard = () => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div className="max-w-[226px] pt-[15px] pl-[11px] pr-[11px] pb-[16px] border rounded-[6px] relative">
      <div>
        <Image
          src={tovarImg}
          layout="responsive"
          width={197}
          height={197}
          alt="tovar image"
        />
      </div>
      <div className="flex gap">
        {[...Array(5)].map(() => (
          <Image src={starImg} width={20} height={20} alt="star" />
        ))}
      </div>
      <div className="mt-[5px] mb-[10px] text-[12px]">
        Прицел тепловизованный{""}
        <span className="font-semibold"> Arkon Alfa ST25</span>
      </div>
      <div className="flex justify-between">
        <div>
          <div className="text-xs text-neutral-500 line-through">12000 сом</div>
          <div className="font-extrabold">12000 сом</div>
        </div>
        <div>
          <Image
            className="cursor-pointer"
            src={cartImg}
            width={45}
            height={45}
            alt="cart img"
          />
        </div>
      </div>

      {isSelected ? (
        <Image
          className="absolute top-[15px] right-[15px] cursor-pointer"
          src={heartSelectedImg}
          width={22}
          height={20.78}
          alt="heart"
          onClick={() => setIsSelected((prev) => !prev)}
        />
      ) : (
        <Image
          className="absolute top-[15px] right-[15px] cursor-pointer"
          src={heartNotSelectedImg}
          width={22}
          height={20.78}
          alt="heart"
          onClick={() => setIsSelected((prev) => !prev)}
        />
      )}
    </div>
  );
};
