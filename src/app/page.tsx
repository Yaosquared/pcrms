import Link from "next/link";

export default function LandPage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center space-y-4 md:space-y-5 lg:space-y-6 xl:space-y-7">
      <div className="flex flex-col justify-center items-center text-center space-y-1 md:space-y-2 lg:space-y-3 xl:space-y-4">
        <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          PCRMS
        </h2>
        <p className="font-medium text-lg md:text-xl lg:text-2xl xl:text-3xl">
          Pet Carrier Rental Management System
          <span className="italic"> (Client Side)</span>
        </p>
      </div>
      <Link
        href="/login"
        className="bg-blue-600 hover:bg-blue-700 rounded-lg font-medium px-4 py-2 xl:px-6 xl:py-3 text-sm md:text-base lg:text-lg xl:text-xl text-white"
      >
        Dashboard
      </Link>
    </main>
  );
}
