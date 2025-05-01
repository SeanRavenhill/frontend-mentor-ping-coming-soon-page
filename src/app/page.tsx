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
            <h1 className="text-neutralGray text-center text-[1.375rem]/[2rem] font-light sm:text-[3rem]/[3.75rem]">
              We are launching{" "}
              <span className="text-neutralDarkBlue text-center font-bold">
                soon!
              </span>
            </h1>
            <form className="flex flex-col" noValidate>
              <h2 className="text-neutralDarkBlue mt-4 text-center text-xs sm:text-xl">
                Subscribe and get notified
              </h2>
              <div className="mt-8 flex flex-auto flex-col gap-2.5 sm:flex-row sm:items-start sm:gap-4">
                <div className="mx-2.5 flex-auto sm:mx-0">
                  <label htmlFor="email" className="sr-only">
                    Email Address:
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your email address…"
                    className="text-inputText border-secondaryBlue h-10 w-full rounded-full border bg-white pl-8 text-xs sm:h-14 sm:w-full sm:text-base"
                    required
                  />
                  <p className="text-secondaryRed mt-0.5 mb-2.5 pl-0 text-center text-[0.625rem] leading-tight tracking-tight italic sm:mt-1.5 sm:pl-8 sm:text-left sm:text-xs">
                    error message place holder
                  </p>
                </div>
                <div className="mx-2.5 flex-auto sm:mx-0">
                  <button className="bg-primaryBlue hover:bg-primaryBlueHover h-10 w-full flex-auto cursor-pointer rounded-full text-xs font-semibold text-white shadow-[0px_5px_10px_2px_rgba(76,123,243,0.23)] transition sm:mx-0 sm:h-14 sm:max-w-52 sm:text-base">
                    Notify Me
                  </button>
                </div>
              </div>
            </form>
            <Image
              src="/illustration-dashboard.png"
              alt=""
              width={1280}
              height={720}
              className="mt-[4.5rem] w-[40rem] sm:mt-24"
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
