"use client"
import { signIn, signOut } from "next-auth/react"
import { useState } from "react"
import LoadingSpinner from "./Loading"

export function SignIn() {
    const [isLoading, setIsLoading] = useState<boolean>()
    const onSignIn = async () => {
        setIsLoading(true)
        await signIn("google")
        setIsLoading(false)
    }

    return (
        <>
            {isLoading ? <LoadingSpinner /> :

                <button className={"text-2xl font-bold text-green-500 bg-white px-2 mt-2 shadow-2xl hover:bg-opacity-50  text-center"} onClick={onSignIn}>
                    Sign in with Google
                </button>
            }
        </>

    )
}

export function SignOut() {
    const [isLoading, setIsLoading] = useState<boolean>()
    const onSignout = async () => {
        setIsLoading(true)
        await signOut()
        setIsLoading(false)
    }
    return (
        <>
            {isLoading ? <LoadingSpinner /> :
                <button className={"text-2xl font-bold text-green-500 bg-white px-2 mt-2 shadow-2xl hover:bg-opacity-50 ml-2  text-center"} onClick={onSignout}>
                    Sign out
                </button>
            }
        </>

    )
}

