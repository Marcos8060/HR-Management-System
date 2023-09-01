import React from "react";
import { TextField } from "@mui/material";
import Link from "next/link";

const Login = () => {
  return (
    <section className="bg-surface h-screen flex items-center justify-center">
      <section className="bg-white shadow-xl w-4/12 mx-auto rounded p-4 space-y-8">
        <div>
          <h1 className="text-center text-xl">Login</h1>
          <p className="text-center">Access to our dashboard</p>
        </div>
        <form className="flex flex-col space-y-4">
          <TextField label="username" />
          <TextField label="password" />
          <button className="bg-primary rounded px-4 py-2 text-white w-full">
            Login
          </button>
          <p className="text-center">
            Dont have an account yet?{" "}
            <Link href="/auth/register" className="text-link">
              Register
            </Link>
          </p>
        </form>
      </section>
    </section>
  );
};

export default Login;
