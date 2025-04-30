import Image from "next/image";
import Logo from "@/atoms/Logo";
import FacebookIcon from "@/icons/social/FacebookIcon";
import TwitterIcon from "@/icons/social/TwitterIcon";
import InstagramIcon from "@/icons/social/InstagramIcon";
import EmailForm from "@/molecules/EmailForm";

export default function Home() {
  return (
    <main className="flex h-full min-h-dvh w-full flex-col items-center px-7 pt-20 pb-9">
      <Logo className="h-[1.5rem] w-[3.5rem]" />
      <section className="mt-8 flex flex-col justify-center">
        <h1>
          We are launching <span>soon!</span>
        </h1>
        <EmailForm />
        <Image
          src="/illustration-dashboard.png"
          alt=""
          width={1280}
          height={720}
          className="mt-[4.5rem]"
          aria-hidden="true"
          role="presentation"
          priority
        />
      </section>

      <nav
        aria-label="Social links"
        className="mt-[7.5rem] flex flex-row gap-3"
      >
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
      </nav>

      <footer className="text-neutralGray mt-7 text-[0.625rem] leading-normal font-light">
        &copy; Copyright Ping. All rights reserved.
      </footer>
    </main>
  );
}
