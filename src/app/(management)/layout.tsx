import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import Header from "../ui/header";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  if (!session) redirect("/sign-in");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow px-6 pt-4">{children}</div>
    </div>
  );
};

export default Layout;
