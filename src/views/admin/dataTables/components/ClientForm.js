import React from "react";

import { useForm } from "react-hook-form";
import { useEffect } from "react";

import {
  Box,
  Input,
  Button,
  FormLabel,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";

export default function HookForm({
  item,
  onAddClient,
  onUpdateClient,
  onClickDelete,
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
      username: "",
      email: "",
      phone: "",
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
        username: item.username,
        phone: item.phone,
        email: item.email,
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
          <FormLabel htmlFor="name">Usuário</FormLabel>
          <Input
            focusBorderColor="brand.400"
            color={"var(--chakra-colors-gray-400)"}
            id="username"
            placeholder="Usuário"
            {...register("username", {
              required: "This is required",
              minLength: { value: 4, message: "Minimum length should be 4" },
            })}
          />
        </Box>
        <Box p="3">
          <FormLabel htmlFor="totalPrice">E-mail</FormLabel>
          <Input
            focusBorderColor="brand.400"
            id="email"
            placeholder="E-mail"
            color={"var(--chakra-colors-gray-400)"}
            {...register("email", {
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
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>

      <Box p="3">
        <Button
          mt={1}
          pl={6}
          pr={6}
          isLoading={isSubmitting}
          type="submit"
          mr={3}
        >
          {item.hasOwnProperty("name") ? "Atualizar" : "Adicionar"}
        </Button>

        <Button mt={1} pl={6} pr={6} onClick={() => onClickDelete(item)}>
          Deletar
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
