import React, { useContext } from "react";
import { TextField } from "@mui/material";
import Link from "next/link";
import * as yup from "yup";
import { useFormik } from "formik";
import { authContext } from ".";
import Alert from '@mui/material/Alert';


const Login = () => {
  const { loginUser, message } = useContext(authContext);
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
        await loginUser(values.username, values.password);
        helpers.resetForm();
      } catch (error) {
      }
    },
  });
  return (
    <>
      <section className="h-screen flex items-center justify-center px-4">
        <section className="border rounded p-4 space-y-8">
          <div>
            <h1 className="text-center text-xl">Login</h1>
            <p className="text-center">Access to our dashboard</p>
          </div>
          <form
            className="grid space-y-4 md:w-4/12 w-full"
            onSubmit={formik.handleSubmit}
          >
            <TextField
              className="block"
              fullWidth
              label="username"
              name="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
            <TextField
             fullWidth
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
    </>
  );
};

export default Login;
