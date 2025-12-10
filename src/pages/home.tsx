import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { LoginButton } from "@/components/login-button";
import { AccountButton } from "@/components/account-button";

export function Home() {
    return (
        <div className="min-h-svh w-full flex items-center justify-center">
            <SignedOut>
                <LoginButton />
            </SignedOut>
            <SignedIn>
                <AccountButton />
            </SignedIn>
        </div>
    );
}
