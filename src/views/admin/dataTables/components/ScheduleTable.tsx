import React, { useMemo, useState } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

import {
  updateSchedule,
  insertSchedule,
  deleteSchedule,
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
import ScheduleForm from "./ScheduleForm";

// Assets
import {
  MdCheckCircle,
  MdCancel,
  MdAdd,
  MdEdit,
  MdOutlineError,
} from "react-icons/md";
import { IoMdTrash } from "react-icons/io";

import { TableProps } from "views/admin/default/variables/columnsData";

import { Schedule } from "../../default/variables/columnsData";

type Status = any;

export default function ColumnsTable(props: TableProps) {
  const { columnsData, tableData } = props;

  const columns = useMemo(() => columnsData, [columnsData]);

  const [openForm, setOpenForm] = useState(false);
  const [schedule, setSchedule] = useState<Schedule>({});
  const [data, setData] = useState<Schedule[]>(tableData);

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

  const onClickAdd = () => {
    setSchedule({});
    setOpenForm(true);
  };

  const onClickEdit = (schedule: Schedule) => {
    setSchedule(schedule);
    setOpenForm(true);
  };

  const onClickDelete = async (schedule: Schedule) => {
    setData(data.filter((a) => a._id !== schedule._id));

    await deleteSchedule(schedule._id);
  };

  const onInsertSchedule = async (payload: Schedule) => {
    const res = await insertSchedule(payload);

    setData([...data, res.data]);
    setOpenForm(false);
  };

  const onUpdateSchedule = async (_id: string, payload: Schedule) => {
    const newData = data.map((el) => {
      if (el._id === _id) {
        return { ...el, ...payload };
      }

      return el;
    });

    setData(newData);
    setOpenForm(false);

    await updateSchedule(_id, payload);
  };

  const getStatus: Status = {
    pending: "Pendente",
    return: "Retorno",
    visited: "Visitado",
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
          <ScheduleForm
            onAddClient={onInsertSchedule}
            onUpdateClient={onUpdateSchedule}
            item={schedule}
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
                Lista de agendamentos
              </Text>
              <Button
                alignItems="center"
                justifyContent="center"
                w="37px"
                h="37px"
                lineHeight="100%"
                onClick={() => onClickAdd()}
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

                  return (
                    <Tr {...row.getRowProps()} key={index}>
                      {row.cells.map((cell, index) => {
                        let data;
                        if (cell.column.Header === "STATUS") {
                          data = (
                            <Flex align="center">
                              <Icon
                                w="24px"
                                h="24px"
                                me="5px"
                                color={
                                  cell.value === "visited"
                                    ? "green.500"
                                    : cell.value === "pending"
                                    ? "red.500"
                                    : cell.value === "return"
                                    ? "orange.500"
                                    : null
                                }
                                as={
                                  cell.value === "visited"
                                    ? MdCheckCircle
                                    : cell.value === "pending"
                                    ? MdCancel
                                    : cell.value === "return"
                                    ? MdOutlineError
                                    : null
                                }
                              />
                              <Text
                                color={textColor}
                                fontSize="sm"
                                fontWeight="700"
                              >
                                {getStatus[cell.value]}
                              </Text>
                            </Flex>
                          );
                        } else if (cell.column.Header === "DATA") {
                          const cntDate = new Date(cell.value);
                          const strDate = `${cntDate.getDate() + 1}/${
                            cntDate.getMonth() + 1 > 10
                              ? cntDate.getMonth() + 1
                              : `0${cntDate.getMonth() + 1}`
                          }/${cntDate.getFullYear()}`;

                          data = (
                            <Text
                              color={textColor}
                              fontSize="sm"
                              fontWeight="700"
                            >
                              {strDate}
                            </Text>
                          );
                        } else {
                          data = (
                            <Text
                              color={textColor}
                              fontSize="sm"
                              fontWeight="700"
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
                            onClick={() => onClickEdit(row.original)}
                            borderRadius="10px"
                          >
                            <Icon
                              as={MdEdit}
                              color={iconColor}
                              w="20px"
                              h="20px"
                            />
                          </Button>
                          <Button
                            alignItems="center"
                            justifyContent="center"
                            w="37px"
                            h="37px"
                            lineHeight="100%"
                            onClick={() => onClickDelete(row.original)}
                            borderRadius="10px"
                            style={{ marginLeft: 6 }}
                          >
                            <Icon
                              as={IoMdTrash}
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
