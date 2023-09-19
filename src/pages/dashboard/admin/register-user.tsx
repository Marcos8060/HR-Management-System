import React from "react";
import ProtectedRoute from "@/assets/utils/hoc/protected-route";

const RegisterUser = () => {
  return (
    <ProtectedRoute permission="CAN_REGISTER_USERS">
      <section className="registerPage flex items-center justify-center h-screen">
        <div className="bg-white rounded w-8/12 mx-auto p-4 h-[80vh]">
          <section className="flex gap-4">
            <div className="w-7/12">
              <h1>Hello World</h1>
            </div>
            <div className="md:w-5/12 w-full space-y-2">
              <h1 className="text-center">Create Account</h1>
              <form className="space-y-4">
                <input
                  className="block border-b border-primary bg-transparent px-4 py-2 focus:outline-none w-full"
                  type="text"
                  placeholder="Full Name"
                />
                <input
                  className="block border-b border-primary px-4 py-2 focus:outline-none w-full"
                  type="text"
                  placeholder="Email"
                />
                <input
                  className="block border-b border-primary px-4 py-2 focus:outline-none w-full"
                  type="text"
                  placeholder="Username"
                />
                <input
                  className="block border-b border-primary px-4 py-2 focus:outline-none w-full"
                  type="text"
                  placeholder="Password"
                />
                <input
                  className="block border-b border-primary px-4 py-2 focus:outline-none w-full"
                  type="text"
                  placeholder="Occupation"
                />
                <input
                  className="block border-b border-primary px-4 py-2 focus:outline-none w-full"
                  type="text"
                  placeholder="Role"
                />
                <button className="bg-primary text-white rounded-3xl w-full px-4 py-2">Send</button>
              </form>
            </div>
          </section>
        </div>
      </section>
    </ProtectedRoute>
  );
};

export default RegisterUser;
