import React from "react";

import { getAllSchedules } from "../../api";
import { GetServerSideProps, NextPage } from "next";

import { TableData } from "views/admin/default/variables/columnsData";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { scheduleDataTable } from "views/admin/dataTables/variables/columnsData";

import AdminLayout from "layouts/admin";
import ScheduleTable from "views/admin/dataTables/components/ScheduleTable";

import { Schedule } from "../../views/admin/default/variables/columnsData";

type Props = {
  schedules: Schedule[];
};

const ClientPage: NextPage<Props> = ({ schedules }) => {
  return (
    <AdminLayout>
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <SimpleGrid mb="20px" columns={{ sm: 1, md: 1 }}>
          <ScheduleTable
            columnsData={scheduleDataTable}
            tableData={schedules as unknown as TableData[]}
          />
        </SimpleGrid>
      </Box>
    </AdminLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const schedules = await getAllSchedules();

  return {
    props: {
      schedules: schedules.data.scheduling.map((item: Schedule) => {
        return {
          ...item,
          responsibleName: item.responsible.name,
          clientName: item.client.name,
        };
      }),
    },
  };
};

export default ClientPage;
