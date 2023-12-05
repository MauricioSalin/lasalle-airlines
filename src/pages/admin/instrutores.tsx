import React from "react";

import { getAllInstructors } from "../../api";
import { GetServerSideProps, NextPage } from "next";

import { TableData } from "views/admin/default/variables/columnsData";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { instructorDataTable } from "views/admin/dataTables/variables/columnsData";

import AdminLayout from "layouts/admin";
import InstructorTable from "views/admin/dataTables/components/InstructorTable";

type Instructor = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  type: string;
  flightHours: number;
};

type Props = {
  instructors: Instructor[];
};

export const InstructorPage: NextPage<Props> = ({ instructors }) => {
  return (
    <AdminLayout>
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <SimpleGrid mb="20px" columns={{ sm: 1, md: 1 }}>
          <InstructorTable
            columnsData={instructorDataTable}
            tableData={instructors as unknown as TableData[]}
          />
        </SimpleGrid>
      </Box>
    </AdminLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  // const instructors = await getAllInstructors();

  return {
    props: {
      instructors: [
        {
          id: 1,
          name: "Vinicius Finger",
          licenceId: "6969696969",
          username: "fingertest",
          email: "fingervinic@test.com",
          phone: "555198888888",
          formationInstitution: "Harvard pilot school",
        },
        {
          id: 2,
          name: "Vinicius Finger",
          licenceId: "6969696969",
          username: "fingertest",
          email: "fingervinic@test.com",
          phone: "555198888888",
          formationInstitution: "Harvard pilot school",
        },
        {
          id: 3,
          name: "Vinicius Finger",
          licenceId: "6969696969",
          username: "fingertest",
          email: "fingervinic@test.com",
          phone: "555198888888",
          formationInstitution: "Harvard pilot school",
        },
      ],
    },
  };
};

export default InstructorPage;
