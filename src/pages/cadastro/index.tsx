import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Providers } from "@/app/providers";
import Link from "next/link";
import BarraNavegacao from "@/components/BarraNavegacao";

export default function Cadastro() {
  const [mostrarSenha, setShowSenha] = useState(false);

  return (
    <Providers>
      <BarraNavegacao  usuarioLogado={"nao"}>
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
        >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"} textAlign={"center"}>
                Cadastre-se
              </Heading>
              <Text fontSize={"lg"} color={"gray.600"}>
                Já possui acesso? Faça login{" "}
                <Link style={{ textDecoration: "underline" }} href={"/"}>
                  aqui
                </Link>
              </Text>
            </Stack>
            <Box
              rounded={"lg"}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <HStack>
                  <Box>
                    <FormControl id="nome" isRequired>
                      <FormLabel>Nome</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="sobrenome">
                      <FormLabel>Sobrenome</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl id="email" isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" />
                </FormControl>
                <FormControl id="senha" isRequired>
                  <FormLabel>Senha</FormLabel>
                  <InputGroup>
                    <Input type={mostrarSenha ? "text" : "password"} />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowSenha((mostrarSenha) => !mostrarSenha)
                        }
                      >
                        {mostrarSenha ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                    loadingText="Submitting"
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Cadastrar
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </BarraNavegacao>
    </Providers>
  );
}
