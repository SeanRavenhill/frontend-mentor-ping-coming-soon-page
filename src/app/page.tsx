import Logo from "@/components/atoms/Logo";

export default function Home() {
  return (
    <div className="flex h-screen min-h-screen w-full flex-col items-center justify-center gap-16 p-8 pb-20 sm:p-20">
      <Logo className="h-[2.4375rem] w-[5.625rem]" />
      We are launching soon! Subscribe and get notified Notify Me &copy;
      Copyright Ping. All rights reserved.
      <footer>
        <p className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </p>
      </footer>
    </div>
  );
}
