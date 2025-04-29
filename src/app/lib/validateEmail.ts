"use server";

export async function validateEmail(email: string) {
  if (email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  return null;
}
