import React, { useRef, type ReactNode } from 'react';
import Image from 'next/image';
import logo from 'assets/logo.svg';
import Toaster from 'components/common/Toaster/Toaster';

type Props = {
  children?: ReactNode;
  className?: string;
};

export default function BaseLayout({ children, className }: Props) {
  return (
    <>
      <header className="fixed top-0 left-0 z-10 flex h-16 w-screen justify-between bg-black">
        <div className="flex flex-row items-center gap-5">
          <div className="h-5 w-px bg-grey-40"></div>
          <div className="text-xxl text-white">Baton</div>
        </div>
      </header>
      <div>
        <main className={`mt-16 ${className}`}>{children}</main>
      </div>
    </>
  );
}