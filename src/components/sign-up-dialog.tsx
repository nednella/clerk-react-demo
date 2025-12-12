import { SignUp } from "@clerk/clerk-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Dialog, UnstyledDialogContent } from "./ui/dialog";

export function SignUpDialog() {
  const location = useLocation();
  const navigate = useNavigate();
  const isOpen = location.pathname.startsWith("/sign-up");

  const onOpenChange = (open: boolean) => {
    if (!open) {
      navigate("/");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <UnstyledDialogContent aria-describedby={undefined}>
        <SignUp path="/sign-up" routing="path" />
      </UnstyledDialogContent>
    </Dialog>
  );
}
