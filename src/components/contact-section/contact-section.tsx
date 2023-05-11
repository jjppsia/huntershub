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
        <ContactDetails contactItems={contactItems} />
        <ContactForm />
      </Container>
    </section>
  )
}
