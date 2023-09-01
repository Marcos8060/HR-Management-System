import React from "react";
import { TextField } from "@mui/material";
import Link from "next/link";
import * as yup from "yup";
import { useFormik } from "formik";

const Login = () => {
  const validationSchema = yup.object({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, helpers) => {
      try {
        // await loginUser(values.username,values.password);
        helpers.resetForm();
      } catch (error) {}
    },
  });
  return (
    <section className="bg-surface h-screen flex items-center justify-center">
      <section className="bg-white shadow-2xl w-4/12 mx-auto rounded p-4 space-y-8">
        <div>
          <h1 className="text-center text-xl">Login</h1>
          <p className="text-center">Access to our dashboard</p>
        </div>
        <form className="flex flex-col space-y-4" onSubmit={formik.handleSubmit}>
          <TextField
            label="username"
            name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
          <TextField
            label="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
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
