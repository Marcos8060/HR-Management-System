import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { AiOutlinePlus } from "react-icons/ai";
import { CreateEmployee } from "@/redux/services/employee";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FormikValues, FormikHelpers } from "formik";
import { toast } from "react-toastify";


const AddEmployee = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const initialValues = {
    username: "",
    email: "",
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
  });

  //   CREATE EMPLOYEE FUNCTION
  const handleCreateEmployee = async (
    formValue: FormikValues,
    helpers: FormikHelpers<any>
  ) => {
    try {
      await CreateEmployee(formValue).then(() => {
        helpers.resetForm();
        toast.success('Employee created successfully')
      });
    } catch (err) {
      console.log("EMPLOYEE_ERROR ", err);
    }
  };

  return (
    <>
      <button
        onClick={handleClickOpen}
        className="bg-primary rounded flex items-center gap-2 text-white px-3 py-2 text-sm"
      >
        <AiOutlinePlus className="text-xl" />
        Add Employee
      </button>
      <Dialog
        maxWidth="sm"
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Add Employee"}</DialogTitle>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleCreateEmployee}
        >
          <Form>
            <DialogContent>
              <section className="space-y-4">
                <Field
                  className="block border-2 border-primary rounded-3xl px-2 py-3 focus:outline-none w-full"
                  type="text"
                  placeholder="username"
                  name="username"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red text-xs"
                />
                <Field
                  className="block border-2 border-primary rounded-3xl px-2 py-3 focus:outline-none w-full"
                  type="email"
                  placeholder="email"
                  name="email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red text-xs"
                />
                <Field
                  className="block border-2 border-primary rounded-3xl px-2 py-3 focus:outline-none w-full"
                  type="text"
                  placeholder="password"
                  name="password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red text-xs"
                />
                <div className="flex justify-end">
                  <button className="bg-primary px-4 py-2 rounded-xl text-white">
                    Save
                  </button>
                </div>
              </section>
            </DialogContent>
          </Form>
        </Formik>
      </Dialog>
    </>
  );
};

export default AddEmployee;
