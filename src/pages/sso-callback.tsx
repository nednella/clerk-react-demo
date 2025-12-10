import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";

export function SSOCallback() {
    return (
        <div className="min-h-svh w-full flex items-center justify-center">
            <AuthenticateWithRedirectCallback 
                signInFallbackRedirectUrl="/"
                signUpFallbackRedirectUrl="/"
            />
        </div>
    );
}
