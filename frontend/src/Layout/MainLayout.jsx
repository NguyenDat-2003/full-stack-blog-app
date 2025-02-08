import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Navigation } from '../components/Navigation'
import { useEffect, useState } from 'react'
import { fetchData } from '../utils/fetchData'

export const MainLayout = () => {
  const [listCate, setListCate] = useState([])
  const fetchCate = async () => {
    try {
      const response = await fetchData('http://127.0.0.1:8080/category')
      setListCate(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchCate()
  }, [])

  return (
    <>
      {/* Top Header */}
      <Header />
      <Navigation listCate={listCate} />
      <Outlet />
      <Footer />
    </>
  )
}
