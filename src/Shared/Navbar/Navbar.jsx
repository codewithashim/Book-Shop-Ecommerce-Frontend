import { MainLogo } from '@/src/Assets';
import { AuthContext } from '@/src/Context/UserContext';
import useAdmin from '@/src/Hooks/useAdmin';
import useCommonApiData from '@/src/Hooks/useCommonApiData';
import { Close, Search } from '@material-ui/icons';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaMicrosoft, FaPowerOff, FaUserAlt } from 'react-icons/fa';
import { MdOutlineShoppingBag } from 'react-icons/md';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user } = useContext(AuthContext)
  const { handleLogout } = useCommonApiData()
  const userEmail = user?.email;
  const [isAdmin] = useAdmin();

  console.log(isAdmin, 'isAdmin')

  return (
    <nav className="bg-[#ffffff] md:px-4 border-b py-2 flex items-center text-black container">
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center gap-4">
          <Link className='text-2xl font-bold text-black' href="/">
            <Image src={MainLogo} alt="logo" width={130} height={80}
              className='cursor-pointer hover:scale-105 duration-300 transform'
            />
          </Link>
          <div className=" md:flex hidden border border-[#c4c4c4] items-center bg-[#281a1a00] p-1 rounded-md gap-2 common-hover">
            <input type="text" className='w-[300px] pl-2 py-1 text-black' placeholder='Search' />
            <Search className='text-[#595959]' />
          </div>
        </div>

        <ul className="items-center hidden space-x-6 md:flex">
          <li className='border-r px-2 h-full border-[gray]'>
            <Link href="/">Home</Link>
          </li>
          <li className='border-r px-2 h-full border-[gray] '>
            <Link href="/product">Shop</Link>
          </li>
          {/* <li className='border-r px-2 h-full border-[gray]'>
            <Link href="/blog">Blog</Link>
          </li> */}
          <li className='border-r px-2 h-full border-[gray]'>
            {
              !userEmail ? (
                <>
                  <Link href="/auth/login" className="flex items-center justify-center gap-2 border-common-btn common-hover">
                    <FaUserAlt /> SignIn
                  </Link>
                </>
              ) : (
                <div className="flex justify-center items-center gap-2">
                  {
                    isAdmin && <Link href="/dashboard" className="flex items-center justify-center gap-2 border-common-btn common-hover">
                      <FaMicrosoft /> Dashboard
                    </Link>
                  }
                  <button className="flex items-center justify-center gap-2 my-2 border-common-btn common-hover"
                    onClick={() => handleLogout()}
                  >
                    <FaPowerOff /> Logout
                  </button>
                </div>
              )
            }
          </li>
          <Link href="/cart" className='bg-[#9cb3dd43] w-[40px] rounded-full flex items-center justify-center h-[40px] common-hover' >
            <MdOutlineShoppingBag className='text-2xl text-[#335187]' />
          </Link>
        </ul>

        {/* shop and menu button group for small device */}
        <div className="flex items-center gap-4 md:hidden">
          <Link href="">
            <div className='bg-[#9cb3dd43] w-[40px] rounded-full flex items-center justify-center h-[40px]'>
              <MdOutlineShoppingBag className='text-2xl text-[#335187]' />
            </div>
          </Link>


          <button className='block md:hidden' onClick={() => setOpen(!open)}>
            <AiOutlineMenu className='text-3xl' />
          </button>
        </div>

        {/* side bar for small device */}
        <aside className={`${open ? 'left-0 ' : 'left-[-250%]'} duration-300 w-full overflow-hidden fixed bg-[#172733] h-screen top-0 p-4 text-white z-10`}>
          <button className='float-right' onClick={() => setOpen(!open)}>
            <Close className='text-5xl' />
          </button><br />
          <ul className="flex flex-col gap-6">
            <li className="common-hover">
              <Link href="/">Home</Link>
            </li>
            <li className="common-hover">
              <Link href="/product" >Shop</Link>
            </li>
            <li className="common-hover">
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              {
                !userEmail ? (
                  <>
                    <Link href="/auth/login" className="flex items-center justify-center gap-2 border-common-btn ">
                      <FaUserAlt /> SignIn
                    </Link>
                  </>
                ) : (
                  <>
                    {
                      isAdmin && <Link href="/dashboard" className="flex items-center justify-center gap-2 border-common-btn ">
                        <FaMicrosoft /> Dashboard
                      </Link>
                    }
                    <button className="flex items-center justify-center w-full gap-2 my-2 border-common-btn"
                      onClick={() => handleLogout()}
                    >
                      <FaPowerOff /> Logout
                    </button>
                  </>
                )
              }
            </li>
            <li className="flex items-center jsutif bg-[white] p-1 rounded-md gap-2">
              <input type="text" className='w-full pl-2 text-black' placeholder='Search' />
              <Search className='text-black' />
            </li>

          </ul>
        </aside>
      </div>
    </nav>
  );
};

export default Navbar;
