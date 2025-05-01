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
    <form
      onSubmit={onSubmit}
      noValidate
      className="mt-4 flex flex-col items-center"
    >
      <h2>Subscribe and get notified</h2>
      <div className="flex w-full flex-col items-center md:mt-10 md:flex-row md:items-start md:gap-4">
        <label htmlFor="email" className="sr-only">
          Email Address:
        </label>
        <div className="w-full max-w-[17.625rem] md:max-w-full">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email address…"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`${error ? "border-secondaryRed" : ""} mt-8 w-full md:mt-0 md:h-14`}
            aria-invalid={!!error}
            aria-describedby={error ? "email-error" : undefined}
            ref={emailRef}
            required
          />
          {error && (
            <p
              role="alert"
              id="email-error"
              className="text-secondaryRed mt-[2px] justify-start text-center text-[0.625rem] leading-tight font-normal tracking-tight italic md:mt-4 md:pl-8 md:text-left"
            >
              {error}
            </p>
          )}
        </div>

        <button
          className="mt-2.5 h-10 w-full max-w-[17.625rem] rounded-full md:mt-0 md:h-14 md:w-[12.5rem]"
          type="submit"
        >
          Notify Me
        </button>
      </div>
    </form>
  );
}
