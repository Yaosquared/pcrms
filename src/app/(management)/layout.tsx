import Header from "../ui/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow px-6 pt-4">{children}</div>
    </div>
  );
}
