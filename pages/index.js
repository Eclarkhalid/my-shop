import { useSession, signIn, signOut } from "next-auth/react"
import { Poppins } from 'next/font/google'
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";



export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const { data: session } = useSession()
  const router = useRouter();
  const handleLogout = async () => {
    await signOut();
    router.replace('/');
  };

  if (session) {
    return <>
      <main
        className={` min-h-screen p-4 `}
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

                <p className="mt-1.5 text-md text-gray-500 max-w-md">
                  View the statistics about your business. Also manage and add products.
                </p>
              </div>

              <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                <Link href={'/products'}
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-500 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
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
                <Link href={'https://my-shop-frontend-eclarkhalid.vercel.app/'} target="_blank"
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-orange-500 px-5 py-3 text-orange-500 transition hover:bg-orange-50 hover:text-orange-700 focus:outline-none focus:ring"
                  type="button"
                >
                  <span className="text-sm font-medium"> View Shop </span>

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>

                </Link>
                {/* <button onClick={handleLogout}
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-red-400 px-5 py-3 text-red-500 transition hover:bg-red-50 hover:text-red-700 focus:outline-none focus:ring"
                  type="button"
                >
                  <span className="text-sm font-medium"> Logout </span>

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                  </svg>

                </button> */}
              </div>
            </div>
          </div>
        </header>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
          <div className="h-32 rounded-lg bg-gray-200 flex items-center justify-center">
            <article
              className="flex max-md:flex-col items-end justify-between rounded-lg gap-4"
            >
              <div>
                <p className="text-sm text-gray-500">Profit</p>

                <p className="text-2xl font-medium text-gray-900">Ksh. 24,000</p>
              </div>

              <div className="inline-flex gap-2 rounded bg-green-100 p-1 text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>

                <span className="text-xs font-medium"> 67.81% </span>
              </div>
            </article>
          </div>
          <div className="h-32 rounded-lg bg-gray-200 flex items-center justify-center">
            <p className="font-bold text-lg">2</p>
          </div>
          <div className="h-32 rounded-lg bg-gray-200 flex items-center justify-center">
            <p className="font-bold text-lg">3</p>
          </div>
          <div className="h-32 rounded-lg bg-gray-200 flex items-center justify-center">
            <p className="font-bold text-lg">4</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 my-4">
          <div className="h-32 rounded-lg bg-gray-200 flex items-center justify-center">
            <p className="font-bold text-lg">5</p>
          </div>
          <div className="h-32 rounded-lg bg-gray-200 flex items-center justify-center">
            <p className="font-bold text-lg">6</p>
          </div>
          <div className="h-32 rounded-lg bg-gray-200 flex items-center justify-center">
            <p className="font-bold text-lg">7</p>
          </div>
          <div className="h-32 rounded-lg bg-gray-200 flex items-center justify-center">
            <p className="font-bold text-lg">8</p>
          </div>
        </div>
      </main>
    </>
  }

  return <>

    <main
      className={`flex min-h-screen flex-col items-center justify-center p-5 text-center `}
    >
      <div className="max-w-xl lg:max-w-3xl">

        <h1
          className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
        >
          Welcome to my-Shop
        </h1>

        <p className="mt-4 leading-relaxed text-gray-500 max-w-sm">
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
