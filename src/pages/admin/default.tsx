import {
  Box,
  Icon,
  SimpleGrid,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";

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
        <Flex grow={1} pl="12px" gridGap="20px" wrap="wrap">
          <MiniStatistics
            startContent={
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={
                  <Icon w="32px" h="32px" as={MdPeopleAlt} color={brandColor} />
                }
              />
            }
            name="Total de alunos"
            value="2935"
          />

          <MiniStatistics
            startContent={
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={
                  <Icon w="32px" h="32px" as={MdPeopleAlt} color={brandColor} />
                }
              />
            }
            name="Total de instrutores"
            value="2935"
          />

          <MiniStatistics
            startContent={
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={
                  <Icon w="32px" h="32px" as={MdPeopleAlt} color={brandColor} />
                }
              />
            }
            name="Horas de vôo"
            value="2935"
          />
        </Flex>
      </Box>
    </AdminLayout>
  );
}
