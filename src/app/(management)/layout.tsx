import Header from "../ui/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[100%]">
      <Header />
      <div className="px-6 py-4">{children}</div>
    </div>
  );
}
