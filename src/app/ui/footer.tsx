import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Link href="https://marioyaoyaoii.vercel.app/">
        <Image
          src="/ysqrd-logo.png"
          width={50}
          height={50}
          title="Go to Yaosquared's Portfolio"
          alt="Yaosquared's Logo"
        />
      </Link>
      <p className="text-xs py-2 text-foreground/70">
        &copy; {getCurrentYear()}. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
