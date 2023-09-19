import React from "react";
import ProtectedRoute from "@/assets/utils/hoc/protected-route";

const RegisterUser = () => {
  return (
    <ProtectedRoute permission="CAN_REGISTER_USERS">
      <div>RegisterUsers</div>
    </ProtectedRoute>
  );
};

export default RegisterUser;
