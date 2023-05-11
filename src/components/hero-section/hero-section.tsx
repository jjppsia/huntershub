import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'

import { Container } from '@/components/ui/container'
import LogoCloud, { type ClientWithLogo } from './logo-cloud'

const clientsWithLogo: ClientWithLogo[][] = [
  [
    { name: 'Transistor', logo: logoTransistor },
    { name: 'Tuple', logo: logoTuple },
    { name: 'StaticKit', logo: logoStaticKit },
  ],
  [
    { name: 'Mirage', logo: logoMirage },
    { name: 'Laravel', logo: logoLaravel },
    { name: 'Statamic', logo: logoStatamic },
  ],
]

function Hero() {
  return (
    <Container className='pb-16 pt-20 text-center lg:pt-32'>
      <h1 className='mx-auto max-w-4xl text-5xl font-medium tracking-tight sm:text-7xl'>
        Head hunting{' '}
        <span className='relative whitespace-nowrap text-primary'>
          <span className='relative'>made simple</span>
        </span>{' '}
        for all industries.
      </h1>
      <p className='mx-auto mt-6 max-w-2xl text-lg tracking-tight text-muted-foreground'>
        Your company of choice for head hunting and sourcing services in all
        industries.
      </p>
      <div className='mt-36 lg:mt-44'>
        <p className='text-base'>Trusted by these six companies so far</p>
        <LogoCloud clientsWithLogo={clientsWithLogo} />
      </div>
    </Container>
  )
}

export default Hero
