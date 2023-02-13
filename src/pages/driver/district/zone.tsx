// ======================================
// /driver/district/zone - Kezang Gelley
// ======================================
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Zone</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          {/* <-- and Select Zone Title */}
          <div>
            {/* Back Arrow Button  */}
            <div>
              <button className="pl-4 pt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="absolute left-10 top-10 h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
            </div>

            {/* Select Zone Title */}
            <div>
              <h1 className="text- left text-extrabold mt-3 block  text-center text-xl font-medium text-black">
                Select Zone
              </h1>
            </div>
          </div>

          {/* District Title */}
          <div>
            <h1 className="pt-2 pl-6 text-left text-base font-bold">
              Phuntsholing
            </h1>
          </div>

          <div className="">
            <div className="mx-auto mt-1 w-full">
              <div className="relative w-full">
                <input
                  className="h-10 w-full rounded-md border-2 border-cyan-700 bg-white p-5 text-sm "
                  id="search"
                  type="search"
                  placeholder="Search District..."
                />

                <button
                  type="button"
                  className="absolute top-1/2 right-1 -translate-y-1/2 rounded bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            </div>
            <div
              className="
          mx-w-sm
          mx-auto mt-6
          grid 
          max-h-fit 
     
          flex-1
          grid-cols-3 
          gap-2 
          space-x-1
          rounded-xl 
          bg-white 
          p-4
          shadow-lg
          "
            >
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="mt-5 h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <div>
                <h1 className="font-bold">Jordan lam</h1>
                <h1 className="text-sm font-thin text-slate-600">
                  Phuentsholing, Bhutan
                </h1>
                <h1 className="text-xs">Two Wheeler: Nu:20/hr</h1>
                <h1 className="text-xs">Four Wheeler: Nu:40/hr</h1>
              </div>
              <div>
                <a href="/select">
                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block 
              rounded-full bg-[#0D76D7]
              px-5 py-5 
              text-xs font-medium 
              uppercase leading-tight 
              text-white shadow-md transition 
              duration-150 ease-in-out 
              hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700
               focus:shadow-lg focus:outline-none 
              focus:ring-0 active:bg-white active:shadow-lg"
                  >
                    View Map
                  </button>
                </a>
              </div>
            </div>
            <div
              className="
          mx-w-sm
          mx-auto mt-6
          grid 
          max-h-fit 
     
          flex-1
          grid-cols-3 
          gap-2 
          space-x-1
          rounded-xl 
          bg-white 
          p-4
          shadow-lg
          "
            >
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="mt-5 h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <div>
                <h1 className="font-bold">Lower Market</h1>
                <h1 className="text-sm font-thin text-slate-600">
                  Phuentsholing, Bhutan
                </h1>
                <h1 className="text-xs">Two Wheeler: Nu:20/hr</h1>
                <h1 className="text-xs">Four Wheeler: Nu:50/hr</h1>
              </div>
              <div>
                <a href="/select">
                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block 
              rounded-full bg-[#0D76D7]
              px-5 py-5 
              text-xs font-medium 
              uppercase leading-tight 
              text-white shadow-md transition 
              duration-150 ease-in-out 
              hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700
               focus:shadow-lg focus:outline-none 
              focus:ring-0 active:bg-white active:shadow-lg"
                  >
                    View Map
                  </button>
                </a>
              </div>
            </div>

            <div
              className="
          mx-w-sm
          mx-auto mt-6
          grid 
          max-h-fit 
     
          flex-1
          grid-cols-3 
          gap-2 
          space-x-1
          rounded-xl 
          bg-white 
          p-4
          shadow-lg
          "
            >
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="mt-5 h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <div>
                <h1 className="font-bold">Tashi complex</h1>
                <h1 className="text-sm font-thin text-slate-600">
                  Phuentsholing, Bhutan
                </h1>
                <h1 className="text-xs">Two Wheeler: Nu:20/hr</h1>
                <h1 className="text-xs">Four Wheeler: Nu:50/hr</h1>
              </div>
              <div>
                <a href="/select">
                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block 
              rounded-full bg-[#0D76D7]
              px-5 py-5 
              text-xs font-medium 
              uppercase leading-tight 
              text-white shadow-md transition 
              duration-150 ease-in-out 
              hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700
               focus:shadow-lg focus:outline-none 
              focus:ring-0 active:bg-white active:shadow-lg"
                  >
                    View Map
                  </button>
                </a>
              </div>
            </div>
          </div>
      </main>
    </>
  );
};

export default Home;
