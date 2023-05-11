import Image from 'next/image'

export type ClientWithLogo = {
  name: string
  logo: string
}

type LogoCloudProps = {
  clientsWithLogo: ClientWithLogo[][]
}

export default function LogoCloud({ clientsWithLogo }: LogoCloudProps) {
  return (
    <ul
      role='list'
      className='mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0'
    >
      {clientsWithLogo.map((group, groupIndex) => (
        <li key={groupIndex}>
          <ul
            role='list'
            className='flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0'
          >
            {group.map((company) => (
              <li key={company.name} className='flex'>
                <Image src={company.logo} alt={company.name} />
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}
