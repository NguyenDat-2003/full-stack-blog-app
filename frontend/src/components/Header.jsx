import { CiMenuBurger } from 'react-icons/ci'
import { FaBloggerB } from 'react-icons/fa'
import Search from './Search'

export const Header = () => {
  return (
    <header className='bg-gray-100 fixed top-0 right-0 left-0 z-40'>
      <div className='container mx-auto px-4 py-3 flex items-center justify-between'>
        <button className='lg:hidden'>
          <CiMenuBurger className='w-6 h-6' />
          <span>Menu</span>
        </button>

        <div className='flex items-center space-x-4'>
          <Search />
        </div>

        <div className='text-center cursor-pointer'>
          <a href='/'>
            <FaBloggerB size={42} />
          </a>
        </div>

        <div className='flex items-center space-x-4'>
          <button className='px-4 py-2 text-gray-700 hover:text-gray-900'>Đăng nhập</button>
          <button className='px-4 py-2 bg-black text-white rounded hover:bg-gray-800'>Đăng ký</button>
        </div>
      </div>
    </header>
  )
}
