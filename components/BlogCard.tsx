import { ArrowRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default function BlogCard() {
  return (
    <div className=" h-screen flex items-center justify-center bg-gradient-to-br from-[#F9FAFB] to-[#D2D6DB]">
      <div className="bg-white overflow-hidden rounded-lg drop-shadow w-[340px]">
        <div className="bg-[url('/spacejo.jpg')] bg-cover bg-center bg-no-repeat h-[300px]"></div>
        <div className="p-[24px] flex flex-col space-y-4">
          <p className="text-green-900 self-start px-3 bg-green-100 text-sm rounded-full border border-green-400">
            Interior
          </p>
          <h1 className="text-lg text-neutral-900 font-semibold capitalize">
            top 5 living room inspirations
          </h1>
          <p className="text-base text-neutral-600 leading-6">
            Curated vibrants colors for your living, make it pop & calm in the
            same time.
          </p>
          <Link
            href="#"
            className="self-start group text-purple-700 font-semibold hover:text-purple-600 flex items-center  duration-300"
          >
            Read more
            <span>
              <ArrowRightIcon className="size-5 transition transform  translate-x-1 group-hover:translate-x-2" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
