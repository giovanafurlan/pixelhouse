"use client";

import BarraNavegacao from "@/components/BarraNavegacao";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Login() {
  return (
    <BarraNavegacao usuarioLogado={"nao"}>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Acesse sua conta</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              ou faça seu cadastro{" "}
              <Link href={"/cadastro"} style={{ textDecoration: "underline" }}>
                aqui
              </Link>{" "}
              ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="senha">
                <FormLabel>Senha</FormLabel>
                <Input type="senha" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Lembre-se de mim</Checkbox>
                  <Text color={"blue.400"}>Esqueceu a senha?</Text>
                </Stack>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Entrar
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </BarraNavegacao>
  );
}
