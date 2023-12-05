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
    Header: "USUÁRIO",
    accessor: "username",
  },
  {
    Header: "TELEFONE",
    accessor: "phone",
  },
  {
    Header: "HORAS",
    accessor: "flightHours",
  },
  {
    Header: "PILOTO",
    accessor: "type",
  },
  {
    Header: "Licença",
    accessor: "licenseId",
  },
];

export const instructorDataTable: Columns = [
  {
    Header: "NOME",
    accessor: "name",
  },
  {
    Header: "TELEFONE",
    accessor: "phone",
  },
  {
    Header: "E-MAIL",
    accessor: "email",
  },
  {
    Header: "Formação",
    accessor: "formationInstitution",
  },
  {
    Header: "Licença",
    accessor: "licenceId",
  },
];
