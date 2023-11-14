import React from "react";

import { getAllTasks } from "../../api";
import { GetServerSideProps, NextPage } from "next";

import { TableData } from "views/admin/default/variables/columnsData";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { taskDataTable } from "views/admin/dataTables/variables/columnsData";

import AdminLayout from "layouts/admin";
import TaskTable from "views/admin/dataTables/components/TaskTable";

import { Task } from "../../views/admin/default/variables/columnsData";

import MiniCalendar from "components/calendar/MiniCalendar";

type Props = {
  tasks: Task[];
};

const ClientPage: NextPage<Props> = ({ tasks }) => {
  return (
    <AdminLayout>
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
          <TaskTable
            columnsData={taskDataTable}
            tableData={tasks as unknown as TableData[]}
          />
          <MiniCalendar selectRange={false} />
        </SimpleGrid>
      </Box>
    </AdminLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const tasks = await getAllTasks();

  return {
    props: {
      tasks: tasks.data.scheduling,
    },
  };
};

export default ClientPage;
