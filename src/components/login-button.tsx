import { useAuthDialog } from "@/stores/auth-dialog.store";
import { Button } from "./ui/button";

export function LoginButton() {
    const { onOpen: openAuthDialog } = useAuthDialog();

    return (
        <Button
            className="min-w-24 rounded-full"
            onClick={() => openAuthDialog()}
        >
            Login
        </Button>
    );
}
