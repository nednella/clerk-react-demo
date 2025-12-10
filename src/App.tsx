import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthDialog } from "./components/auth-dialog";
import { Home } from "./pages/home";
import { SSOCallback } from "./pages/sso-callback";

const CLERK_PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!CLERK_PUBLISHABLE_KEY) {
    throw new Error("Clerk Publishable Key missing from .env file!");
}

function App() {
    return (
        <ClerkProvider 
            publishableKey={CLERK_PUBLISHABLE_KEY}
            signInFallbackRedirectUrl="/"
            signUpFallbackRedirectUrl="/"
        >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sso-callback" element={<SSOCallback />} />
                </Routes>
                <AuthDialog />
            </BrowserRouter>
        </ClerkProvider>
    );
}

export default App;
