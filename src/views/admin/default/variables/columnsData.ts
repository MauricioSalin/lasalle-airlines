import { Column } from "react-table";

export const columnsDataCheck = [
  {
    Header: "NAME",
    accessor: "name",
  },
  {
    Header: "DATE",
    accessor: "date",
  },
];

export const columnsDataComplex = [
  {
    Header: "NAME",
    accessor: "name",
  },
  {
    Header: "DATE",
    accessor: "date",
  },
];

export type ColumnData = Column[];

export type Client = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  type: string;
  flightHours: number;
};

type Instructor = {
  id: number | string;
  name: string;
  licenceId: string;
  username: string;
  email: string;
  phone: string;
  formationInstitution: string;
};

export type TableData = Client & Instructor;

export type TableProps = {
  columnsData: ColumnData;
  tableData: TableData[];
};
