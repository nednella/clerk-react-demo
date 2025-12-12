import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

export function LoginButton() {
    const navigate = useNavigate();

    return (
        <Button
            className="min-w-24 rounded-full"
            onClick={() => navigate("/sign-in")}
        >
            Login
        </Button>
    );
}
