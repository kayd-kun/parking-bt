export default function OffenseDetailCard() {
  return (
    <>
      {/* Card Components of Offense Details */}
      <div className="flex w-full space-x-10 shadow-lg sm:space-x-4">
        <img
          className="h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent dark:bg-gray-500 sm:h-32 sm:w-32"
          src="https://thumbs.dreamstime.com/b/phuntsholingsstad-74842242.jpg&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=0"
          alt="Zandhopelri"
        />
        <div className="flex w-full flex-col justify-between pb-4">
          <div className="flex w-full justify-between space-x-2 pb-2">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold mt-5 leading-snug sm:pr-8 md:text-4xl">
                Zangdhopelri
              </h3>
              <p className="text-sm dark:text-gray-400 md:text-4xl">
                12/12/2022
              </p>
              <p className="text-sm dark:text-gray-400 md:text-4xl">
                Parking is in wrong place
              </p>
              <span className="text-red-600md:text-4xl text-sm ">
                Fine cost: Nu.30
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
