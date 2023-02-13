
export default function ZoneListCard () {

    return (
        <>
                        <div>
              <div className="mx-w-sm mx-auto mt-6 grid max-h-fit flex-1 grid-cols-3 gap-2 space-x-1 rounded-xl  bg-white p-4 shadow-lg">
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
                  <h1 className="font-bold">Zangdhophelri</h1>
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
        </>
    )
}