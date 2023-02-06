// ====================================
// /driver/checkSession - Kamal Acharya
// ====================================

import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";

export default function VehicleStatus() {
  return (
    <>
      <main className="">
        {/* Title & Back arrow */}
        <div className="flex flex-row justify-center gap-4 py-6">
          <BiArrowBack className="relative h-7 w-7 text-gray-400" />
          <span>Current Session</span>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-8">
          {/* Countdown Timer */}
          <div className="h-64 w-64 rounded-full bg-blue-500 py-20 text-center">
            10:00
          </div>

          {/* Details Card */}
          {/* TODO: Align the texts using grid */}
          <div className="h-52 w-3/4 rounded-lg p-10 text-center shadow transition hover:shadow-lg">
            Address: Zangthopelri Zone Date: 4th Jan 2024 Vehicle Type: Light
            Vehicle Vehicle Number: BP-1-A-1234 Duration: 1 Hour Time: 10:00AM -
            11:00AM
          </div>
          <Link href={"/"} className="ml-2 w-3/4 px-4 py-2">
            <button
              type="button"
              className=" ml-2 inline w-96 rounded-full bg-fuchsia-400 px-4 py-2 hover:bg-fuchsia-700 dark:bg-black dark:text-gray-800"
            >
              Extend Session
            </button>
          </Link>
          <Link href={"/driver/parkingHistory"} className="ml-2 w-3/4 px-4 py-2">
            <button
              type="button"
              className="ml-2 inline w-96 rounded-full bg-fuchsia-400 px-4 py-2 hover:bg-fuchsia-700 dark:bg-black dark:text-gray-800"
            >
              Check Past Sessions
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}
