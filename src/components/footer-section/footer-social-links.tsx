import { Icons } from '@/components/icons'
import { FooterContent } from './footer-section'

type FooterSocialLinksProps = {
  socialLinks: FooterContent['socials']
}

export default function FooterSocialLinks({
  socialLinks,
}: FooterSocialLinksProps) {
  return (
    <div className='mt-10 flex justify-center space-x-10'>
      {socialLinks.map(({ name, href, icon }) => {
        const Icon = Icons[icon]

        return (
          <a
            key={name}
            href={href}
            className='text-slate-400 hover:text-slate-500'
          >
            <span className='sr-only'>{name}</span>
            <Icon className='h-6 w-6' aria-hidden='true' />
          </a>
        )
      })}
    </div>
  )
}
