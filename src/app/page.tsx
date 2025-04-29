"use client";

import Image from "next/image";
import Form from "next/form";

import { useActionState } from "react";
import { validateEmail } from "@/lib/validateEmail";

import Logo from "@/atoms/Logo";

export default function Home() {
  async function submitEmail(
    previousState: string,
    formData: { get: (arg0: string) => any },
  ) {
    const email = formData.get("email");
    const validation = await validateEmail(email);
    let message = "";

    switch (validation) {
      case true:
        break;
      case false:
        message = "email invalid";
        break;
      case null:
        message = "empty email submission!";
        break;
      default:
        message = "Something went wrong. Please try again.";
        break;
    }

    return message;
  }

  const [state, formAction] = useActionState(submitEmail, "");

  return (
    <div className="flex h-screen min-h-screen w-full flex-col items-center p-7">
      <Logo className="h-[1.5rem] w-[3.5rem]" />
      <div>
        <h1>
          We are launching <span>soon!</span>
        </h1>

        <Form action={formAction} noValidate>
          <h2>Subscribe and get notified</h2>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email address…"
            required
          />
          <button type="submit">Notify Me</button>
          {!!state && <p>{state}</p>}
        </Form>
      </div>
      <div>
        <Image
          src={"/illustration-dashboard.png"}
          alt={"Dashboard Illustartion"}
          width={1280}
          height={720}
          priority
        />
      </div>
      &copy; Copyright Ping. All rights reserved.
    </div>
  );
}
