import { Container } from '@/components/ui/container'
import ContactDetails, { type ContactItem } from './contact-details'
import ContactForm from './contact-form'

const contactItems: ContactItem[] = [
  {
    icon: 'phone',
    text: '+63 917 123 4567',
    href: 'tel:+63 917 123 4567',
  },
  {
    icon: 'mail',
    text: 'hello@world.com',
    href: 'mailto:hello@world.com',
  },
]

export default function ContactSection() {
  return (
    <section
      id='contact-us'
      className='relative isolate bg-slate-50 py-20 text-primary-foreground sm:py-32'
    >
      <Container className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='relative px-6 lg:static lg:px-8'>
          <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-lg'>
            <h2 className='text-3xl font-bold tracking-tight text-foreground'>
              Get in touch
            </h2>
            <p className='mt-6 text-lg leading-8 tracking-tight text-foreground'>
              Proin volutpat consequat porttitor cras nullam gravida at. Orci
              molestie a eu arcu. Sed ut tincidunt integer elementum id sem.
              Arcu sed malesuada et magna.
            </p>
            <ContactDetails contactItems={contactItems} />
          </div>
        </div>
        <ContactForm />
      </Container>
    </section>
  )
}
