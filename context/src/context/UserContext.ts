import { createContext, useState, Dispatch, SetStateAction } from "react";

export type User = {
    name: string,
    email: string,
}

export interface UserContextInterface {
    user: User,
    setUser: Dispatch<SetStateAction<User>>
}

export const UserContext = createContext<Partial<UserContextInterface>>({
    user:
})

function UserProvider() {
    const [user, SetUser] = useState<User>()
}

