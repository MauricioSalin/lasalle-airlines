// Chakra imports
import { Flex, useColorMode } from "@chakra-ui/react";

// Custom components
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  const { colorMode } = useColorMode();

  return (
    <Flex alignItems="center" justifyContent="center" flexDirection="column">
      {/* <img
        style={{ marginTop: -50, marginBottom: -25, marginLeft: -15 }}
        src={
          colorMode === "light"
            ? "/img/tuareg-logo-white.png"
            : "/img/tuareg-logo.png"
        }
        width={colorMode === "light" ? 205 : 175}
      ></img> */}
      <HSeparator mt="20px" mb="20px" />
    </Flex>
  );
}

export default SidebarBrand;
