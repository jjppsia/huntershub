import { Icons } from '@/components/icons'

export type Pillar = {
  title: string
  description: string
  icon: keyof typeof Icons
}

type PillarsProps = {
  pillars: Pillar[]
}

export default function Pillars({ pillars }: PillarsProps) {
  return (
    <div className='-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:mt-20 lg:grid lg:grid-cols-3 lg:gap-x-8'>
      {pillars.map(({ title, description, icon }) => {
        const Icon = Icons[icon]

        return (
          <div key={title}>
            <div className={'mx-auto max-w-2xl'}>
              <Icon className='h-9 w-9' />
              <h3 className='mt-6 text-xl font-semibold'>{title}</h3>
              <p className='mt-2 text-sm text-slate-400'>{description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
