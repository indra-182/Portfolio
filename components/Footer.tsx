import React, { SVGProps } from 'react'

const navigation = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mahadiindra182/',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
        <path d='M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zM8 19h-3v-10h3v10zM6.5 7.9c-1 0-1.7-0.7-1.7-1.6 0-0.9 0.8-1.6 1.7-1.6 0.9 0 1.6 0.7 1.6 1.6 0 0.9-0.7 1.6-1.6 1.6zM20 19h-3v-5c0-2.2-2.8-2-2.8 0v5h-3v-10h3v1.2c1.4-2.4 6-2.6 6 2.3v6.5z' />
      </svg>
    )
  },
  {
    name: 'GitHub',
    href: 'https://github.com/indra-182',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
        <path d='M12 .5c-6.6 0-12 5.4-12 12 0 5.3 3.4 9.8 8.1 11.4.6.1.9-.2.9-.6 0-.3-.1-1.1-.1-2.1-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 1 .1-.6.4-1.1.7-1.3-2.7-.3-5.6-1.4-5.6-6 0-1.3.5-2.5 1.3-3.4-.1-.3-.6-1.5.1-3.2 0 0 1.1-.3 3.5 1.3 1-.3 2-.4 3-.4s2 .2 3 .4c2.3-1.6 3.5-1.3 3.5-1.3.7 1.7.2 2.9.1 3.2.8.9 1.3 2 1.3 3.4 0 4.6-2.9 5.6-5.6 6 .4.3.7.9.7 1.8 0 1.3-.1 2.4-.1 2.8 0 .4.3.7.9.6 4.7-1.6 8.1-6.1 8.1-11.4 0-6.6-5.4-12-12-12z' />
      </svg>
    )
  }
]

const Footer = () => {
  return (
    <footer className='py-8'>
      <div className='container max-w-3xl'>
        <div className='md:flex md:items-center md:justify-between'>
          <div className='flex justify-center space-x-6 md:order-2'>
            {navigation.map(item => (
              <a
                key={item.name}
                href={item.href}
                rel='noopener noreferrer'
                className='text-muted-foreground hover:text-foreground'
              >
                <span className='sr-only'>{item.name}</span>
                <item.icon className='h-5 w-5' aria-hidden='true' />
              </a>
            ))}
          </div>
          <div className='mt-8 md:order-1 md:mt-0'>
            <p className='text-center text-sm leading-6 text-muted-foreground'>
              &copy; {new Date().getFullYear()} Mahadi Indra. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
