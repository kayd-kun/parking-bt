// ====================================
// /driver/checkSession - Kamal Acharya
// ====================================

import { BiArrowBack } from 'react-icons/bi'

export default function VehicleStatus() {
    return (
        <>

            <main>
                {/* Title & Back arrow */}
                <div className='flex flex-row justify-center gap-4 py-6'>
                    <BiArrowBack className="w-7 h-7 text-gray-400 relative" />
                    <span>
                        Current Session
                    </span>
                </div>
            </main>
        </>
    )
}