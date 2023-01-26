// ====================================
// /driver/checkSession - Kamal Acharya
// ====================================

import { BiArrowBack } from 'react-icons/bi'

export default function VehicleStatus() {
    return (
        <>

            <main className=''>


                {/* Title & Back arrow */}
                <div className='flex flex-row justify-center gap-4 py-6'>
                    <BiArrowBack className="w-7 h-7 text-gray-400 relative" />
                    <span>
                        Current Session
                    </span>
                </div>

                <div className='flex flex-col items-center w-full gap-8'>
                    {/* Countdown Timer */}
                    <div className='w-64 h-64 bg-blue-500 rounded-full text-center py-20'>
                        10:00
                    </div>

                    {/* Details Card */}
                    {/* TODO: Align the texts using grid */}
                    <div className="rounded-lg shadow transition hover:shadow-lg h-52 text-center p-10 w-3/4">
                        Address: Zangthopelri Zone
                        Date: 4th Jan 2024
                        Vehicle Type: Light Vehicle
                        Vehicle Number: BP-1-A-1234
                        Duration: 1 Hour
                        Time: 10:00AM - 11:00AM
                    </div>

                    <button type="button" className="w-3/4 px-4 py-2 ml-2 inline rounded-full bg-fuchsia-400 hover:bg-fuchsia-700 dark:bg-black dark:text-gray-800">
                        Extend Session
                    </button>
                    <button type="button" className="w-3/4 px-4 py-2 ml-2 inline rounded-full bg-fuchsia-400 hover:bg-fuchsia-700 dark:bg-black dark:text-gray-800">
                        Check Past Sessions
                    </button>

                </div>
            </main>
        </>
    )
}