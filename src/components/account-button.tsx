import { AccountDropdown } from "./account-dropdown";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { useUser } from "@clerk/clerk-react";
import { UserRound } from "lucide-react";

export function AccountButton() {
    const { user } = useUser();

    const imageUrl = user?.imageUrl ?? undefined;
    const username = user?.username ?? undefined;

    return (
        <AccountDropdown>
            <Button
                size="icon"
                variant="ghost"
                className="data-[state=open]:bg-accent cursor-pointer rounded-full"
            >
                <Avatar className="size-8">
                    <AvatarImage src={imageUrl} alt={username} />
                    <AvatarFallback>
                        <UserRound size={16} />
                    </AvatarFallback>
                </Avatar>
            </Button>
        </AccountDropdown>
    );
}
