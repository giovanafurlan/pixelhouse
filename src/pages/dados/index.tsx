"use client";

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Providers } from "@/app/providers";
import BarraNavegacao from "@/components/BarraNavegacao";

export default function Dados() {
  return (
    <Providers>
      <BarraNavegacao usuarioLogado={"sim"}>
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          flexDir={"column"}
        >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
          Atualize seus dados
        </Heading>
          <Stack
            spacing={4}
            w={"full"}
            maxW={"md"}
            rounded={"xl"}
            boxShadow={"lg"}
            px={6}
            pb={6}
            my={12}
          >
            <FormControl id="nome" isRequired>
              <FormLabel>Nome</FormLabel>
              <Input
                placeholder="Nome"
                _placeholder={{ color: "gray.500" }}
                type="text"
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="seu-email@exemplo.com"
                _placeholder={{ color: "gray.500" }}
                type="email"
              />
            </FormControl>
            <FormControl id="senha" isRequired>
              <FormLabel>Senha</FormLabel>
              <Input
                placeholder="senha"
                _placeholder={{ color: "gray.500" }}
                type="password"
              />
            </FormControl>
            <Stack spacing={6} direction={["column", "row"]}>
              <Button
                bg={"red.400"}
                color={"white"}
                w="full"
                _hover={{
                  bg: "red.500",
                }}
              >
                Cancelar
              </Button>
              <Button
                bg={"blue.400"}
                color={"white"}
                w="full"
                _hover={{
                  bg: "blue.500",
                }}
              >
                Atualizar
              </Button>
            </Stack>
          </Stack>
        </Flex>
      </BarraNavegacao>
    </Providers>
  );
}
