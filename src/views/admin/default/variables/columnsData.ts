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
  _id?: string;
  name?: string;
  status?: boolean | number;
  address?: string;
  phone?: string;
  monthlyPayment?: boolean;
};

export type Responsible = {
  _id?: string;
  name?: string;
  status?: boolean;
};

export type Schedule = {
  _id?: string;
  status?: "pending" | "visited" | "return";
  date?: string;
  client?: Client;
  responsible?: Responsible;
};

export type Monthly = {
  _id?: string;
  value?: number;
  paid?: boolean;
  client?: Client;
  paymentAt?: string;
  dueDate?: string;
};

export type Task = {
  _id?: string;
  done?: boolean;
  date?: string;
  description?: string;
};

export type TableData = Client & Schedule & Responsible & Monthly;

export type TableProps = {
  columnsData: ColumnData;
  tableData: TableData[];
};
