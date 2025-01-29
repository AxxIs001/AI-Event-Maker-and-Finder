import React from "react";
import Link from "next/link";


interface Props {
  className?: string;
}

export const MobileFooter: React.FC<Props> = ({ className }) => {
  return (
    <div className={` ${className}`}>
<div className="absolute w-[1440px] font-[Poppins] bg-black h-[323px] left-0 top-[890px] text-white ">
<div className="flex flex-row justify-center items-start p-0 w-[1160px] h-[275px] gap-[233px] absolute left-[calc(50%-1160px/2)] top-[calc(50%-275px/2)] bg-black text-white">      
          <div className="flex flex-col items-center p-0 gap-[15px] w-[44] h-[275]">
            <span className="flex items-end w-[47] h-[23] text-[#24B4E6] font-[700] text-[20px]">logo</span>
          </div>  
          <div className="flex flex-col justify-center items-start p-0 gap-[15px] w-[116px] h-[260px] ">

              <Link href="/" className="h-[40px] text-right tracking-[0.6px] font-[700] leading-[40px]  text-[20px] hover:text-white hover:underline">
                ГЛАВНАЯ
             </Link>
             <Link href="/" className="h-[40px] text-right tracking-[0.6px] font-[700] leading-[40px]  text-[20px] hover:text-white hover:underline">
             КАТАЛОГ
              </Link>
              <Link href="/" className="h-[40px] text-right tracking-[0.6px] font-[700] leading-[40px]  text-[20px] hover:text-white hover:underline">
                О НАС
              </Link>
              <Link href="/" className="h-[40px] text-right tracking-[0.6px] font-[700] leading-[40px]  text-[20px] hover:text-white hover:underline">
                БЛОГ
              </Link>
              <Link href="/" className="h-[40px] text-right tracking-[0.6px] font-[700] leading-[40px]  text-[20px] hover:text-white hover:underline">
                КОНТАКТЫ
              </Link>
            </div>
          
          <div className="flex flex-col justify-center items-start p-0 w-[309] h-[260] gap-[45px]">

           <div className="flex flex-col items-start p-0 gap-[20px] w-[309] h-[49]">
            <span className="flex items-center tracking-[0.4px] h-[14] font-[700] text-[20px] leading-[6px] text-[#7E8085]">ADDRESS</span>
            <span className="flex items-center h-[15] font-[700] text-[20px] leading-[8px] ">1B Suffolk St, London SW1Y 4HT</span>
            </div>
            <div className="flex flex-col items-start p-0 gap-[20px] w-[309] h-[49]">
            <span className="flex items-center tracking-[0.4px] h-[14] font-[700] text-[20px] leading-[6px] text-[#7E8085]] text-[#7E8085]">PHONE</span>
            <span className="flex items-center h-[15] font-[700] text-[20px] leading-[8px]">+44 20 1234 5678</span>
            </div>
            <div className="flex flex-col items-start p-0 gap-[20px] w-[309] h-[49]">
            <span className="flex items-center tracking-[0.4px] h-[14] font-[700] text-[20px] leading-[6px] text-[#7E8085]] text-[#7E8085]">EMAIL</span>
            <span className="flex items-center h-[15] font-[700] text-[20px] leading-[8px]">info@econcrete.kit</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};