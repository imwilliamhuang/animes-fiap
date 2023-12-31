"use client"

import { serverLogout } from "@/actions/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NavBar(){
    const { push } = useRouter()

    function logout(){
        serverLogout()
        push("/login")
    }

    return (
        <nav className="flex items-end gap-4 bg-slate-900 p-4">
            <Link href="/">
                <h1 className="text-3xl font-bold">Animes</h1>
            </Link>
            <button onClick={logout}>logout</button>
        </nav>  
    )
}