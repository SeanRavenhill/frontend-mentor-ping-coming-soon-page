import Logo from '@/components/atoms/Logo';

export default function Home() {
  return (
    <div
      className='
      flex flex-col
      justify-center items-center
      w-full
      h-screen min-h-screen
      p-8 pb-20 gap-16
      sm:p-20'
    >
      <Logo className='w-[5.625rem] h-[2.4375rem]'/>
      We are launching soon! Subscribe and get notified Notify Me &copy;
      Copyright Ping. All rights reserved.
      <footer>
        <p className='attribution'>
          Challenge by{' '}
          <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
            Frontend Mentor
          </a>
          . Coded by <a href='#'>Your Name Here</a>.
        </p>
      </footer>
    </div>
  );
}
