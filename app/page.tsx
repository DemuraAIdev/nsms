import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold">Welcome to <span className="text-green1 bg-white px-2">NSMS</span></h1>
      </div>

      <p className="mb-3">
        This is Nexa School Management System. This is a project made by DemuraAI a.k.a VahryIskandar.
      </p>

    </main>
  )
}
