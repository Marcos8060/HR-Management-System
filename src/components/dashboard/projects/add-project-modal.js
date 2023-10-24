import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { MdAdd } from "react-icons/md";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Grid } from "@mui/material";
import { getAllClients } from "@/redux/features/clients";
import { useSelector,useDispatch } from "react-redux";

export default function AddProjectModal() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { clients } = useSelector((store) => store.client)


  const priority = ["High", "Medium", "Low"];
  
  useEffect(() => {
    dispatch(getAllClients());
  },[])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const initialValues = {
    project_name: "",
    start_date: "",
    end_date: "",
    project_leader: "",
    client: "",
    priority: "",
    description: "",
    team_members: "",
  };

  const validationSchema = Yup.object().shape({
    project_name: Yup.string().required("Project Name is required!"),
    start_date: Yup.string().required("Start Date is required!"),
    end_date: Yup.string().required("Date is required!"),
    project_leader: Yup.string().required("Project Leader is required!"),
    client: Yup.string().required("Select a client!"),
    priority: Yup.string().required("Select a priority!"),
    team_members: Yup.string().required("Provide team members!"),
    description: Yup.string(),
  });

  const handleAddProject = async (formValue, helpers) => {
    console.log(formValue);
    try {
      const formData = {
        ...formValue,
        service: parseInt(formValue.service),
      };
      setLoading(true);
      await bookAppointment(formData).then(() => {
        helpers.resetForm();
        toast.success("Appointment Booked Successfully!");
        setLoading(false);
        router.push("/");
      });
    } catch (err) {
      toast.error(err);
      console.log("APPOINTMENT_ERROR ", err);
    }
  };

  return (
    <div>
      <button
        className="bg-cardSecondary px-4 py-3 text-white text-sm flex items-center gap-2 mb-1"
        onClick={handleClickOpen}
      >
        <MdAdd className="text-xl" />
        Add Project
      </button>
      <Dialog
        open={open}
        maxWidth="lg"
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleAddProject}
          >
            <Form>
              <Grid container spacing={2}>
                <Grid item md={6} xs={12}>
                  <section className="space-y-4">
                    <div>
                      <Field
                        className="block border rounded border-gray py-3 px-4 focus:outline-none w-full"
                        type="text"
                        placeholder="Project Name"
                        name="project_name"
                      />
                      <ErrorMessage
                        name="project_name"
                        component="div"
                        className="text-warning text-xs"
                      />
                    </div>
                    <div>
                      <Field
                        className="block border rounded border-gray py-3 px-4 focus:outline-none w-full"
                        type="text"
                        placeholder="Start Date"
                        name="start_date"
                      />
                      <ErrorMessage
                        name="start_date"
                        component="div"
                        className="text-warning text-xs"
                      />
                    </div>
                    <div>
                      <Field
                        className="block border rounded border-gray py-3 px-4 focus:outline-none w-full"
                        type="text"
                        placeholder="Project Leader"
                        name="project_leader"
                      />
                      <ErrorMessage
                        name="project_leader"
                        component="div"
                        className="text-warning text-xs"
                      />
                    </div>
                  </section>
                </Grid>
                <Grid item md={6} xs={12}>
                  <section className="space-y-4">
                    <div>
                      <Field
                        as="select"
                        className="block border rounded border-gray py-3 px-4 focus:outline-none w-full"
                        type="text"
                        placeholder="Client"
                        name="client"
                      >
                        <option value="">Select Client</option>
                        {clients.map((client) => (
                          <option key={client.id} value={client.id}>
                            {client.name}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage
                        name="client"
                        component="div"
                        className="text-warning text-xs"
                      />
                    </div>
                    <div>
                      <Field
                        className="block border rounded border-gray py-3 px-4 focus:outline-none w-full"
                        type="text"
                        placeholder="End Date"
                        name="end_date"
                      />
                      <ErrorMessage
                        name="end_date"
                        component="div"
                        className="text-warning text-xs"
                      />
                    </div>
                    <div>
                      <Field
                        as="select"
                        className="block border rounded border-gray py-3 px-4 focus:outline-none w-full"
                        type="text"
                        placeholder="Priority"
                        name="priority"
                      >
                        <option value="">Select Priority</option>
                        {priority.map((item,index) => (
                          <option key={index} value={index}>
                            {item}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage
                        name="priority"
                        component="div"
                        className="text-warning text-xs"
                      />
                    </div>
                  </section>
                </Grid>
              </Grid>
              <div className="mt-3">
                <Field
                  as="textarea"
                  className="block border rounded border-gray py-3 px-4 focus:outline-none w-full"
                  type="text"
                  placeholder="Description"
                  name="description"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-warning text-xs"
                />
              </div>
              <div className="flex items-center justify-end">
                <button className="bg-primary rounded text-white px-4 py-3 text-sm my-2">
                  Submit
                </button>
              </div>
            </Form>
          </Formik>
        </DialogContent>
      </Dialog>
    </div>
  );
}
