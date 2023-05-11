import Link from 'next/link'

import { Icons } from '@/components/icons'

export default function Logo() {
  return (
    <Link href='#' className='flex items-center space-x-2' aria-label='Home'>
      <Icons.logo className='h-9 w-auto' />
      <span className='hidden text-lg font-bold sm:block'>
        Hunter&apos;s Hub Inc.
      </span>
    </Link>
  )
}
