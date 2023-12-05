// Chakra imports
import { Flex, useColorMode, Text } from "@chakra-ui/react";

// Custom components
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  const { colorMode } = useColorMode();

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      color="white"
      w="full"
    >
      <img style={{ marginLeft: -30 }} src="/img/311603.svg" width={120}></img>

      <HSeparator mt="20px" mb="20px" />
    </Flex>
  );
}

export default SidebarBrand;
