import { CiMenuBurger } from 'react-icons/ci'
import { FaBloggerB } from 'react-icons/fa'
import Search from './Search'
import { useContext, useState } from 'react'
import AuthModal from './AuthModal'
import AuthContext from '../context/AuthContext'
import { Context } from '../context/Context'
import { toast } from 'react-toastify'

export const Header = () => {
  const { user, logoutUser } = useContext(AuthContext)
  const { isModalOpen, setIsModalOpen } = useContext(Context)

  const [isSignIn, setIsSignIn] = useState(true)

  const handleLogout = () => {
    logoutUser()
    toast.success('Đăng xuất thành công')
  }

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

        {!user ? (
          <>
            <div className='flex items-center space-x-4'>
              <button
                onClick={() => {
                  setIsModalOpen(true)
                  setIsSignIn(true)
                }}
                className='px-4 py-2 text-gray-700 hover:text-gray-900'
              >
                Đăng nhập
              </button>
              <button
                onClick={() => {
                  setIsModalOpen(true)
                  setIsSignIn(false)
                }}
                className='px-4 py-2 bg-black text-white rounded hover:bg-gray-800'
              >
                Đăng ký
              </button>
            </div>
          </>
        ) : (
          <button onClick={handleLogout} className='px-4 py-2 bg-black text-white rounded hover:bg-gray-800'>
            Đăng xuất
          </button>
        )}

        <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} isSignIn={isSignIn} setIsSignIn={setIsSignIn} />
      </div>
    </header>
  )
}
