export default function ParkingHistoryCard() {
  return (
    <>
      <div className=" pb-4 shadow-lg  ">
        <div className=" space-x-2 p-2 pb-2 ">
          <div className="space-y-1 space-x-1">
            <h3 className="text-lg font-semibold leading-snug sm:pr-8">
              Desup Line, Phuntsholing
            </h3>
            <p className="text-lg dark:text-gray-400">12/12/2022, 8:00 am</p>
            <p className="text-lg dark:text-gray-400">Duration: 30mins</p>
            <p className="text-lg dark:text-gray-400">Booking Fee: Nu.25</p>
            <span className="text-sm text-red-600 ">Fine cost: Nu.10</span>
          </div>
        </div>
      </div>
    </>
  );
}
