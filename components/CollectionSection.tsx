import Image from "next/image";

export default function CollectionSection() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[90%]">
        <h1 className="text-gray-700 font-semibold text-4xl mb-4">
          Our Collections
        </h1>
        <div className="w-full h-[520px] grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-2 md:gap-6 ">
          <div className="relative row-span-2 border rounded-lg bg-[url('/woman.jpg')] bg-no-repeat bg-cover bg-center">
            <div className="z-50 absolute bottom-3 left-3">
              <p className="text-gray-100 text-sm mb-1">Cozy Comfort</p>
              <h1 className="text-gray-50 font-semibold text-2xl">
                Plush fabrics and shooting designs
              </h1>
            </div>
            <div className="absolute w-full bg-black h-full p-4 opacity-30"></div>
          </div>
          <div className="relative row-span-2 md:row-span-1 border rounded-lg bg-[url('/woman.jpg')] bg-no-repeat bg-cover bg-center">
            <div className="z-50 absolute bottom-3 left-3">
              <p className="text-gray-100 text-sm mb-1">Cozy Comfort</p>
              <h1 className="text-gray-50 font-semibold text-2xl">
                Plush fabrics and shooting designs
              </h1>
            </div>
            <div className="absolute w-full bg-black h-full p-4 opacity-30"></div>
          </div>
          <div className="relative row-span-2 md:row-span-1 border rounded-lg bg-[url('/woman.jpg')] bg-no-repeat bg-cover bg-center">
            <div className="z-50 absolute bottom-3 left-3">
              <p className="text-gray-100 text-sm mb-1">Cozy Comfort</p>
              <h1 className="text-gray-50 font-semibold text-2xl">
                Plush fabrics and shooting designs
              </h1>
            </div>
            <div className="absolute w-full bg-black h-full p-4 opacity-30"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
