import {Link} from "next-view-transitions";
import React from "react";

const E404 = () => {
  return (
    <div className="py-[160px] lg:px-[28px] px-[16px] ">
      <div className="flex flex-col gap-[28px] items-center justify-center w-full">
        <h1
          className=" lg:w-[60%] text-center lg:text-heading2 text-[48px] font-bold"
          style={{ letterSpacing: "-0.06em", lineHeight: "0.9em" }}
        >
          oops! this page doesn't exist.
        </h1>
        <p
          className="font-regular lg:w-[40%] text-center text-p20 opacity-70"
          style={{ letterSpacing: "-0.04em", lineHeight: "1.2em" }}
        >
          You might have taken a wrong turn, but don’t worry, let’s get you back
          on track.
        </p>
         <Link href="/" className="py-[12px] px-[24px] flex items-center justify-center gap-[10px] rounded-[4px] bg-light text-p16 font-medium text-dark-90">
                back to home
            </Link>
      </div>
    </div>
  );
};

export default E404;
