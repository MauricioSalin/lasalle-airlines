import React from "react";

import { getAllClients } from "../../api";
import { GetServerSideProps, NextPage } from "next";

import { TableData } from "views/admin/default/variables/columnsData";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { clientDataTable } from "views/admin/dataTables/variables/columnsData";

import AdminLayout from "layouts/admin";
import ClientTable from "views/admin/dataTables/components/ClientTable";

type Client = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  type: string;
  flightHours: number;
};

type Props = {
  clients: Client[];
};

export const ClientPage: NextPage<Props> = ({ clients }) => {
  return (
    <AdminLayout>
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <SimpleGrid mb="20px" columns={{ sm: 1, md: 1 }}>
          <ClientTable
            columnsData={clientDataTable}
            tableData={clients as unknown as TableData[]}
          />
        </SimpleGrid>
      </Box>
    </AdminLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  // const clients = await getAllClients();

  return {
    props: {
      clients: [
        {
          id: 1,
          name: "Teste Finger",
          username: "fingertest",
          email: "fingervinic@test.com",
          phone: "5551988888888",
          type: "1",
          flightHours: 350,
        },
        {
          id: 2,
          name: "Teste Thay",
          username: "thaytest",
          email: "thaytest@test.com",
          phone: "5551988888888",
          type: "1",
          flightHours: 450,
        },
        {
          id: 3,
          name: "Teste Mauricio",
          username: "salintest",
          email: "salintest@test.com",
          phone: "5551988888888",
          type: "2",
          flightHours: 550,
          licenseId: "1234125",
        },
      ],
    },
  };
};

export default ClientPage;
