import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="justify-center flex justify-items-center">
      <div className="m-4 p-4">
        <SignIn path="/sign-in" />
      </div>
    </main>
  );
}
