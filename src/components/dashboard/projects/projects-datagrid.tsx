import React from "react";
import dynamic from "next/dynamic";
import { Column, Item, SearchPanel, Toolbar } from "devextreme-react/data-grid";

const DataGrid = dynamic(() => import("devextreme-react/data-grid"), {
  ssr: false,
});

const ProjectsDataGrid = () => {
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
        height={"80vh"}
        className="shadow-xl"
      >
        <Column dataField="project_name" caption="Project Name" width={200} />
        <Column dataField="project_name" caption="Project Name" width={200} />
        <Column dataField="project_name" caption="Project Name" width={200} />
        <Column dataField="project_name" caption="Project Name" width={200} />
        <Column dataField="progress" caption="Progress" width={200} />
        <Column
          dataField="status"
          caption="Action"
          width={140}
          allowFiltering={false}
        />
        {/* <Toolbar>
          <Item location="before">
            <p className="text-xl font-semibold">Recent Projects</p>
          </Item>
        </Toolbar> */}
      </DataGrid>
    </section>
  );
};

export default ProjectsDataGrid;
