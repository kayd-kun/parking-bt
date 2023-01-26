// import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
// React Icons
import { BiSearchAlt } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { AiOutlineCar } from "react-icons/ai";

// import { api } from "../utils/api";
import Image from "next/image";
// import VehicleDetail from "../components/vehicleHome/vehicleDetail"; // Deleted

export default function VehicleHome() {
//   const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Parking.BT</title>
        <meta name="description" content="Bhutan Parking App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center flex-col">
        PAST REPORTSSSSSSSSSSSSSSS
        {/* Search and Check Status Button */}
        <div>
          <fieldset className="w-full space-y-1 dark:text-gray-100 py-4 flex justify-center">
            <label className="hidden">Search</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button type="button" title="search" className="p-1 focus:outline-none focus:ring">
                  <BiSearchAlt className="w-5 h-5 text-gray-400" />
                </button>
              </span>
              <input type="search" name="search" placeholder="BP-1-A1234" className="w-2/4 py-2 pl-10 ml-2 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900 focus:dark:border-teal-400" />
              <Link href="/vehicle/status">
                <button type="button" className="w-30 px-4 py-2 ml-2 inline rounded-full bg-fuchsia-400 hover:bg-fuchsia-700 dark:bg-black dark:text-gray-800">
                  Check Session
                </button>
              </Link>
            </div>
          </fieldset>
        </div>

        {/* Zone Image Area */}
        {/* In code: if zoneSelected ? zoneImg: ParkingImg */}
        <div className="flex justify-center">
          <Image src="/Logo.png" alt="Picture of the author" width={350} height={350} />
        </div>

        {/* Vehicle Detail input Section */}

        {/* TODO: Redo this section using GRID - The icons needs to be aligned together  */}

        <div className="divide-y-2 divide-gray-400 flex flex-col justify-center">

          <div className="flex flex-row justify-center py-5">
            <GoLocation className="mr-5" />
            <button className="text-2xl">
              Select Zone
            </button>
          </div>


          <div className="flex flex-row justify-center py-5">
            <AiOutlineCar className="mr-5" />
            <button className="text-2xl">
              Vehicle Details
            </button>
          </div>

          {/* Timer Selection */}
          <div className="flex justify-center py-6">
            <label htmlFor="Quantity" className="sr-only"> Quantity </label>
            <div className="flex items-center border border-gray-200 divide-x divide-gray-200 rounded">
              <button type="button" className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75">
                −
              </button>
              <span>
                <input type="number" id="Quantity" defaultValue={30} className="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none" />
              </span>
              <button type="button" className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75">
                +
              </button>
            </div>
          </div>

          {/* End and Total Cost Section */}
          <div className="flex flex-row divide-x divide-gray-400">
            <div className="w-1/2 text-center py-6">
              End Time: <br />
              4:30 PM
            </div>
            <div className="w-1/2 text-center py-6">
              Total Cost: <br />
              Nu. 100
            </div>
          </div>

          {/* For another horizontal diveider line */}
          {/* <div>
          </div> */}

          <div className="flex justify-center pt-6">

            <button type="button" className="w-3/4 sm:w-1/2 px-3 py-3 font-semibold text-xl ml-2 rounded-full bg-fuchsia-400 hover:bg-fuchsia-700 dark:bg-black dark:text-gray-800">
              Continue
            </button>
          </div>


        </div>
      </main>
    </>
  );
}