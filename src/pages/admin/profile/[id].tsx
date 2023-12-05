// Chakra imports
import { Box, Flex } from "@chakra-ui/react";
import AdminLayout from "layouts/admin";

// Custom components
import Banner from "views/admin/profile/components/Banner";

// Assets
import banner from "img/auth/banner.png";
import avatar from "img/avatars/avatar4.png";

import { useRouter } from "next/router";
import { GetServerSideProps, NextPage } from "next";

type Client = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  type: string;
  flightHours: number;
  licenseId?: number;
};

type Props = {
  client: Client;
};

export const ClientProfile: NextPage<Props> = ({ client }) => {
  const router = useRouter();
  const { id } = router.query;

  console.log(id);

  const { name, licenseId, type, flightHours } = client;

  return (
    <AdminLayout title="Perfil">
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <Flex width="60%">
          <Banner
            gridArea="1 / 1 / 2 / 2"
            banner={banner}
            avatar={avatar}
            name={name}
            job={type == "1" ? "Aluno" : "Piloto"}
            posts="10"
            followers={flightHours.toString()}
            following={licenseId ? licenseId : "N"}
          />
        </Flex>
      </Box>
    </AdminLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const client: Client = {
    id: 1,
    name: "Teste Finger",
    username: "fingertest",
    email: "fingervinic@test.com",
    phone: "5551988888888",
    type: "1",
    flightHours: 350,
  };

  return {
    props: {
      client,
    },
  };
};

export default ClientProfile;
