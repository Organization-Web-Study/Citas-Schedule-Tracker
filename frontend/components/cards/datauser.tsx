"use client";

import { useUser } from "@clerk/nextjs";

export default function DataUser() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return <div>Hola, {user.fullName} Bienvenido a Cst, </div>;
}
