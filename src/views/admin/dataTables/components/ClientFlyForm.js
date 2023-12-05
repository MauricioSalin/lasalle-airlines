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

export default function HookForm({ item, setOpenForm, onAddHours }) {
  const {
    reset,
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      id: "",
      name: "",
      hours: 0,
    },
  });

  const onSubmit = (values) => {
    if (item.hasOwnProperty("instructorId")) {
      return onAddHours({
        instructorId: values.instructorId,
        memberId: values.id,
        hours: values.hours,
      });
    }
  };

  useEffect(() => {
    if (item.hasOwnProperty("name")) {
      reset({
        id: item.id,
        name: item.name,
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
            disabled
            focusBorderColor="brand.400"
            color={"var(--chakra-colors-gray-400)"}
            id="name"
            placeholder="Nome"
            {...register("name", {})}
          />
        </Box>
        <Box p="3">
          <FormLabel htmlFor="instructorId">Instrutor Id</FormLabel>
          <Input
            type="number"
            focusBorderColor="brand.400"
            color={"var(--chakra-colors-gray-400)"}
            id="instructorId"
            placeholder="Instrutor Id"
            {...register("instructorId", {
              required: "This is required",
            })}
          />
        </Box>
        <Box p="3">
          <FormLabel htmlFor="id">Aluno Id</FormLabel>
          <Input
            disabled
            focusBorderColor="brand.400"
            color={"var(--chakra-colors-gray-400)"}
            id="id"
            placeholder="Usuário"
            {...register("id", {})}
          />
        </Box>
        <Box p="3">
          <FormLabel htmlFor="hours">Horas</FormLabel>
          <Input
            type="number"
            focusBorderColor="brand.400"
            color={"var(--chakra-colors-gray-400)"}
            id="hours"
            placeholder="Horas"
            {...register("hours", { required: "This is required" })}
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
