"use client";
import { useState } from "react";
import Preloader from "./preloader";


const AppShell = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      {children}
    </>
  );
};

export default AppShell;