import React from "react";

import { getAllClients } from "../../api";
import { GetServerSideProps, NextPage } from "next";

import { TableData } from "views/admin/default/variables/columnsData";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { clientDataTable } from "views/admin/dataTables/variables/columnsData";

import AdminLayout from "layouts/admin";
import ClientTable from "views/admin/dataTables/components/ClientTable";

type Client = {
  _id: string;
  name: string;
  status: boolean | number;
  address: string;
  phone: string;
  monthlyPayment: boolean;
};

type Props = {
  clients: Client[];
};

const ClientPage: NextPage<Props> = ({ clients }) => {
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
  const clients = await getAllClients();

  return {
    props: {
      clients: clients.data.client,
    },
  };
};

export default ClientPage;
