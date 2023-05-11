import Link from 'next/link'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

type NavLinkProps = {
  href: string
  children: React.ReactNode
}

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ size: 'sm', variant: 'ghost' }))}
    >
      {children}
    </Link>
  )
}
