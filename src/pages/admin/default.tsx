import { Box, Icon, SimpleGrid, useColorModeValue } from "@chakra-ui/react";

// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import { MdAddTask, MdAttachMoney, MdPeopleAlt } from "react-icons/md";
import CheckTable from "views/admin/default/components/CheckTable";
import Tasks from "views/admin/default/components/Tasks";
import TotalSpent from "views/admin/default/components/TotalSpent";
import {
  columnsDataCheck,
  TableData,
} from "views/admin/default/variables/columnsData";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
import AdminLayout from "layouts/admin";

export default function UserReports() {
  // Chakra Color Mode

  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

  return (
    <AdminLayout>
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
            gap="20px"
            mb="20px"
          >
            <MiniStatistics
              startContent={
                <IconBox
                  w="56px"
                  h="56px"
                  bg={boxBg}
                  icon={
                    <Icon
                      w="32px"
                      h="32px"
                      as={MdAttachMoney}
                      color={brandColor}
                    />
                  }
                />
              }
              name="Esperado pro mês"
              value="R$ 9.520"
            />
            <MiniStatistics
              startContent={
                <IconBox
                  w="56px"
                  h="56px"
                  bg="linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)"
                  icon={<Icon w="28px" h="28px" as={MdAddTask} color="white" />}
                />
              }
              name="Tasks"
              value="154"
            />
            <MiniStatistics
              startContent={
                <IconBox
                  w="56px"
                  h="56px"
                  bg={boxBg}
                  icon={
                    <Icon
                      w="32px"
                      h="32px"
                      as={MdPeopleAlt}
                      color={brandColor}
                    />
                  }
                />
              }
              name="Total de clientes"
              value="2935"
            />
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
            <TotalSpent />
            <MiniCalendar h="100%" selectRange={false} />
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
            <Tasks />
            <CheckTable
              columnsData={columnsDataCheck}
              tableData={tableDataCheck as unknown as TableData[]}
            />
            <SimpleGrid
              columns={{ base: 1, md: 2, xl: 2 }}
              gap="20px"
            ></SimpleGrid>
          </SimpleGrid>
        </>
      </Box>
    </AdminLayout>
  );
}
