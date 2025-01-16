import LogInForm from "./(components)/login/form";

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center space-y-4 md:space-y-5 lg:space-y-6 xl:space-y-7">
      <div className="w-screen h-screen flex flex-col justify-center items-center text-center text-xl space-y-">
        <LogInForm />
      </div>
    </main>
  );
}
