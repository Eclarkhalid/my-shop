import { signOut, useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  const { data: session } = useSession()

  if (session) {
    return <>
      <header className="bg-white z-30 top-0 sticky border-b border-zinc-200 mx-auto">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Link className=" text-teal-600 flex items-center gap-2 font-bold" href="/">
                <span className="sr-only">Home</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                </svg>
                Admin
              </Link>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-lg">
                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/products"
                    >
                      Products
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      Orders
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      Settings
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <div>
                    <Image class="h-full w-full rounded-full object-cover object-center" src={session.user.image} alt={session.user.email} width={34} height={34} />
                  </div>

                  <div className="hidden sm:flex">
                    <Link
                      onClick={() => signOut()}
                      className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                      href="/"
                    >
                      Logout
                    </Link>
                  </div>
                </div>

                <div className="block md:hidden">
                  <button

                    className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  }
}