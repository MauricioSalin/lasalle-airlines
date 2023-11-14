import React from "react";

import { getAllResponsibles } from "../../api";
import { GetServerSideProps, NextPage } from "next";

import { TableData } from "views/admin/default/variables/columnsData";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { responsibleDataTable } from "views/admin/dataTables/variables/columnsData";

import AdminLayout from "layouts/admin";
import ResponsibleTable from "views/admin/dataTables/components/ResponsibleTable";

import { Responsible } from "../../views/admin/default/variables/columnsData";

type Props = {
  responsibles: Responsible[];
};

const ClientPage: NextPage<Props> = ({ responsibles }) => {
  return (
    <AdminLayout>
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <SimpleGrid mb="20px" columns={{ sm: 1, md: 3 }}>
          <ResponsibleTable
            columnsData={responsibleDataTable}
            tableData={responsibles as unknown as TableData[]}
          />
        </SimpleGrid>
      </Box>
    </AdminLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  // const responsibles = await getAllResponsibles();

  return {
    props: {
      responsibles: [],
    },
  };
};

export default ClientPage;
