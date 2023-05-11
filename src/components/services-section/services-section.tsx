import { Container } from '@/components/ui/container'
import Underline from '@/components/ui/underline'
import Services, { type Service } from './services'

const services: Service[] = [
  {
    title: 'Contingency Recruitment',
    description:
      'HHI believes in the quality and dependability of its services so much, that our clients will only pay us once we have been able to provide our qualified candidates.',
    icon: 'userCheck',
  },
  {
    title: 'Headhunting',
    description:
      "HHI is actively searching for the best employees that would make a great addition to our clients' team, even before they step into the job market.",
    icon: 'search',
  },
  {
    title: 'Temporary & Contract Jobs',
    description:
      'HHI is able to deliver the right people, right away to its clients to suit their business needs.',
    icon: 'newsPaper',
  },
]

export default function ServicesSection() {
  return (
    <section id='services' className='py-20 sm:py-32'>
      <Container>
        <div className='mx-auto max-w-2xl sm:text-center'>
          <h2 className='text-3xl font-medium tracking-tight text-gray-900'>
            <Underline text='Our Services' color='fill-green-700' />
          </h2>
          <p className='mt-10 text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sed
            voluptatibus eaque ab fugit fuga ratione velit, aliquam accusantium
            sint vitae vel incidunt.
          </p>
        </div>
        <Services services={services} />
      </Container>
    </section>
  )
}
