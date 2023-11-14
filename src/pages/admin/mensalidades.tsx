import React from "react";

import { getAllMonthly } from "../../api";
import { GetServerSideProps, NextPage } from "next";

import { TableData } from "views/admin/default/variables/columnsData";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { monthlyDataTable } from "views/admin/dataTables/variables/columnsData";

import AdminLayout from "layouts/admin";
import MonthlyTable from "views/admin/dataTables/components/MonthlyTable";

import { Monthly } from "../../views/admin/default/variables/columnsData";

type Props = {
  monthly: Monthly[];
};

const ClientPage: NextPage<Props> = ({ monthly }) => {
  return (
    <AdminLayout>
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <SimpleGrid mb="20px" columns={{ sm: 1, md: 1 }}>
          <MonthlyTable
            columnsData={monthlyDataTable}
            tableData={monthly as unknown as TableData[]}
          />
        </SimpleGrid>
      </Box>
    </AdminLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const monthlys = await getAllMonthly();

  return {
    props: {
      monthly: monthlys.data.payments.map((item: Monthly) => {
        return {
          ...item,
          clientName: item.client.name,
        };
      }),
    },
  };
};

export default ClientPage;
