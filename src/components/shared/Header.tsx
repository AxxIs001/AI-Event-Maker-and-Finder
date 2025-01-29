import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
      <>
      <header className=" relative bg-cover bg-center     border-b "
      style={{
             backgroundImage: "url('/image/bg-1.jpg'), url('/image/bg-2.jpg')",
             backgroundSize: ' 40% auto, 60% auto',
             backgroundPosition: 'left center, right center',
             backgroundRepeat: 'no-repeat',
      }}
    
     >
      <div className="absolute inset-0 bg-white bg-opacity-90"></div>

      
        <div className="relative z-10 container mx-auto flex justify-between items-center  ">
        <nav>
             <ul className="mt-[14px] px-[100px] text-[14px] flex space-x-[56px]  text-lg font-medium text-gray-800">
                 <li className="text-orange-500"><a href="#">Главная</a></li>
                 <li><a href="#" className="hover:text-orange-500">Каталог</a></li>
                 <li><a href="#" className="hover:text-orange-500">О нас</a></li>
                 <li><a href="#" className="hover:text-orange-500">Блог</a></li>
                 <li><a href="#" className="hover:text-orange-500">Контакты</a></li>
               </ul>
             </nav>
             <div className="flex space-x-[20px]  text-[14px]  px-[100px] mt-[14px]" >
              <ul className="">
                <li>09:00-21:00</li>
                <li>по КР</li>
                </ul>
                <div className="border-l border-black "></div>
                <ul>
                <li>0700 00-00-00</li>
                <li>заказать</li>
              </ul>
             </div>
  
        </div>
        {/* <hr className=" mt-[5px] my-4 border-t-1 border-gray" /> */}
        <div className="relative z-10 mb-[40px] py-2">
            <div className="container mx-auto flex justify-between items-center">
            <div className="mt-[42px] px-[100px] logo" >
          <Link href="/" className="text-xl font-bold">LOGO</Link>
        </div>

        <div className="flex items-center  bg-[#fff8dc]/60 bg-gray-100 rounded-lg px-4 py-2 w-[560px] h-[40px] mt-[37px]">
  <input
    type="text"
    placeholder="Поиск..."
    className="flex-1 bg-transparent outline-none  text-gray-700 placeholder-gray-500 px-2"
  />
  <button className="ml-2 text-gray-600 hover:text-gray-800">
  <Image
            src="/icons/search.svg"
            alt="Избранное"
            width={24}
            height={24}
            className="w-6 h-6 ml-[5px] "
          />
  </button>
</div>

    <nav className="relative z-10 flex  px-[100px] mt-[35px]  items-centre justify-center text-[12px] space-x-[24px]">
      <Link href="/login"className="   text-gray-700 hover:text-gray-900">
          <Image
            src="/icons/profile.svg"
            alt="Избранное"
            width={24}
            height={24}
            className="w-6 h-6 ml-[5px] "
          />
          <span>Войти</span>
       
      </Link>
      <Link href="/login"className="  text-gray-700 hover:text-gray-900">
     
          <Image
            src="/icons/heart.svg"
            alt="Корзина"
            width={24}
            height={24}
            className="w-6 h-6 ml-[14px]"
          />
         
      <span className=''>Избранное</span>
      </Link>
      <Link href="/login"className="   text-gray-700 hover:text-gray-900">
      
          <Image
            src="/icons/shop.svg"
            alt="Корзина"
            width={24}
            height={24}
            className="w-6 h-6 ml-[10px]"
          />
         
      <span>Корзинка</span>
      </Link>
      
    </nav>
    
            </div>
        </div>
      </header>
      </>
    )
}
  



       