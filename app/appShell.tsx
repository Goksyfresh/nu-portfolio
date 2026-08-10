// app/AppShell.tsx
"use client";
import { useState } from "react";
import Preloader from "./preloader";

const AppShell = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Preloader onComplete={() => setIsLoading(false)} />
      {!isLoading && children}
    </>
  );
};

export default AppShell;