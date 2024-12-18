import Link from 'next/link'
import React from 'react'
import ThemeToggle from './ThemeToggle'

const Header = () => {
  return (
    <header className='fixed inset-x-0 bg-background/75 py-6 backdrop-blur-sm'>
      <nav className='container flex max-w-3xl items-center justify-between'>
        <div>
          <Link href='/' className='font-serif text-xl font-bold'>
            Mahadi Indra
          </Link>
        </div>

        <ul className='flex items-center gap-6 text-sm font-light text-muted-foreground sm:gap-8'>
          <li className='transition-colors hover:text-foreground'>Posts</li>
          <li className='transition-colors hover:text-foreground'>Projects</li>
          <li className='transition-colors hover:text-foreground'>Contacts</li>
        </ul>

        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}

export default Header
