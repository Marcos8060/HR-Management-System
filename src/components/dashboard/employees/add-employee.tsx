import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import { AiOutlinePlus } from "react-icons/ai";

const AddEmployee = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        <form>
          <DialogContent>
            <section className="space-y-4">
              <input
                className="block border-2 border-primary rounded-3xl px-2 py-3 focus:outline-none w-full"
                type="text"
                placeholder="Username"
              />
              <input
                className="block border-2 border-primary rounded-3xl px-2 py-3 focus:outline-none w-full"
                type="text"
                placeholder="Email"
              />
              <input
                className="block border-2 border-primary rounded-3xl px-2 py-3 focus:outline-none w-full"
                type="text"
                placeholder="Password"
              />
              <div className="flex justify-end">
                <button className="bg-primary px-4 py-2 rounded-xl text-white">
                  Save
                </button>
              </div>
            </section>
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
};

export default AddEmployee;
