import react from "react";
import MaterialTable, { Icons } from "material-table";
import { tableIcons } from "./icons";

export default function Table({ options, columns, data, ...props }) {
  return (
    <MaterialTable
      {...props}
      columns={columns}
      data={data}
      icons={tableIcons}
      options={{
        draggable: true,
        emptyRowsWhenPaging: false,
        sorting: true,
        emptyDataSourceMessage: "nothing found",
        ...options,
      }}
      // localization={{
      //   body: {
      //     : "no_records",
      //   },
      //   toolbar: {
      //     searchTooltip: "search",
      //     searchPlaceholder: "search",
      //   },
      //   header: {
      //     actions: "actions",
      //   },
      // }}
    />
  );
}
