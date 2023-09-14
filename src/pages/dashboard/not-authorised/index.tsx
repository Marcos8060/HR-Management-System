import React from "react";
import Link from "next/link";
import Layout from "@/components/Layout";

const NotAuthorized = () => {
  return (
    <section className="p-12 h-[88vh] flex items-center justify-center">
      <div className="bg-white p-8 space-y-4 rounded md:bg-opacity-60 md:backdrop-filter md:backdrop-blur-lg w-5/12 mx-auto text-center">
        <h1 className="text-7xl font-bold">403</h1>
        <p className="font-semibold">Restricted Access</p>
        <p>You lack permission to access this page</p>
        <Link href="/dashboard">
          <button className="rounded text-white text-sm font-bold bg-primary px-4 py-1 my-2">
            Back to Dashboard
          </button>
        </Link>
      </div>
    </section>
  );
};


export default NotAuthorized;
