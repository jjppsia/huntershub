import { Container } from '@/components/ui/container'
import Underline from '@/components/ui/underline'
import Pillars, { Pillar } from './pillars'

const pillars: Pillar[] = [
  {
    title: 'Total Commitment',
    description:
      'Unwavering dedication and perseverance for exceptional results.',
    icon: 'users',
  },
  {
    title: 'Excellent Performance',
    description:
      'Consistently surpass expectations through exceptional achievements.',
    icon: 'barChart',
  },
  {
    title: 'Business Innovation',
    description:
      'Embrace creativity and cutting-edge solutions to drive growth and success.',
    icon: 'monitor',
  },
]

export default function ThreePillarsSection() {
  return (
    <section className='bg-secondary-foreground py-20 text-primary-foreground sm:py-32'>
      <Container>
        <div className='mx-auto max-w-2xl sm:text-center'>
          <h2 className='text-3xl font-medium tracking-tight'>
            <Underline text='Our Three Pillars' color='fill-green-300' />
          </h2>
          <p className='mt-10 text-lg tracking-tight text-slate-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sed
            voluptatibus eaque ab fugit fuga ratione velit, aliquam accusantium
            sint vitae vel incidunt.
          </p>
        </div>
        <Pillars pillars={pillars} />
      </Container>
    </section>
  )
}
