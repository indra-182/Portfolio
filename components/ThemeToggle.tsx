'use client'

import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from 'lucide-react'
import { Switch } from './ui/switch'

const ThemeToggleSwitch = () => {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className='flex h-full w-full items-center justify-center'>
        <div className='h-6 w-6 animate-spin rounded-full border-b-2 border-t-2 border-white'></div>
      </div>
    )
  }

  const handleThemeChange = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className='flex items-center space-x-2'>
      <SunIcon
        className={`h-5 w-5 ${resolvedTheme === 'light' ? 'text-orange-300' : 'text-gray-400'}`}
      />
      <Switch
        checked={resolvedTheme === 'dark'}
        onCheckedChange={handleThemeChange}
        className='relative inline-flex h-6 w-11 items-center rounded-full transition-transform duration-500 ease-in-out'
      >
        <span
          aria-hidden='true'
          className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform duration-500 ease-in-out ${
            resolvedTheme === 'dark' ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </Switch>
      <MoonIcon
        className={`h-5 w-5 ${resolvedTheme === 'dark' ? 'text-sky-950' : 'text-gray-400'}`}
      />
    </div>
  )
}

export default ThemeToggleSwitch
