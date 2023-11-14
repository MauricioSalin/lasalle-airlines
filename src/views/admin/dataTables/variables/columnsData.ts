interface IColumnHeader {
  Header: string;
  accessor: string;
}

type Columns = IColumnHeader[];

export const columnsDataDevelopment: Columns = [
  {
    Header: "NAME",
    accessor: "name",
  },
  {
    Header: "TECH",
    accessor: "tech",
  },
  {
    Header: "DATE",
    accessor: "date",
  },
  {
    Header: "PROGRESS",
    accessor: "progress",
  },
];

export const columnsDataCheck: Columns = [
  {
    Header: "NAME",
    accessor: "name",
  },
  {
    Header: "PROGRESS",
    accessor: "progress",
  },
  {
    Header: "QUANTITY",
    accessor: "quantity",
  },
  {
    Header: "DATE",
    accessor: "date",
  },
];

export const columnsDataColumns: Columns = [
  {
    Header: "NAME",
    accessor: "name",
  },
  {
    Header: "PROGRESS",
    accessor: "progress",
  },
  {
    Header: "QUANTITY",
    accessor: "quantity",
  },
  {
    Header: "DATE",
    accessor: "date",
  },
];

export const clientDataTable: Columns = [
  {
    Header: "NOME",
    accessor: "name",
  },
  {
    Header: "TELEFONE",
    accessor: "phone",
  },
  {
    Header: "ENDEREÇO",
    accessor: "address",
  },
  {
    Header: "MENSALISTA",
    accessor: "monthlyPayment",
  },
];

export const scheduleDataTable: Columns = [
  {
    Header: "NOME",
    accessor: "clientName",
  },
  {
    Header: "STATUS",
    accessor: "status",
  },
  {
    Header: "DATA",
    accessor: "date",
  },
  {
    Header: "RESPONSÁVEL",
    accessor: "responsibleName",
  },
];

export const monthlyDataTable: Columns = [
  {
    Header: "NOME",
    accessor: "clientName",
  },
  {
    Header: "VENCIMENTO",
    accessor: "dueData",
  },
  {
    Header: "VALOR",
    accessor: "value",
  },
  {
    Header: "PAGAMENTO",
    accessor: "paid",
  },
];

export const responsibleDataTable: Columns = [
  {
    Header: "NOME",
    accessor: "name",
  },
];

export const taskDataTable: Columns = [
  {
    Header: "",
    accessor: "done",
  },
  {
    Header: "DESCRIÇÃO",
    accessor: "description",
  },
  {
    Header: "DATA",
    accessor: "date",
  },
];
