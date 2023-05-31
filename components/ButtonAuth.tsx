"use client"
import { signIn, signOut } from "next-auth/react"

export function SignIn() {
    return (
        <button className={"text-2xl font-bold text-green-400 bg-white px-2 mt-2 shadow-2xl hover:bg-opacity-50  text-center"} onClick={() => signIn("google")}>
            Login
        </button>
    )
}

export function SignOut() {
    return (
        <button className={"text-2xl font-bold text-green-400 bg-white px-2 mt-2 shadow-2xl hover:bg-opacity-50  text-center ml-2"} onClick={() => signOut()}>
            Logout
        </button>
    )
}

