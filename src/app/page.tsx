import LogInForm from "./(components)/login/form";

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center space-y-4 md:space-y-5 lg:space-y-6 xl:space-y-7">
      <div className="w-screen h-screen flex flex-col justify-center items-center text-center text-xl bg-gradient-to-r from-[#0cadc4] to-[#1a3b69]">
        <LogInForm />
      </div>
    </main>
  );
}
