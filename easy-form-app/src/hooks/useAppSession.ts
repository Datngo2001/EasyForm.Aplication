import { AppSession } from "@/lib/auth";
import { useSession } from "next-auth/react";

export default function useAppSession() {
    const sessionData = useSession();

    return {
        ...sessionData,
        data: sessionData.data as AppSession
    }
}
