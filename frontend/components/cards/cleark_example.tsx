"use client";
import { useAuth } from "@clerk/nextjs";
import {
  useUser,
  SignIn,
  SignUp,
  SignInButton,
  SignUpButton,
  SignOutButton,
} from "@clerk/nextjs";
import { useSession } from "@clerk/clerk-react";
import { useSignIn } from "@clerk/clerk-react";
import { useSessionList } from "@clerk/clerk-react";
import Image from "next/image";

//
export default function Example1() {
  const { isLoaded, userId, sessionId } = useAuth();
  const { isSignedIn, user } = useUser();
  const { session } = useSession();
  const { signIn } = useSignIn();
  const { sessions } = useSessionList();

  //
  // In case the user signs out while on the page.
  if (!isLoaded || !userId) {
    return null;
  }

  return (
    <div>
      userId: <p className="text-green-600">{userId}</p>
      <br />
      SessionId, session activa: <p className="text-green-600">{sessionId}</p>
      <br />
      Primer Nombre <p className="text-green-600">{user?.firstName}</p>
      <br />
      Apellidos <p className="text-green-600">{user?.lastName}</p>
      <br />
      Nombre Completo <p className="text-green-600">{user?.fullName}</p>
      <br />
      imagen{" "}
      <p className="text-green-600">
        <Image
          src={user?.imageUrl ?? ""}
          width={100}
          height={100}
          alt="Imagen de usuario"
          quality={100}
          className="rounded-full"
        />
      </p>
      <br />
      <p className="text-green-600">
        Username : {user?.username ? user.username : "Sin Completar"}
      </p>
      <br />
      <div className="mb-8 mt-8 gap4 flex-col">
        <h1>Comonentes // Botones </h1>

        <div>
          <SignInButton>Ingresar</SignInButton>
        </div>
        <div>
          <SignUpButton>Registrarse</SignUpButton>
        </div>
        <div>
          <SignOutButton>Salir </SignOutButton>
        </div>
      </div>
    </div>
  );
}
