import React from 'react'
import dynamic from "next/dynamic";
import { Column, Item, SearchPanel, Toolbar } from "devextreme-react/data-grid";

const DataGrid = dynamic(() => import("devextreme-react/data-grid"), {
    ssr: false,
  });

const Clients = () => {


    const users = [
        {
          name: "Marcos Ochieng",
          email: "marcos@gmail.com",
          status:'Active'
        },
        {
          name: "Derrick Ochieng",
          email: "marcos@gmail.com",
          status:'Active'
        },
        {
          name: "Jane Ochieng",
          email: "marcos@gmail.com",
          status:'Active'
        },
        {
          name: "Ann Ochieng",
          email: "marcos@gmail.com",
          status:'Active'
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
        height={"60vh"}
        className="shadow-xl"
      >
        <Column dataField="name" caption="Name" />
        <Column dataField="email" caption="Email" />
        <Column
          dataField="status"
          caption="Status"
          width={200}
          allowFiltering={false}
        />
        <Column
          dataField="status"
          caption="Action"
          width={200}
          allowFiltering={false}
        />
      </DataGrid>
    </section>
  )
}

export default Clients