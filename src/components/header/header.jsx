import React from 'react'
import Link from 'next/link';
import Image from 'next/image'; 
export const Header = () => {
  return (
    <header>
      <div>
        <div className='topNav'>
          <nav>
            <Image src={'/images/logo_black.png'} width={50} height={50} alt='image' />
            <ul>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/events'>Events</Link>
              </li>
              <li>
                <Link href='/aboutus'>About</Link>
              </li>
            </ul>
            <h1>Events Accross The Globe</h1>
          </nav>
        </div>
      </div>
        
    </header>
  )
}
