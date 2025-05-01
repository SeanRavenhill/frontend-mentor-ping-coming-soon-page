"use client";

import { useRef, useState } from "react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ERR_EMPTY = "Whoops! It looks like you forgot to add your email";
const ERR_INVALID = "Please provide a valid email address";
const SUBMISSION_SUCCESS = "Email Submission Successful";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedEmail = email.trim();
    setError("");

    if (!trimmedEmail) {
      setError(ERR_EMPTY);
      emailRef.current?.focus();
      return;
    }

    if (!emailRegex.test(trimmedEmail)) {
      setError(ERR_INVALID);
      emailRef.current?.focus();
      return;
    }

    console.log(SUBMISSION_SUCCESS);
    setEmail("");
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col" noValidate>
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`${error ? "border-secondaryRed text-neutralDarkBlue" : ""} ${email ? "text-neutralDarkBlue" : ""} text-inputText border-secondaryBlue h-10 w-full rounded-full border bg-white pl-8 text-xs sm:h-14 sm:w-full sm:text-base`}
            aria-invalid={!!error}
            aria-describedby={error ? "email-error" : undefined}
            ref={emailRef}
            required
          />
          {error && (
            <p className="text-secondaryRed mt-0.5 mb-2.5 pl-0 text-center text-[0.625rem] leading-tight tracking-tight italic sm:mt-1.5 sm:pl-8 sm:text-left sm:text-xs">
              {error}
            </p>
          )}
        </div>
        <div className="mx-2.5 sm:mx-0">
          <button className="bg-primaryBlue hover:bg-primaryBlueHover h-10 w-full flex-auto cursor-pointer rounded-full text-xs font-semibold text-white shadow-[0px_5px_10px_2px_rgba(76,123,243,0.23)] transition sm:h-14 sm:w-52 sm:text-base">
            Notify Me
          </button>
        </div>
      </div>
    </form>
  );
}
