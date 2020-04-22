import react, { LegacyRef } from "react";

import AddBox from "@material-ui/icons/AddBox";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import { Select } from "@material-ui/core";

export const tableIcons = {
  Add: React.forwardRef((props, ref) => (
    <AddBox style={{ color: "#FFFFFF" }} {...props} ref={LegacyRef} />
  )),
  Check: React.forwardRef((props, ref) => (
    <Check style={{ color: "#FFFFFF" }} {...props} ref={LegacyRef} />
  )),
  Clear: React.forwardRef((props, ref) => (
    <Clear style={{ color: "#FFFFFF" }} {...props} ref={LegacyRef} />
  )),
  Delete: React.forwardRef((props, ref) => (
    <DeleteOutline style={{ color: "#FFFFFF" }} {...props} ref={LegacyRef} />
  )),
  DetailPanel: React.forwardRef((props, ref) => (
    <ChevronRight style={{ color: "#FFFFFF" }} {...props} ref={LegacyRef} />
  )),
  Edit: React.forwardRef((props, ref) => <Edit {...props} ref={LegacyRef} />),
  Export: React.forwardRef((props, ref) => (
    <SaveAlt style={{ color: "#FFFFFF" }} {...props} ref={LegacyRef} />
  )),
  Filter: React.forwardRef((props, ref) => (
    <FilterList style={{ color: "#FFFFFF" }} {...props} ref={LegacyRef} />
  )),
  FirstPage: React.forwardRef((props, ref) => (
    <FirstPage style={{ color: "#FFFFFF" }} {...props} ref={LegacyRef} />
  )),
  LastPage: React.forwardRef((props, ref) => (
    <LastPage style={{ color: "#FFFFFF" }} {...props} ref={LegacyRef} />
  )),
  NextPage: React.forwardRef((props, ref) => (
    <ChevronRight style={{ color: "#FFFFFF" }} {...props} ref={LegacyRef} />
  )),
  PreviousPage: React.forwardRef((props, ref) => (
    <ChevronLeft style={{ color: "#FFFFFF" }} {...props} ref={LegacyRef} />
  )),
  ResetSearch: React.forwardRef((props, ref) => (
    <Clear style={{ color: "#FFFFFF" }} {...props} ref={LegacyRef} />
  )),
  Search: React.forwardRef((props, ref) => (
    <Search style={{ color: "#FFFFFF" }} {...props} ref={LegacyRef} />
  )),
  SortArrow: React.forwardRef((props, ref) => (
    <ArrowDropDown style={{ color: "#FFFFFF" }} {...props} ref={LegacyRef} />
  )),
  ThirdStateCheck: React.forwardRef((props, ref) => (
    <Remove style={{ color: "#FFFFFF" }} {...props} ref={LegacyRef} />
  )),
  ViewColumn: React.forwardRef((props, ref) => (
    <ViewColumn
      style={{ backgroundColor: "#FFFFFF", color: "#FFFFFF" }}
      {...props}
      ref={LegacyRef}
    />
  )),
};
