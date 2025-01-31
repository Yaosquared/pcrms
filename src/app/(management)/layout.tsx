import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import Header from "../ui/header";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  if (!session) redirect("/sign-in");

  const sessionProp = { name: session.user?.name ?? "" };

  return (
    <div className="flex flex-col min-h-screen">
      <Header sessionProp={sessionProp} />
      <div className="flex-grow px-6 pt-4">{children}</div>
    </div>
  );
};

export default Layout;
