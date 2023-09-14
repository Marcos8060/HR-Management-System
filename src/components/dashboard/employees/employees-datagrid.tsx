import React from "react";
import dynamic from "next/dynamic";
import { Column, Item, SearchPanel, Toolbar } from "devextreme-react/data-grid";
import AddEmployee from "./add-employee";

const DataGrid = dynamic(() => import("devextreme-react/data-grid"), {
  ssr: false,
});

const EmployeesDataGrid = () => {
  const users = [
    {
      employee_name: "Marcos Ochieng",
      email: "marcosgav80@gmail.com",
      role: "Front End Developer",
    },
    {
      employee_name: "Marcos Ochieng",
      email: "marcosgav80@gmail.com",
      role: "Back End Developer",
    },
    {
      employee_name: "Marcos Ochieng",
      email: "marcosgav80@gmail.com",
      role: "Devops Engineer",
    },
  ];
  return (
    <section>
      <DataGrid
        dataSource={users}
        allowColumnReordering={true}
        rowAlternationEnabled={true}
        showBorders={true}
        remoteOperations={true}
        showColumnLines={true}
        showRowLines={true}
        wordWrapEnabled={true}
        height={"70vh"}
        className="shadow-2xl w-full"
      >
        <Column dataField="employee_name" caption="Employee Name" width={300} />
        <Column dataField="email" caption="Email" width={300} />
        <Column dataField="role" caption="Role" width={240} />
        <Column
          dataField="status"
          caption="Action"
          width={100}
          allowFiltering={false}
        />
        <Toolbar>
          <Item location="after">
            <AddEmployee />
          </Item>
        </Toolbar>
      </DataGrid>
    </section>
  );
};

export default EmployeesDataGrid;
