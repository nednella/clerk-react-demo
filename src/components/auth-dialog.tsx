import { SignIn } from "@clerk/clerk-react";
import { useAuthDialog } from "@/stores/auth-dialog.store";
import { Dialog, UnstyledDialogContent } from "./ui/dialog";

export function AuthDialog() {
    const { isOpen, onClose } = useAuthDialog();

    const onOpenChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <UnstyledDialogContent aria-describedby={undefined}>
                <SignIn />
            </UnstyledDialogContent>
        </Dialog>
    );
}
