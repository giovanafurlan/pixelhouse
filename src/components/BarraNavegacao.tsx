"use client";

import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { Providers } from "@/app/providers";

export default function BarraNavegacao({ usuarioLogado, children }: any) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Providers>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>Pixel House</Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Box display={usuarioLogado != "sim" ? "none" : "block"}>
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Avatar
                      size={"sm"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </MenuButton>
                  <MenuList alignItems={"center"}>
                    <br />
                    <Center>
                      <Avatar
                        size={"2xl"}
                        src={
                          "https://avatars.dicebear.com/api/male/username.svg"
                        }
                      />
                    </Center>
                    <br />
                    <Center>
                      <p>Nome</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem>
                      <Link href={"/dados"}>Atualizar dados</Link>
                    </MenuItem>
                    <MenuItem>Sair</MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </Stack>
          </Flex>
        </Flex>
        <Box p={4}>{children}</Box>
      </Box>
    </Providers>
  );
}
