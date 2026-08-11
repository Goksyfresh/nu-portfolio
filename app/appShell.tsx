"use client";
import { useEffect, useState } from "react";
import Preloader from "./preloader";

const AppShell = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Prevent the browser from restoring a previous scroll position while
  // the page is still short (preloader-only) — without this, the page can
  // jump to wherever you last scrolled (e.g. near the footer) once real
  // content mounts and the document grows tall, then animate back to top
  // due to `scroll-behavior: smooth`.
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <Preloader onComplete={() => setIsLoading(false)} />
      {!isLoading && children}
    </>
  );
};

export default AppShell;