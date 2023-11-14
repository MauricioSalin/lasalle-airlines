import React from "react";

import { useForm } from "react-hook-form";
import { useEffect } from "react";

import {
  Box,
  Input,
  Button,
  FormLabel,
  Switch,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";

export default function HookForm({
  item,
  onAddClient,
  onUpdateClient,
  setOpenForm,
}) {
  const {
    reset,
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      monthlyPayment: false,
    },
  });

  const onSubmit = (values) => {
    if (item.hasOwnProperty("name")) {
      return onUpdateClient(item._id, values);
    }

    return onAddClient(values);
  };

  useEffect(() => {
    if (item.hasOwnProperty("name")) {
      reset({
        name: item.name,
        phone: item.phone,
        address: item.address,
        monthlyPayment: item.monthlyPayment,
      });
    }
  }, [reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ padding: "0 15px 0 15px" }}
    >
      <FormControl isInvalid={errors.name}>
        <Box p="3">
          <FormLabel htmlFor="name">Nome</FormLabel>
          <Input
            focusBorderColor="brand.400"
            color={"var(--chakra-colors-gray-400)"}
            id="name"
            placeholder="Nome"
            {...register("name", {
              required: "This is required",
              minLength: { value: 4, message: "Minimum length should be 4" },
            })}
          />
        </Box>

        <Box p="3">
          <FormLabel htmlFor="date">Telefone</FormLabel>
          <Input
            focusBorderColor="brand.400"
            id="name"
            color={"var(--chakra-colors-gray-400)"}
            placeholder="Telefone"
            {...register("phone", {
              required: "This is required",
              minLength: { value: 4, message: "Minimum length should be 4" },
            })}
          />
        </Box>

        <Box p="3">
          <FormLabel htmlFor="totalPrice">Endereço</FormLabel>
          <Input
            focusBorderColor="brand.400"
            id="address"
            placeholder="Endereço"
            color={"var(--chakra-colors-gray-400)"}
            {...register("address", {
              required: "This is required",
              minLength: { value: 4, message: "Minimum length should be 4" },
            })}
          />
        </Box>

        <Box p="3">
          <FormLabel htmlFor="totalPrice">Mensalista</FormLabel>
          <Switch
            colorScheme="brand"
            id="monthlyPayment"
            {...register("monthlyPayment")}
          />
        </Box>

        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>

      <Box p="3">
        <Button mt={1} pl={6} pr={6} isLoading={isSubmitting} type="submit">
          {item.hasOwnProperty("name") ? "Atualizar" : "Adicionar"}
        </Button>

        <Button
          colorScheme="gray"
          mt={1}
          pl={6}
          pr={6}
          marginLeft={3}
          onClick={() => setOpenForm(false)}
        >
          Voltar
        </Button>
      </Box>
    </form>
  );
}
