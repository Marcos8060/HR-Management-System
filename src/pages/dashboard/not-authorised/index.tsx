import React from "react";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

const NotAuthorized = () => {
  return (
    <section className="p-12 h-screen flex items-center justify-center bg-[#DFEAF0]">
      <div className="bg-white p-8 space-y-4 rounded md:bg-opacity-60 md:backdrop-filter md:backdrop-blur-lg md:w-5/12 mx-auto text-center">
        <h1 className="text-7xl font-bold">403</h1>
        <p className="font-semibold">Restricted Access</p>
        <p>You lack permission to access this page</p>
        <Link href="/dashboard">
          <div className="flex items-center justify-center">
            <button className="rounded text-white text-sm bg-primary px-4 py-2 my-2 flex items-center gap-4">
              <BiArrowBack />
              Back to Dashboard
            </button>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default NotAuthorized;
