import Image from "next/image";

export default function TestimonialCard() {
  return (
    <div className=" h-screen flex items-center justify-center bg-gradient-to-br from-[#F9FAFB] to-[#D2D6DB]">
      <div className="bg-white w-[340px] p-[24px] rounded-lg drop-shadow ">
        <div className="flex items-center mb-[16px]">
          <Image
            src="/profile.jpg"
            alt="photo de profil"
            width={48}
            height={48}
            className="rounded-full mr-[16px]"
          />

          <div>
            <h1 className=" font-semibold text-lg leading-7 text-neutral-900">
              Sarah Dole
            </h1>
            <p className="text-neutral-600 text-sm leading-5">@sarahdole</p>
          </div>
        </div>
        <p className="text-neutral-600 text-base leading-6">
          I've been searching for high-quality abstract images for my design
          projects, and I'm thrilled to have found this platform. The variety
          and depth of creativity are astounding!
        </p>
      </div>
    </div>
  );
}
