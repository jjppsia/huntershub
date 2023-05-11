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
  )
}
