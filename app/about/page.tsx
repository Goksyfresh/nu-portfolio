"use client";
import dynamic from "next/dynamic";

const AboutContent = dynamic(() => import("../components/AboutContent"));

export default function AboutPage() {
  return <AboutContent/>;
}