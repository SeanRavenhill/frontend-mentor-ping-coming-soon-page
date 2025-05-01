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
      <div className="flex w-full flex-row gap-4">
        <div className="w-full">
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
          <p
            role="alert"
            id="email-error"
            className="text-secondaryRed mt-[2px] justify-start text-center text-[0.625rem] leading-tight font-normal tracking-tight italic md:mt-4 md:pl-8 md:text-left"
          >
            Error Message Placeholder
          </p>
        </div>

        <button
          className="mt-2.5 h-10 w-full max-w-[17.625rem] justify-end rounded-full md:mt-0 md:h-14 md:max-w-[12.5rem]"
          type="submit"
        >
          Notify Me
        </button>
      </div>
    </form>
  );
}
