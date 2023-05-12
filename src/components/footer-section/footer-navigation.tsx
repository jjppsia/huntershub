import { FooterContent } from './footer-section'

type FooterNavigationProps = {
  navigation: FooterContent['main']
}

export default function FooterNavigation({
  navigation,
}: FooterNavigationProps) {
  return (
    <nav
      className='-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12'
      aria-label='Footer'
    >
      {navigation.map(({ name, href }) => (
        <div key={name} className='pb-6'>
          <a
            href={href}
            className='text-sm leading-6 text-slate-600 hover:text-secondary-foreground'
          >
            {name}
          </a>
        </div>
      ))}
    </nav>
  )
}
