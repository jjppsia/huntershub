import { Icons } from '@/components/icons'

export type Service = {
  title: string
  description: string
  icon: keyof typeof Icons
}

type ServicesProps = {
  services: Service[]
}

export default function Services({ services }: ServicesProps) {
  return (
    <ul className='mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3'>
      {services.map(({ title, description, icon }) => {
        const Icon = Icons[icon]

        return (
          <li key={title} className='rounded-2xl border border-gray-200 p-8'>
            <Icon className='h-9 w-9' />
            <h3 className='mt-6 text-xl font-semibold text-slate-900'>
              {title}
            </h3>
            <p className='mt-2'>{description}</p>
          </li>
        )
      })}
    </ul>
  )
}
