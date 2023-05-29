import Image from 'next/image'

export default function NotFound() {
    return (
        <main>
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-4xl font-bold">404</h1>
                <h2 className="text-2xl font-bold">Page not found</h2>
                <a href="/" className="text-2xl font-bold text-green1 bg-white px-2 mt-2 shadow-2xl hover:bg-opacity-50">Go back</a>
            </div>
        </main>
    )
}
