import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <div className='container mx-auto'>
          <img className='mx-auto' src='/logo_palpitebox.png' alt='PalpiteBox' />
        </div>
      </div>
      <div className='bg-gray-300 p-4 shadow-md text-center'>
        <Link href='/'>
          <a className='font-bold px-2 hover:underline hover:text-orange-800'>Home</a>
        </Link>
        <Link href='/sobre'>
          <a className='font-bold px-2 hover:underline hover:text-orange-800'>Sobre</a>
        </Link>
        <Link href='/contato'>
          <a className='font-bold px-2 hover:underline hover:text-orange-800'>Contato</a>
        </Link>
      </div>
    </React.Fragment>
  )
}
export default Header
