import { useSession, signIn, signOut } from "next-auth/react"
import { Poppins } from 'next/font/google'
import Link from "next/link";
import { useState } from "react";

const inter = Poppins({
  subsets: ['latin'],
  weight: '400'
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const { data: session } = useSession()

  if (session) {
    return <>
      <main
        className={` min-h-screen p-4  ${inter.className}`}
      >
        {/* Signed in as {session.user.email} <br />
      <button onClick={() => signOut()}>Sign out</button> */}
        <header>
          <div className="mx-auto  px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <div className="text-center sm:text-left">
                <h1 className="text-3xl font-bold text-gray-900 sm:text-3xl">
                  Welcome Back, <span className="text-green-700 font-bold">{session.user.name}</span>
                </h1>

                <p className="mt-1.5 text-md text-gray-500">
                  Let's create a new product! 🎉
                </p>
              </div>

              <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                <Link href={'/products'}
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
                  type="button"
                >
                  <span className="text-sm font-medium"> View Products </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </header>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
          <div className="h-32 rounded-lg bg-gray-200"></div>
          <div className="h-32 rounded-lg bg-gray-200"></div>
          <div className="h-32 rounded-lg bg-gray-200"></div>
          <div className="h-32 rounded-lg bg-gray-200"></div>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 my-4">
          <div className="h-32 rounded-lg bg-gray-200"></div>
          <div className="h-32 rounded-lg bg-gray-200"></div>
          <div className="h-32 rounded-lg bg-gray-200"></div>
          <div className="h-32 rounded-lg bg-gray-200"></div>
        </div>
      </main>
    </>
  }

  return <>

    <main
      className={`flex min-h-screen flex-col items-center justify-center  p-4 text-center ${inter.className}`}
    >
      <div className="max-w-xl lg:max-w-3xl">

        <h1
          className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
        >
          Welcome to my-Shop
        </h1>

        <p className="mt-4 leading-relaxed text-gray-500 max-w-md">
          This website is only accessible to admins only. Add new products and manage database.
        </p>
        <div className="col-span-6 sm:flex sm:items-center sm:gap-4 my-4 flex items-center justify-center">
          <button
            disabled={isLoading}
            onClick={() => {
              setIsLoading(true);
              signIn('google');
            }}
            className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
          >
            Login With Google
          </button>
        </div>
      </div>
    </main>
  </>
}
