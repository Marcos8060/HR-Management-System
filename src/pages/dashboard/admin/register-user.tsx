import React, { useEffect } from "react";
import ProtectedRoute from "@/assets/utils/hoc/protected-route";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FormikValues, FormikHelpers } from "formik";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";
import { registerUser } from "@/redux/services/auth";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { getAllRoles } from "@/redux/features/auth";
import { useAuth } from "@/assets/hooks/use-auth";


type Roles = {
  id: number;
  name: string;
}

type Dispatch = {
  dispatch : React.ReactNode
}


const RegisterUser = () => {
  const { roles } = useSelector(({ auth }: { auth: { roles: Roles[] } }) => auth);
  const dispatch = useDispatch();

  console.log("ALL_ROLES ", roles);

  const initialValues = {
    full_name: "",
    username: "",
    email: "",
    password: "",
    role: "",
    occupation: "",
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
    role: Yup.string().required("This field is required!"),
    occupation: Yup.string().required("This field is required!"),
  });

  //   CREATE EMPLOYEE FUNCTION
  const handlerRegister = async (
    formValue: FormikValues,
    helpers: FormikHelpers<any>
  ) => {
    try {
      await registerUser(formValue).then(() => {
        helpers.resetForm();
        toast.success("Registration successful");
      });
    } catch (err) {
      console.log("REGISTRATION_ERROR ", err);
    }
  };

  const fetchRoles = async () => {
    try {
      await dispatch(getAllRoles());
    } catch (error) {}
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  return (
    // <ProtectedRoute permission="CAN_REGISTER_USERS">
    <div className="rounded w-full mx-auto sm:px-12 px-4 py-4 h-[100vh] flex items-center justify-center relative">
      <section className="w-full">
        <Link
          href="/dashboard/admin"
          className="flex items-center gap-2 absolute left-12 top-12"
        >
          <BiArrowBack className="text-primary" />
          <p className="text-primary font-semibold">Back to Dashboard</p>
        </Link>
        <section className="flex gap-8">
          <div className="md:block hidden w-5/12 space-y-8 flex items-center justify-center">
            <img
              className="rounded object-contain"
              src="/images/rocket.png"
              alt=""
            />
          </div>
          <div className="md:w-7/12 w-full space-y-4">
            <h1 className="text-center mb-2 text-primary font-semibold">
              Create User Account
            </h1>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handlerRegister}
            >
              <Form className="space-y-4">
                <section className="md:flex gap-4 items-center">
                  <div className="space-y-4 md:w-1/2 w-full">
                    <Field
                      className="block border rounded border-primary bg-transparent px-4 py-3 focus:outline-none w-full"
                      type="text"
                      placeholder="Full Name"
                      name="full_name"
                    />
                    <ErrorMessage
                      name="full_name"
                      component="div"
                      className="text-red text-xs"
                    />
                    <Field
                      className="block border rounded border-primary px-4 py-3 focus:outline-none w-full"
                      type="text"
                      placeholder="Email"
                      name="email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red text-xs"
                    />
                    <Field
                      className="block border rounded border-primary px-4 py-3 focus:outline-none w-full"
                      type="text"
                      placeholder="Username"
                      name="username"
                    />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="text-red text-xs"
                    />
                  </div>
                  <div className="space-y-4 md:w-1/2 w-full">
                    <Field
                      className="block border rounded border-primary px-4 py-3 focus:outline-none w-full"
                      type="text"
                      placeholder="Occupation"
                      name="occupation"
                    />
                    <ErrorMessage
                      name="occupation"
                      component="div"
                      className="text-red text-xs"
                    />
                    <Field
                      as="select"
                      className="block border cursor-pointer rounded border-primary px-4 py-3 appearance-none focus:outline-none w-full"
                      placeholder="Role"
                      name="role"
                    >
                      <option value="" disabled selected>
                        Select a role
                      </option>
                      {roles.map((role, index) => (
                        <option key={index} value="role1">{role.name}</option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="role"
                      component="div"
                      className="text-red text-xs"
                    />
                    <Field
                      className="block border rounded
                         border-primary px-4 py-3 focus:outline-none w-full"
                      type="text"
                      placeholder="Password"
                      name="password"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red text-xs"
                    />
                  </div>
                </section>
                <button className="bg-primary shadow-2xl rounded text-white w-full px-4 py-3">
                  Send
                </button>
              </Form>
            </Formik>
          </div>
        </section>
      </section>
    </div>
    // </ProtectedRoute>
  );
};

export default RegisterUser;
