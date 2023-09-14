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
      project_name: "Hospital Management System",
      progress: "Inprogres",
    },
    {
      project_name: "Admin Portal",
      progress: "completed",
    },
    {
      project_name: "Admin Portal",
      progress: "On hold",
    },
    {
      project_name: "Admin Portal",
      progress: "Under Review",
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
        <Column dataField="project_name" caption="Employee Name" width={300} />
        <Column dataField="project_name" caption="Email" width={300} />
        <Column dataField="project_name" caption="Role" width={240} />
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
