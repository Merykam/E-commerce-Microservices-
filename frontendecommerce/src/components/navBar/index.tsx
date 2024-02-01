import Link from 'next/link';
import Image from 'next/image';
import logo from '../../styles/images/logo.png';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const cart = useSelector((state: RootState) => state?.cart?.shoppingCart);
  return (
    <div className="overflow-hidden">
      <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm py-3 md:py-0">
        <nav
          className="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="relative md:flex md:items-center md:justify-between">
            <div className="flex items-center justify-between">
              <Link
                className="flex-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="/"
              >
                <Image className="mx-auto h-20 w-20" src={logo} alt="logo" />
              </Link>

              <div className="md:hidden">
                <button
                  type="button"
                  className="hs-collapse-toggle w-9 h-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  data-hs-collapse="#navbar-collapse-with-animation"
                  aria-controls="navbar-collapse-with-animation"
                  aria-label="Toggle navigation"
                >
                  <svg
                    className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="3" x2="21" y1="6" y2="6" />
                    <line x1="3" x2="21" y1="12" y2="12" />
                    <line x1="3" x2="21" y1="18" y2="18" />
                  </svg>
                  <svg
                    className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div
              id="navbar-collapse-with-animation"
              className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
            >
              <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500">
                <div className="flex flex-col gap-x-0 mt-5 divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-end md:gap-x-7 md:mt-0 md:ps-7 md:divide-y-0 md:divide-solid dark:divide-gray-700">
                  <a
                    className="font-medium text-gray-600 hover:text-gray-500 py-3 md:py-6 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                    aria-current="page"
                  >
                    Landing
                  </a>

                  <Link
                    className="font-medium text-gray-600 hover:text-gray-500 py-3 md:py-6 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="/products"
                  >
                    Pruducts
                  </Link>

                  <Link
                    className="font-medium text-gray-600 hover:text-gray-500 py-3 md:py-6 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="auth/login"
                  >
                    Login
                  </Link>

                  <div className="pt-3 md:pt-0">
                    <Link
                      className="py-2.5 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-violet-900 text-white hover:bg-violet-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="auth/register"
                    >
                      Register
                    </Link>
                  </div>

                  <div className="p-4">
                    <Link
                      href="cart"
                      className="m-1 ms-0 relative flex justify-center items-center h-[2.200rem] w-[2.200rem] text-sm font-semibold rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      <svg
                        className="flex-shrink-0 w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m5 11 4-7" />
                        <path d="m19 11-4-7" />
                        <path d="M2 11h20" />
                        <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4" />
                        <path d="m9 11 1 9" />
                        <path d="M4.5 15.5h15" />
                        <path d="m15 11-1 9" />
                      </svg>
                      <span className="flex absolute top-0 end-0 h-3 w-3 -mt-1.5 -me-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 dark:bg-red-600"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                      </span>
                      <span className="flex absolute bottom-0 end-0 h-3 w-3 -mt-1.5 -me-1.5">
                        <span className="relative inline-flex rounded-full h-3 w-3 ">
                          {cart.length}
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* <!-- End Header --> */}
    </div>
  );
};

export default NavBar;
