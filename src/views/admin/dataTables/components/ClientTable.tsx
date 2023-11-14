import React, { useMemo, useState } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

import { updateClient, insertClient, deleteClient } from "../../../../api";

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
import ClientForm from "./ClientForm";

// Assets
import { MdCheckCircle, MdCancel, MdAdd, MdEdit } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";

import { TableProps } from "views/admin/default/variables/columnsData";

type Client = {
  _id?: string;
  name?: string;
  status?: boolean | number;
  address?: string;
  phone?: string;
  monthlyPayment?: boolean;
};

export default function ColumnsTable(props: TableProps) {
  const { columnsData, tableData } = props;

  const columns = useMemo(() => columnsData, [columnsData]);

  const [openForm, setOpenForm] = useState(false);
  const [client, setClient] = useState<Client>({});
  const [data, setData] = useState<Client[]>(tableData);

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

  const onClickAddClient = () => {
    setClient({});
    setOpenForm(true);
  };

  const onClickEdit = (client: Client) => {
    setClient(client);
    setOpenForm(true);
  };

  const onClickDelete = async (client: Client) => {
    setData(data.filter((a) => a._id !== client._id));

    await deleteClient(client._id);
  };

  const onInsertClient = async (payload: Client) => {
    const res = await insertClient(payload);

    setData([...data, res.data]);
    setOpenForm(false);
  };

  const onUpdateClient = async (_id: string, payload: Client) => {
    const newData = data.map((el) => {
      if (el._id === _id) {
        return { ...el, ...payload };
      }

      return el;
    });

    setData(newData);
    setOpenForm(false);

    await updateClient(_id, payload);
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
          <ClientForm
            onAddClient={onInsertClient}
            onUpdateClient={onUpdateClient}
            item={client}
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
                Lista de clientes
              </Text>
              <Button
                alignItems="center"
                justifyContent="center"
                w="37px"
                h="37px"
                lineHeight="100%"
                onClick={() => onClickAddClient()}
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
                        if (cell.column.Header === "MENSALISTA") {
                          data = (
                            <Flex align="center" paddingLeft={8}>
                              <Icon
                                w="24px"
                                h="24px"
                                me="5px"
                                color={cell.value ? "green.500" : "red.500"}
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
