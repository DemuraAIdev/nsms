import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold">Welcome to <span className="text-green1 bg-white px-2">NSMS</span></h1>
        <a href="/auth/login" className="text-2xl font-bold text-green1 bg-white px-2 mt-2 shadow-2xl hover:bg-opacity-50 sm:px-[100%] lg:px-2 text-center">Login</a>
      </div>
    </main>
  )
}
