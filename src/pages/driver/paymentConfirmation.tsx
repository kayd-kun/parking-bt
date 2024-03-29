// ===================================
// /driver/paymentConfirmation - Sonam Deki
// ===================================
import Head from "next/head";
import Link from "next/link";

export default function PaymentConfirmation() {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="pt-14">
          <div
            className=" mx-w-sm
          mx-auto 
          mt-6 
          flex 
          max-h-fit
          max-w-fit 
          flex-auto
          flex-col 
          items-center 
          space-x-4
          rounded-xl 
        bg-blue-500 
          p-10 
          text-center 
          shadow-lg "
          >
            <h1 className="pb-1 text-white" p-4>
              Your Payment Has been Successful !
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-10 w-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
              />
            </svg>
            <p className="p-4 pb-2 text-white  ">Nu:50</p>
          </div>
          <div>
            <h1 className="p-4 pt-12 text-center text-[12px]">
              Click Here To Know Your Parking Status
            </h1>
            <div className="flex justify-center space-x-2">
              <Link href="/driver/checkSession">
                <button
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  className="inline-block 
              rounded-full bg-[#0D76D7] 
              px-28 py-2.5 
              text-xs font-medium 
              uppercase leading-tight 
              text-white shadow-md transition 
              duration-150 ease-in-out 
              hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700
               focus:shadow-lg focus:outline-none 
              focus:ring-0 active:bg-white active:shadow-lg"
                >
                  Parking Session
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
