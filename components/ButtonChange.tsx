import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function ButtonChange() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-[#F9FAFB] to-[#D2D6DB]">
      <div className="flex items-center justify-center gap-10">
        <button className="text-white bg-blue-700 hover:bg-blue-800 duration-300 focus:outline focus:outline-purple-700  rounded-sm p-4 flex items-center">
          Expolre products
          <ArrowRightIcon className="size-6 ml-4" />
        </button>
        <button className="text-black bg-white drop-shadow hover:drop-shadow-lg duration-300 focus:outline focus:outline-purple-700  rounded-sm p-4 flex items-center">
          Expolre products
          <ArrowRightIcon className="size-6 ml-4" />
        </button>
        <button className="text-white bg-red-600 drop-shadow hover:bg-red-700 duration-300 focus:outline focus:outline-red-800  rounded-sm p-4 flex items-center">
          <TrashIcon className="size-6 mr-4" />
          Expolre products
        </button>
      </div>
    </div>
  );
}
