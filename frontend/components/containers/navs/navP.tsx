"use client";

import { useAuth } from "@clerk/nextjs";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  SignUpButton,
} from "@clerk/nextjs";

export default function NavP() {
  return (
    <div className="flex justify-end p-2 gap-2">
      <SignedOut>
        <SignInButton>Ingresar</SignInButton>
        <SignUpButton>Registrarse</SignUpButton>
      </SignedOut>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </div>
  );
}
