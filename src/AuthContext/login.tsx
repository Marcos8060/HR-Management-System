import React, { useContext, useState } from "react";
import Link from "next/link";
import * as yup from "yup";
import { useFormik } from "formik";
import { authContext } from ".";
import Alert from "@mui/material/Alert";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FormikValues, FormikHelpers } from "formik";

const Login = () => {
  const { loginUser, message } = useContext(authContext);
  console.log("LOGIN_ERROR ", message);

  // const formik = useFormik({
  //   initialValues: {
  //     username: "",
  //     password: "",
  //   },
  //   validationSchema: validationSchema,
  //   onSubmit: async (values, helpers) => {
  //     try {
  //       await loginUser(values.username, values.password);
  //       helpers.resetForm();
  //     } catch (error) {}
  //   },
  // });

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .test(
        "len",
        "The username must be between 3 and 20 characters.",
        (val) =>
          !val || (val.toString().length >= 3 && val.toString().length <= 20)
      )
      .required("This field is required!"),
    password: Yup.string()
      .test(
        "len",
        "The password must be between 6 and 20 characters.",
        (val) =>
          !val || (val.toString().length >= 6 && val.toString().length <= 40)
      )
      .required("This field is required!"),
  });

  const handleLogin = async (
    formValue: FormikValues,
    helpers: FormikHelpers<any>
  ) => {
    console.log("VALUES ", formValue);
    try {
      await loginUser(formValue.username, formValue.password).then(() => {
        helpers.resetForm();
      });
    } catch (err) {
      console.log("REGISTRATION_ERROR ", err);
    }
  };

  return (
    <>
      <section className=" bg-background bg-opacity-60 backdrop-filter backdrop-blur-lg">
        <article className="flex items-center justify-center h-screen">
          <div className="md:block hidden mx-auto space-y-8 flex items-center justify-center px-4 w-1/2">
            <img
              className="rounded object-contain"
              src="/images/rocket.png"
              alt=""
            />
          </div>
          <div className="space-y-4 w-1/2 flex items-center justify-center">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleLogin}
            >
              <Form className="space-y-4">
                <section className="grid items-center justify-center space-y-4">
                  <div>
                    <Field
                      className="block border-b w-full border-primary bg-background px-4 py-3 focus:outline-none"
                      placeholder="username"
                      name="username"
                    />
                    <ErrorMessage
                        name="username"
                        component="div"
                        className="text-red text-xs"
                      />
                  </div>
                  <div>
                    <Field
                      className="block border-b w-full border-primary bg-background px-4 py-3 focus:outline-none"
                      placeholder="password"
                      name="password"
                    />
                    <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red text-xs"
                      />
                  </div>
                </section>
                <button className="bg-primary shadow-2xl w-full rounded text-white px-4 py-3">
                  Login
                </button>
                <p className="text-center">
                  Dont have an account yet?{" "}
                  <Link href="/auth/register" className="text-link">
                    Register
                  </Link>
                </p>
              </Form>
            </Formik>
          </div>
        </article>
      </section>
    </>
  );
};

export default Login;
