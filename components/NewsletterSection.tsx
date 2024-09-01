import { CheckIcon } from "@heroicons/react/24/solid";

export default function NewsletterSection() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col lg:flex-row items-center justify-center h-full lg:h-[600px] w-[80%] gap-8 py-40">
        {/* LEFT */}
        <div className="flex-1 space-y-10 lg:space-y-14 lg:max-w-[550px]">
          <h1 className=" text-3xl lg:text-5xl text-gray-800 font-semibold">
            Get the finest curated abstracts delivered weekly to your inbox
          </h1>
          <div className="space-y-4">
            <p className=" text-sm md:text-lg text-gray-600 flex items-center gap-2">
              {" "}
              <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <CheckIcon className="size-5 text-blue-800" />
              </span>
              Exclusive access to new abstract images and collections
            </p>
            <p className=" text-sm md:text-lg text-gray-600 flex items-center gap-2">
              {" "}
              <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <CheckIcon className="size-5 text-blue-800" />
              </span>
              Unlock special promotions only for subscribers
            </p>
            <p className=" text-sm md:text-lg text-gray-600 flex items-center gap-2">
              {" "}
              <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <CheckIcon className="size-5 text-blue-800" />
              </span>
              Regular doses of artistic inspiration{" "}
            </p>
          </div>
          <form action="" method="get">
            <fieldset className="flex flex-col lg:flex-row items-center gap-4">
              <input
                id="email"
                type="text"
                name="email"
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                title="Mauvais format de votre adresse Email"
                required
                placeholder="name@email.com"
                className=" text-sm md:text-base w-full pl-2 py-2 bg-gray-100 border border-gray-200 rounded-sm outline-none"
              />
              <input
                type="button"
                value="Subscribe"
                className="bg-blue-800 hover:bg-blue-
                00 cursor-pointer duration-300 text-white px-4 py-2 rounded-sm text-sm md:text-base w-full lg:w-auto"
              />
            </fieldset>
            <p className=" text-xs lg:text-sm text-gray-600 mt-4">
              We only send you the best! No spam
            </p>
          </form>
        </div>

        <div className="flex-1 lg:h-[600px] w-full bg-[url('/abstract.jpg')] bg-cover bg-no-repeat bg-center rounded-sm "></div>
      </div>
    </div>
  );
}
