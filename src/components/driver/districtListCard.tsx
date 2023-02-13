import Link from "next/link";
import { GoLocation } from "react-icons/go";

export default function DistrictListCard({district}: {
  district: {
    id: number,
    name: string,
  },
}) {

  const {id, name} = district;
  return (
    <>
      <div className=" flex justify-center">
        <div className=" flex gap-8 max-w-sm text-2xl flex-row rounded-lg bg-white p-6 shadow-lg">
          <GoLocation className="w-7 h-7" />
          <Link href={"/driver/district/zone"} className="">
            <button>{district.name}, Bhutan</button>
          </Link>
          <p />
        </div>
      </div>

      {/* <div className="mt-10 flex gap-5 rounded-lg px-4 py-2 text-2xl font-medium text-gray-500 shadow-lg hover:bg-gray-100 hover:text-gray-700">
      </div> */}
    </>
  );
}
