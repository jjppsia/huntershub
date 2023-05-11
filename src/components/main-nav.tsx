import NavLink from './nav-link'

type NavLink = {
  href: string
  title: string
}

const navlinks: NavLink[] = [
  {
    href: '#services',
    title: 'Services',
  },
  {
    href: '#about',
    title: 'About Us',
  },
  {
    href: '#contact-us',
    title: 'Contact Us',
  },
]

export default function MainNav() {
  return (
    <div className='hidden md:flex md:gap-x-6'>
      {navlinks.map(({ href, title }) => (
        <NavLink href={href} key={href}>
          {title}
        </NavLink>
      ))}
    </div>
  )
}
