import Link from "next/link";

const LandingPage = async () => {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center space-y-4 md:space-y-5 lg:space-y-6 xl:space-y-7">
      <Link href="/sign-in" className="flex justify-center">
        <button className="w-[80%] bg-blue-600 hover:bg-blue-700 rounded-md shadow-md p-4 text-white font-semibold text-lg lg:text-2xl transition duration-300 ease-in-out">
          Continue to Pet Carrier Rental Management System
        </button>
      </Link>
    </main>
  );
};

export default LandingPage;
