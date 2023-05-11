import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function ContactForm() {
  return (
    <form className='px-6 pt-20 text-foreground lg:px-8 lg:pt-0'>
      <div className='mx-auto max-w-xl lg:mr-0 lg:max-w-lg'>
        <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
          <div>
            <Label
              htmlFor='first-name'
              className='block font-semibold leading-6'
            >
              First name
            </Label>
            <div className='mt-2.5'>
              <Input
                type='text'
                name='first-name'
                id='first-name'
                autoComplete='given-name'
                className='bg-background'
              />
            </div>
          </div>
          <div>
            <Label
              htmlFor='last-name'
              className='block font-semibold leading-6'
            >
              Last name
            </Label>
            <div className='mt-2.5'>
              <Input
                type='text'
                name='last-name'
                id='last-name'
                autoComplete='family-name'
                className='bg-background'
              />
            </div>
          </div>
          <div className='sm:col-span-2'>
            <Label htmlFor='email' className='block font-semibold leading-6'>
              Email
            </Label>
            <div className='mt-2.5'>
              <Input
                type='email'
                name='email'
                id='email'
                autoComplete='email'
                className='bg-background'
              />
            </div>
          </div>
          <div className='sm:col-span-2'>
            <Label
              htmlFor='phone-number'
              className='block font-semibold leading-6'
            >
              Phone number
            </Label>
            <div className='mt-2.5'>
              <Input
                type='tel'
                name='phone-number'
                id='phone-number'
                autoComplete='tel'
                className='bg-background'
              />
            </div>
          </div>
          <div className='sm:col-span-2'>
            <Label htmlFor='message' className='block font-semibold leading-6'>
              Message
            </Label>
            <div className='mt-2.5'>
              <Textarea
                id='message'
                className='bg-background'
                name='message'
                placeholder='Enter your message here.'
                rows={4}
              />
            </div>
          </div>
        </div>
        <div className='mt-8 flex justify-end'>
          <Button type='submit'>Send message</Button>
        </div>
      </div>
    </form>
  )
}
