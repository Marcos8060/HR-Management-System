import React from "react";
import Layout from "@/components/Layout";
import ProtectedRoute from "@/assets/utils/hoc/protected-route";
import { useAuth } from "@/assets/hooks/use-auth";

const Employee = () => {
  const user = useAuth();

  console.log("CURRENT_USER ",user);
  return (
    <ProtectedRoute permission={'ACCESS_EMPLOYEE_DASHBOARD'}>
      <section className="p-4">Employee</section>
    </ProtectedRoute>
  );
};



export default Employee;
