import Link from 'next/link'

import { Icons } from '@/components/icons'

export type ContactItem = {
  icon: keyof typeof Icons
  text: string
  href: string
}

type ContactDetailsProps = {
  contactItems: ContactItem[]
}

export default function ContactDetails({ contactItems }: ContactDetailsProps) {
  return (
    <div className='relative px-6 lg:static lg:px-8'>
      <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-lg'>
        <h2 className='text-3xl font-bold text-foreground'>Get in touch</h2>
        <p className='mt-6 text-lg leading-8 text-foreground'>
          Proin volutpat consequat porttitor cras nullam gravida at. Orci
          molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu
          sed malesuada et magna.
        </p>
        <dl className='mt-10 space-y-4 leading-7 text-slate-600'>
          <div className='flex gap-x-4'>
            <dt className='flex-none'>
              <span className='sr-only'>Address</span>
              <Icons.building
                className='h-7 w-6 text-slate-600'
                aria-hidden='true'
              />
            </dt>
            <dd>
              123 Cant Find
              <br />
              Location, FR
            </dd>
          </div>
          {contactItems.map(({ icon, text, href }) => {
            const Icon = Icons[icon]

            return (
              <div key={text} className='flex gap-x-4'>
                <dt className='flex-none'>
                  <span className='sr-only'>{icon}</span>
                  <Icon className='h-7 w-6 text-slate-600' aria-hidden='true' />
                </dt>
                <dd>
                  <Link className='hover:text-foreground' href={href}>
                    {text}
                  </Link>
                </dd>
              </div>
            )
          })}
        </dl>
      </div>
    </div>
  )
}
