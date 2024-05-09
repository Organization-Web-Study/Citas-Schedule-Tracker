import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="justify-center flex justify-items-center">
      <div className="m-4 p-4">
        <SignUp path="/sign-up" />
      </div>
    </main>
  );
}
