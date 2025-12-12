import { Routes, Route } from "react-router-dom";
import { AuthDialog } from "./components/auth-dialog";
import { SignUpDialog } from "./components/sign-up-dialog";
import { Home } from "./pages/home";
import { SSOCallback } from "./pages/sso-callback";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sso-callback" element={<SSOCallback />} />
        <Route path="/sign-in/*" element={<Home />} />
        <Route path="/sign-up/*" element={<Home />} />
      </Routes>
      <AuthDialog />
      <SignUpDialog />
    </>
  );
}

export default App;
