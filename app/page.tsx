import { SignIn, SignOut } from "@/components/ButtonAuth"
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <div className="flex flex-col items-center justify-center min-h-screen">

        {session?.user ? (
          <>
            <h1 className="text-4xl font-bold">Welcome back <span className="text-green-400 bg-white px-2">{session.user.name}</span></h1>
            <p className="text-justify mt-1">
              This is Nexa School Management System. This is a project made by VahryIskandar.
            </p>
            <div>
              <button className="text-2xl font-bold text-green-400 bg-white px-2 mt-2 shadow-2xl hover:bg-opacity-50  text-center">Dashboard</button>
              <SignOut />
            </div>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold">Welcome to <span className="text-green-400 bg-white px-2">NSMS</span>
            </h1>
            <p className="text-justify mt-1">
              This is Nexa School Management System. This is a project made by VahryIskandar.
            </p>
            <SignIn />
          </>
        )}
      </div>

      <div className="mb-3">
        <h1 className="text-4xl font-bold">Timeline</h1>
        <ol className="relative border-l border-white">
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-white rounded-full mt-1.5 -left-1.5 border border-white "></div>
            <time className="mb-1 text-sm font-normal leading-none ">30 May 2023</time>
            <h3 className="text-lg font-semibold text-white">First commit on github</h3>
            <p className="mb-4 text-base font-normal text-white">I create this project for school management System.</p>
            <a href="https://github.com/DemuraAIdev/nsms" className="inline-flex items-center px-4 py-2 text-sm font-medium text-green-400 bg-white rounded-lg hover:bg-green-200 focus:z-10 focus:ring-4 ">Github
            </a>
          </li>
        </ol>
      </div>
    </main>
  )
}
