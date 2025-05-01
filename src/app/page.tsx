import Image from "next/image";
import Logo from "@/atoms/Logo";
import FacebookIcon from "@/icons/social/FacebookIcon";
import TwitterIcon from "@/icons/social/TwitterIcon";
import InstagramIcon from "@/icons/social/InstagramIcon";
import EmailForm from "@/molecules/EmailForm";

export default function Home() {
  return (
    <div className="flex min-h-dvh w-full">
      <div className="flex flex-auto flex-col items-center px-7 pt-20 pb-9 sm:pb-10">
        <header>
          <Logo className="h-6 w-14 sm:h-10 sm:w-24" />
        </header>
        <main>
          <section className="mt-8 sm:mt-10">
            <h1 className="text-neutralGray mx-auto max-w-[40rem] text-center text-[1.375rem]/[2rem] font-light sm:text-[3rem]/[3.75rem]">
              We are launching{" "}
              <span className="text-neutralDarkBlue text-center font-bold">
                soon!
              </span>
            </h1>
            <EmailForm />
            <Image
              src="/illustration-dashboard.png"
              alt=""
              width={1280}
              height={720}
              className="mt-[4.5rem] w-[40rem] sm:mt-24 2xl:mx-auto 2xl:w-[80%]"
              aria-hidden="true"
              role="presentation"
              priority
            />
          </section>
        </main>
        <footer className="mt-[7.5rem] flex flex-auto flex-col items-center justify-end gap-6 sm:mt-[4.5rem]">
          <div className="flex flex-row gap-3">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
          </div>
          <p className="text-neutralGray text-xs">
            &copy; Copyright Ping. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
