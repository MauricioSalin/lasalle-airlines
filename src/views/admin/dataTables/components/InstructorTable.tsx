import React, { useMemo, useState } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

import {
  updateInstructor,
  insertInstructor,
  deleteInstructor,
  emitLicense,
  insertHours,
} from "../../../../api";

import {
  Flex,
  Table,
  Icon,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";

// Custom components
import Card from "components/card/Card";
import InstructorForm from "./InstructorForm";

// Assets
import {
  MdCheckCircle,
  MdCancel,
  MdAdd,
  MdEdit,
  MdAlarmAdd,
  MdKey,
} from "react-icons/md";

import { TableProps } from "views/admin/default/variables/columnsData";

type Instructor = {
  id: number | string;
  name: string;
  licenceId: string;
  username: string;
  email: string;
  phone: string;
  formationInstitution: string;
};

export default function ColumnsTable(props: TableProps) {
  const { columnsData, tableData } = props;

  const columns = useMemo(() => columnsData, [columnsData]);

  const [openForm, setOpenForm] = useState(false);
  const [instructor, setInstructor] = useState<Instructor>({} as Instructor);
  const [data, setData] = useState<Instructor[]>(tableData);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;
  initialState.pageSize = 5;

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
  const iconColor = useColorModeValue("brand.500", "white");

  const onClickAddInstructor = () => {
    setInstructor({} as Instructor);
    setOpenForm(true);
  };

  const onClickEdit = (instructor: Instructor) => {
    setInstructor(instructor);
    setOpenForm(true);
  };

  const onClickDelete = async (instructor: Instructor) => {
    setData(data.filter((a) => a.id !== instructor.id));

    await deleteInstructor(instructor.id);
  };

  const onInsertInstructor = async (payload: Instructor) => {
    const res = await insertInstructor(payload);

    setData([...data, res.data]);
    setOpenForm(false);
  };

  const onUpdateInstructor = async (id: string, payload: Instructor) => {
    const newData = data.map((el) => {
      if (el.id == id) {
        return { ...el, ...payload };
      }

      return el;
    });

    setData(newData);
    setOpenForm(false);

    await updateInstructor(payload);
  };

  return (
    <>
      <Card
        flexDirection="column"
        w="100%"
        px="0px"
        overflowX={{ sm: "scroll", lg: "hidden" }}
      >
        {openForm ? (
          <InstructorForm
            item={instructor}
            onAddInstructor={onInsertInstructor}
            onUpdateInstructor={onUpdateInstructor}
            onClickDelete={onClickDelete}
            setOpenForm={setOpenForm}
          />
        ) : (
          <>
            <Flex px="25px" justify="space-between" mb="20px" align="center">
              <Text
                color={textColor}
                fontSize="22px"
                fontWeight="700"
                lineHeight="100%"
              >
                Lista de instrutores
              </Text>
              <Button
                alignItems="center"
                justifyContent="center"
                w="37px"
                h="37px"
                lineHeight="100%"
                onClick={() => onClickAddInstructor()}
                borderRadius="10px"
              >
                <Icon as={MdAdd} color={iconColor} w="20px" h="20px" />
              </Button>
            </Flex>
            <Table
              {...getTableProps()}
              variant="simple"
              color="gray.500"
              mb="24px"
            >
              <Thead>
                {headerGroups.map((headerGroup, index) => (
                  <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
                    {headerGroup.headers.map((column, index) => (
                      <Th
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                        pe="10px"
                        key={index}
                        borderColor={borderColor}
                      >
                        <Flex
                          justify="space-between"
                          align="center"
                          fontSize={{ sm: "10px", lg: "12px" }}
                          color="gray.400"
                        >
                          {column.render("Header")}
                        </Flex>
                      </Th>
                    ))}
                  </Tr>
                ))}
              </Thead>
              <Tbody {...getTableBodyProps()}>
                {page.map((row, index) => {
                  prepareRow(row);

                  const item = row.original as Instructor;

                  return (
                    <Tr {...row.getRowProps()} key={index}>
                      {row.cells.map((cell, index) => {
                        let data;
                        if (cell.column.Header === "PILOTO") {
                          data = (
                            <Flex align="center" paddingLeft="10px">
                              <Icon
                                w="24px"
                                h="24px"
                                color={
                                  cell.value === "2" ? "green.500" : "red.500"
                                }
                                as={cell.value ? MdCheckCircle : MdCancel}
                              />
                            </Flex>
                          );
                        } else {
                          data = (
                            <Text
                              color={textColor}
                              fontSize="sm"
                              fontWeight="700"
                              paddingLeft="2px"
                            >
                              {cell.value}
                            </Text>
                          );
                        }
                        return (
                          <Td
                            {...cell.getCellProps()}
                            key={index}
                            fontSize={{ sm: "14px" }}
                            minW={{ sm: "150px", md: "200px", lg: "auto" }}
                            borderColor="transparent"
                            justifyContent="center"
                          >
                            {data}
                          </Td>
                        );
                      })}

                      <Td fontSize={{ sm: "14px" }} borderColor="transparent">
                        <Flex justifyContent="flex-end">
                          <Button
                            alignItems="center"
                            justifyContent="center"
                            w="37px"
                            h="37px"
                            lineHeight="100%"
                            onClick={() =>
                              onClickEdit(row.original as Instructor)
                            }
                            borderRadius="10px"
                          >
                            <Icon
                              as={MdEdit}
                              color={iconColor}
                              w="20px"
                              h="20px"
                            />
                          </Button>
                        </Flex>
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </>
        )}
      </Card>
    </>
  );
}
