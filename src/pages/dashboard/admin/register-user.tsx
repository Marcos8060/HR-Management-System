import React from "react";
import ProtectedRoute from "@/assets/utils/hoc/protected-route";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FormikValues, FormikHelpers } from "formik";
import { BiArrowBack } from "react-icons/bi";
import Link  from 'next/link'

const RegisterUser = () => {
  const initialValues = {
    full_name: "",
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    full_name: Yup.string().required("This field is required!"),
    username: Yup.string()
      .test(
        "len",
        "The username must be between 3 and 20 characters.",
        (val) =>
          !val || (val.toString().length >= 3 && val.toString().length <= 20)
      )
      .required("This field is required!"),
    email: Yup.string()
      .email("This is not a valid email")
      .required("This field is required!"),
    password: Yup.string()
      .test(
        "len",
        "The password must be between 6 and 20 characters.",
        (val) =>
          !val || (val.toString().length >= 6 && val.toString().length <= 40)
      )
      .required("This field is required!"),
    occupation: Yup.string().required("This field is required!"),
    role: Yup.string().required("This field is required!"),
  });

  //   CREATE EMPLOYEE FUNCTION
  const handleCreateEmployee = async (
    formValue: FormikValues,
    helpers: FormikHelpers<any>
  ) => {
    // try {
    //   await CreateEmployee(formValue).then(() => {
    //     helpers.resetForm();
    //     toast.success('Employee created successfully')
    //   });
    // } catch (err) {
    //   console.log("EMPLOYEE_ERROR ", err);
    // }
  };

  return (
    <ProtectedRoute permission="CAN_REGISTER_USERS">
      <section className="flex items-center justify-center h-screen">
        <div className="bg-white rounded w-9/12 mx-auto p-4 h-[80vh]">
          <Link href="/dashboard/admin" className="flex items-center gap-2">
            <BiArrowBack className="text-primary" />
            <p className="text-primary font-semibold">Back to Dashboard</p>
          </Link>
          <section className="flex gap-8">
            <div className="w-7/12 space-y-8 flex items-center justify-center">
              <img
                className="rounded object-contain"
                src="/images/rocket.png"
                alt=""
              />
            </div>
            <div className="md:w-5/12 w-full space-y-2">
              <h1 className="text-center text-primary font-semibold">
                Create Account
              </h1>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleCreateEmployee}
              >
                <Form className="space-y-3">
                  <Field
                    className="block border-b border-primary bg-transparent px-4 py-2 focus:outline-none w-full"
                    type="text"
                    placeholder="Full Name"
                    name="full_name"
                  />
                  <Field
                    className="block border-b border-primary px-4 py-2 focus:outline-none w-full"
                    type="text"
                    placeholder="Email"
                    name="email"
                  />
                  <Field
                    className="block border-b border-primary px-4 py-2 focus:outline-none w-full"
                    type="text"
                    placeholder="Username"
                    name="username"
                  />
                  <Field
                    className="block border-b border-primary px-4 py-2 focus:outline-none w-full"
                    type="text"
                    placeholder="Password"
                    name="password"
                  />
                  <Field
                    className="block border-b border-primary px-4 py-2 focus:outline-none w-full"
                    type="text"
                    placeholder="Occupation"
                    name="occupation"
                  />
                  <Field
                    className="block border-b border-primary px-4 py-2 focus:outline-none w-full"
                    type="text"
                    placeholder="Role"
                    name="role"
                  />
                  <button className="bg-primary shadow-2xl rounded text-white w-full px-4 py-3">
                    Send
                  </button>
                </Form>
              </Formik>
            </div>
          </section>
        </div>
      </section>
    </ProtectedRoute>
  );
};

export default RegisterUser;
