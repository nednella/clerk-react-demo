import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-react";
import { LoginButton } from "./components/login-button";
import { AuthDialog } from "./components/auth-dialog";
import { AccountButton } from "./components/account-button";

const CLERK_PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!CLERK_PUBLISHABLE_KEY) {
    throw new Error("Clerk Publishable Key missing from .env file!");
}

function App() {
    return (
        <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
            <div className="min-h-svh w-full flex items-center justify-center">
                <SignedOut>
                    <LoginButton />
                </SignedOut>
                <SignedIn>
                    <AccountButton />
                </SignedIn>
            </div>
            <AuthDialog />
        </ClerkProvider>
    );
}

export default App;
