import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="https://bodas-public.vercel.app/" className="flex items-center space-x-2">
      <Image src="/logo3.png" alt="Logo3" width={200} height={200} />
    
    </Link>
  );
};

export default Logo;
