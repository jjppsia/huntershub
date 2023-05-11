import Link from 'next/link'

import { cn } from '@/lib/utils'
import Logo from '@/components/logo'
import MainNav from '@/components/main-nav'
import { buttonVariants } from '@/components/ui/button'
import { Container } from '@/components/ui/container'

export default function Header() {
  return (
    <header className='py-10'>
      <Container>
        <nav className='relative z-50 flex justify-between'>
          <div className='flex items-center md:gap-x-12'>
            <Logo />
            <MainNav />
          </div>
          <Link href='/' className={cn(buttonVariants(), 'rounded-3xl')}>
            <span>
              Get started <span className='hidden lg:inline'>today</span>
            </span>
          </Link>
        </nav>
      </Container>
    </header>
  )
}
