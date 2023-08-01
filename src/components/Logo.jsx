import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="http://localhost:3000/" className="flex items-center space-x-2">
      <Image src="/logo1.png" alt="Logo1" width={200} height={200} />
    
    </Link>
  );
};

export default Logo;
