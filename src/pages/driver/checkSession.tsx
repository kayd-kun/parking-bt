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
          <Link href={"/"}>
            <BiArrowBack className="relative h-7 w-7 text-gray-400" />
          </Link>
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
            Address: Zangthopelri Zone <br />
            Date: 4th Jan 2024 <br />
            Vehicle Type: Light Vehicle
            <br />
            Vehicle Number: BP-1-A-1234 <br />
            Duration: 1 Hour <br />
            Time: 10:00AM - 11:00AM
          </div>
          <div className="flex-col h-96 w-96 justify-center items-center">
              <Link href={"/"} className="w-3/4 py-2">
                <button
                  type="button"
                  className="w-96 rounded-full bg-blue-500 py-2 hover:bg-blue-500"
                >
                  Extend Session
                </button>
              </Link>

              <Link
                href={"/driver/parkingHistory"}
              >
                <button
                  type="button"
                  className="mt-10 inline w-96 rounded-full bg-blue-500 py-2 hover:bg-blue-500"
                >
                  Check Past Sessions
                </button>
              </Link>
          </div>
        </div>
      </main>
    </>
  );
}
