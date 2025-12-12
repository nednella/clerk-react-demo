import { SignUp } from "@clerk/clerk-react";

export function SignUpPage() {
  return (
    <div className="min-h-svh w-full flex items-center justify-center">
      <SignUp path="/sign-up"/>
    </div>
  );
}
