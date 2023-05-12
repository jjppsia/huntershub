import { Icons } from '@/components/icons'
import FooterNavigation from './footer-navigation'
import FooterSocialLinks from './footer-social-links'

export type FooterContent = {
  main: { name: string; href: string }[]
  socials: { name: string; href: string; icon: keyof typeof Icons }[]
}

const footerContent: FooterContent = {
  main: [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '/about-us' },
    { name: 'Contact Us', href: '#contact-us' },
  ],
  socials: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/HuntersHubInc',
      icon: 'facebook',
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/huntershubinc/',
      icon: 'instagram',
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/HuntersHubbInc',
      icon: 'twitter',
    },
    {
      name: 'Youtube',
      href: 'https://www.youtube.com/channel/UCzoSVuKdFYKyVEXVNT1cWiQ',
      icon: 'youtube',
    },
    {
      name: 'Tiktok',
      href: 'https://www.tiktok.com/@huntershubinc',
      icon: 'tiktok',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/huntershubincorporated/',
      icon: 'linkedIn',
    },
  ],
}

export default function FooterSection() {
  return (
    <footer className='bg-white'>
      <div className='mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8'>
        <FooterNavigation navigation={footerContent.main} />
        <FooterSocialLinks socialLinks={footerContent.socials} />
        <p className='mt-10 text-center text-xs leading-5 text-slate-500'>
          &copy; 2023 Hunter&apos;s Hub Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
