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
  const [loading, setLoading] = useState(false);
  const { loginUser, message } = useContext(authContext);
  console.log("LOGIN_ERROR ", message);

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
    try {
      setLoading(true);
      await loginUser(formValue.username, formValue.password).then(() => {
        helpers.resetForm();
        setLoading(false);
      });
    } catch (err) {
      console.log("REGISTRATION_ERROR ", err);
    }
  };

  return (
    <>
      <section className="flex gap-4 items-center justify-center h-screen py-4">
        <div className="md:w-1/2 w-full sm:p-12 p-8 space-y-4">
          <div className="space-y-2 text-center">
            <h1 className="text-2xl">Welcome Back</h1>
            <p className="text-xs text-primary">
              If you forgot your password, please contact your system
              administrator for a password reset
            </p>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            <Form className="space-y-8">
              <section className="space-y-8">
                <div className="space-y-2">
                  <Field
                    className="block border-2 border-primary rounded-3xl w-full px-3 py-3 focus:outline-none border-gray-400"
                    placeholder="Enter Username"
                    type="text"
                    name="username"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-red text-xs"
                  />
                </div>
                <div className="space-y-2">
                  <Field
                    className="block border-2 border-primary rounded-3xl w-full px-3 py-3 focus:outline-none border-gray-400"
                    placeholder="Enter Password"
                    type="password"
                    name="password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red text-xs"
                  />
                </div>
              </section>
              <div className="flex items-center justify-center mt-4">
                <button className="bg-primary rounded-3xl px-12 py-3 text-white w-full">
                  Login
                  {loading && (
                        <span className="spinner-border animate-spin ml-1 spinner-border-sm"></span>
                      )}
                </button>
              </div>
            </Form>
          </Formik>
        </div>
        <div className="md:block hidden w-1/2 loginPage text-white">
          <section className="flex items-center text-center justify-center h-screen">
            <div>
              <h1 className="text-4xl">Welcome Back</h1>
              <p className="text-sm">
                If you forgot your password, please contact your system
                administrator for a password reset
              </p>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Login;
