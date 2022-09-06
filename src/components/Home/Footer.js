import { Box, Stack, Heading, Image, Badge } from "@chakra-ui/react";
import React, { Component } from "react";
import backgound from "./../../card-background.svg";
import "./../../styles.css";
class Body extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${backgound})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom"
        }}
      >
        <Heading
          as="h1"
          color="primary.900"
          fontSize="4xl"
          opacity="0.8"
          textAlign="center"
          mb={8}
        >
          <Badge
            bgColor="#008B8B
          "
            p="4"
            rounded="2rem"
            fontSize={["md", "2xl", "4xl"]}
          >
            Features You Would Love
          </Badge>
        </Heading>

        <Stack
          direction={["column", "column", "row"]}
          alignItems={["center", "center", "center"]}
          spacing="20px"
          align="center"
          justify={{ base: "center", base: "center", base: "center" }}
          p="2"
        >
          <Box
            className="prat"
            rounded="1rem"
            shadow="2xl"
            p="2"
            w="350px"
            backgroundImage="linear-gradient(
              180deg
              , #01044C 0%, #571B1B 72.43%)"
            height="80"
            textColor="white"
            textAlign="left"
            spacing="2"
          >
            <Image
              ml="2"
              mt="2"
              src="https://img.icons8.com/cute-clipart/64/000000/lock.png"
            />
            <br />
            <h1>
              <b>Non-Custodial Wallet</b>
            </h1>
            <br />
            <h1>
              Blockchain wallet that lets you have full control
              <br /> of your funds with your private keys. No central bodies
              have access to your keys, passwords and digital assets. Users will
              have total anonymity as there is no KYC process for the wallet.
            </h1>
          </Box>

          <Box
            rounded="1rem"
            p="2"
            textColor="white"
            shadow="2xl"
            w="350px"
            height="80"
            textAlign="left"
            backgroundImage="linear-gradient(
              180deg
              , #271571 0%, #2C142A 100%)"
          >
            <Image
              ml="2"
              mt="2"
              src="https://img.icons8.com/carbon-copy/64/fa314a/graph-report.png"
            />
            <br />

            <h1>
              <b> Decentralized-Finance(Defi)</b>
            </h1>
            <br />
            <h1>
              A system where financial products are open to anyone to use and
              does not rely on companies or institutions such as banks or
              brokerages to facilitate a transaction. Smart contracts are used
              to create protocols that replicate existing financial services in
              a transparent manner.
            </h1>
          </Box>
          <Box
            ml="2"
            textAlign="left"
            mt="2"
            p="2"
            height="80"
            rounded="1rem"
            textColor="white"
            shadow="2xl"
            w="350px"
            backgroundImage="linear-gradient(
              180deg
              , #271571 0%, #130F40 100%)"
          >
            <Image
              ml="2"
              mt="2"
              src="https://img.icons8.com/cotton/64/fa314a/conclusion-contract.png"
            />
            <br />
            <h1>
              <b>Smart contract</b>
            </h1>
            <br />
            <h1>
              A self-executing contract containing the terms and conditions of
              an agreement among peers. It is like a digital vending machine
              where there is no requirement for a clerk or cashier. A set of
              rules once deployed to the network automates transactions between
              peers as programmed.
            </h1>
          </Box>
        </Stack>
        <Stack
          direction={["column", "column", "row"]}
          alignItems={["center", "center", "center"]}
          spacing="20px"
          align="center"
          justify={{ base: "center", base: "center", base: "center" }}
          p="2"
        >
          <Box
            bg="primary.00"
            textAlign="left"
            p="2"
            rounded="1rem"
            textColor="white"
            shadow="2xl"
            w="350px"
            height="80"
            backgroundImage="linear-gradient(130.03deg,#000000,#7D0552);"
            _hover={{}}
          >
            <Image
              ml="2"
              mt="2"
              src="https://img.icons8.com/pastel-glyph/64/fa314a/business-group--v1.png"
            />
            <br />
            <h1>
              <b>Peer to multi peer (P2MP)</b>
            </h1>
            <br />
            <h1>
              The decentralized interactions between parties in a distributed
              network which assigns tasks and workloads between peers. Here,
              peers can exchange digital assets or data without intermediaries.
            </h1>
          </Box>

          <Box
            rounded="1rem"
            textAlign="left"
            p="2"
            shadow="2xl"
            textColor="white"
            w="350px"
            height="80"
            backgroundImage="linear-gradient(130.03deg,#000000,#A55C1B);"
          >
            <Image
              ml="2"
              mt="2"
              src="https://img.icons8.com/cotton/64/fa314a/swap-paths.png"
            />
            <br />
            <h1>
              <b>Atomic Swap</b>
            </h1>
            <br />
            <h1>
              A technique that allows for quick trade of cryptocurrencies from
              different blockchain networks from one party to another, without
              the use of an exchanges or other intermediary.
            </h1>
          </Box>
          <Box
            ml="2"
            textAlign="center"
            backgroundImage="linear-gradient(130.03deg, #00304B 27.17%, #4B0012 85.87%);"
            mt="2"
            height="80"
            rounded="1rem"
            textColor="white"
            shadow="2xl"
            w="350px"
            bg="primary.00"
          >
            <Image
              ml="2"
              mt="2"
              src="https://img.icons8.com/cotton/64/fa314a/conclusion-contract.png"
            />
            <b>Smart contract</b>
          </Box>
        </Stack>
      </div>
    );
  }
}
export default Body;
