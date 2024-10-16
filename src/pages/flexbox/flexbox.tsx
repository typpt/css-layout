import Logo from '../../assets/img/logo.png';
import User from '../../assets/img/user.jpg';

import { IoIosSearch, IoIosChatboxes } from 'react-icons/io';
import { FaBookmark } from 'react-icons/fa';

export default function Flexbox() {
  return (
    <section className='min-h-screen w-full flex justify-center items-start pt-32 font-normal bg-cover bg-no-repeat bg-gradient-to-br from-rose-500 to-rose-600'>
      <div className='w-[120rem] bg-slate-200 min-h-[50rem] shadow-md'>
        <header className='flex items-center px-12 justify-between h-28 border bg-white border-b border-gray-300'>
          <img src={Logo} alt='Trillo Logo' className='h-12' />
          <form
            action='#'
            className='flex items-center justify-center relative flex-[0_0_40%]'
          >
            <input
              type='text'
              placeholder='Search hotels'
              className='py-3 px-8 border-none bg-slate-100 rounded-[100px] w-11/12 focus:outline-none focus:w-full transition-all duration-300'
            />
          </form>
          <nav className='self-stretch flex items-center'>
            <div className='px-8 h-full flex items-center hover:bg-slate-300'>
              <FaBookmark className='size-8' />
            </div>
            <div className='px-8 h-full flex items-center hover:bg-slate-300'>
              <IoIosChatboxes className='size-9' />
            </div>
            <div className='px-8 h-full flex items-center hover:bg-slate-300'>
              <img
                src={User}
                alt='User Image'
                className='size-14 rounded-full'
              />
              <span>Jonas</span>
            </div>
          </nav>
        </header>
        <div className='flex'>
          <nav className='bg-black flex-[0_0_18%]'>navigation</nav>
          <main className='bg-slate-500 flex-1'>hotel view</main>
        </div>
      </div>
    </section>
  );
}
