import Image from "next/image";

export default function ProfilCard() {
  return (
    <div className=" h-screen flex items-center justify-center bg-gradient-to-br from-[#F9FAFB] to-[#D2D6DB]">
      <div className="bg-white w-[340px] p-[24px] rounded-lg drop-shadow flex flex-col items-center justify-center text-center ">
        <Image
          src="/profile.jpg"
          width={64}
          height={64}
          alt="profil image"
          className="rounded-full"
        />
        <div className="my-4">
          <h1 className=" font-semibold text-lg leading-7 text-neutral-900">
            Sarah Dole
          </h1>
          <p className="text-neutral-600 text-sm leading-5 capitalize">
            front end engineer @ microsoft
          </p>
        </div>
        <p className="text-neutral-600 text-base leading-6 mb-8">
          I turn coffee into bugs which are fixed by someone else. Certified
          Stack Overflow and ChatGPT developer.
        </p>
        <button className="text-white rounded-sm bg-blue-700 hover:bg-blue-400 duration-300 w-full py-2 text-base">
          Contact me
        </button>
        <div className="flex items-center space-x-5 mt-8">
          <Image src="/github.svg" alt="icon" width={26} height={26} />
          <Image src="/linkedin.svg" alt="icon" width={26} height={26} />
          <Image src="/instagram.svg" alt="icon" width={26} height={26} />
          <Image src="/twitter.svg" alt="icon" width={26} height={26} />
        </div>
      </div>
    </div>
  );
}
