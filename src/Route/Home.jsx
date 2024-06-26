import About from "./About";
import Skill from "./Skill"
import task from "../Components/Component.module.css"
import { SimpleGrid, Box, Text, Link, Stack, HStack, Button, Image } from '@chakra-ui/react'
import styled from 'styled-components'
import { FaBeer } from 'react-icons/fa';

import 'animate.css';
import Project from "./Project";
import Contact from "./Contact";
import Test from "../Components/Test";
import Example from "../Components/Test";
//<src="https://i.ibb.co/30TydSS/Robin-George-Resume.jpg"//
{/* <a href="https://ibb.co/VNYkFGq"><img src="https://i.ibb.co/thp106J/not-suitable.jpg" alt="not-suitable" border="0"></a> */ }

export default function Home() {
//data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAbFBMVEX///8XFRUAAAAUEhINCgrw8PAQDg6/v7/8/Pzm5ubV1dXz8/MFAAAKBgapqanr6+u5ubl7e3vKysppaWmLi4uysrJGRkYsKytMS0uXl5dbW1uCgoI8PDyenp4nJibb29s2NTUgICB0c3NTU1MyYo6gAAAEE0lEQVRoge1Z2aKqIBTNjQPmVDikpZn5//94ySkwRLDO03U9nWMbF3tgD3g47NixY8eOb4Gt2gmLhKJIiev9AYObPjNgYbdnx/0pQ1XS15rIYIBM+iQPrR9RkHZOMBEFAHH9AwrnAoGIYOTxIT9+SXHMwZZQdAgg/sY5+CzVYgJAsV2NO6hQvIwGWbSNo1q3FGszZwvHU1WNUZkNJrvqcVDATZcj1+agLOe/59BliTdxUBYNvxQThynOJzxQMIWheoyRiSPIWpoHpZFMf2+upTnygeJ5sdD4VvtO/42qB5hLFD5kKa0sFowK+5kaydshkPRPnKzT5pV0B/idGU24Dskxn7ah5pa3sRgLpw19c9M+kyo9nWh5jHOfPijJ+PvbiwhUsuX97QJG3kvSiKu4nhtWePrvxOzsus4RMtELeF2+x5FdtV5fbCZmQZXjUDMk5qrvWUU2arKuSsZGq5IPO5w4klhjRwacVEkSdh0y5SfyzJOsbOmNC3dcIZTJ4gubQtRCvgPhNhdIo3irteb2AlnPV7CivsKpmsDbQJqMr2wHpHCoGKRcfCUSSWBOopnrcBy8O7u2XRaMuN1UWiRcNUWSXEG0zu0MvL2WPc/mFGRrTgWqmYUNLtQoJ64eNUeyHF43Rq4rvTpwAzZ/L595NqkgbRJ/A8l35lIkMTTn26MiyY2T0xwGHUUSLnUBWZQTouIWp4ty4Vcn3lfbIaexvCh8AD+4NLxcibgAQUhrDJyVouXQxLzgsl0F4ILGfkgkuV7FLDU4LLZKyKehhFdF2g/wOKsbgfO8+rAxbyTkDZvHD1ZBqZhaIptbt9KocsFOd5QpsbgNPyVJS/zcXlT8rlAfT/NJbCUj4WE66e7mXn/YcFupkHUMs+E1WGtB+viCInLDstcK7POyNti5wsc4vtoURt22XkYl6ZDyEEDwTOsP71ikogz+xwyOjBWO8eRC7B0wmRImepmP777xhT4KRFO+QqbweguD6R4KzBxO+zJXZO6KUVClbg9GCu74cCSP9+j80X8kH87oBVXqEB5eDM9DfXPH6BT0hK6QRHGmOQ52eDVoR+cOJkJ2IBqcRfcutqHYEw5V+LWn6obDtmkubSXIRq3gNkT9BqcdWF4v9sraO7me6FZ2loO6Jeq3d9jo9hh0eY54Xk5wKGiQPm8pQWfciFDHAldpfnzONQGdMkcTUq8LPIiEZk4CpeYgUPe6mFDeHEKIUwiO8YxEm4NazOgtbg83XIJrLN7xoFrhWOCWa/VWSBA9u5tQMMVohcTX659YkAsokSDIv/i4QdPwQCMq23EwUOj0TiJEMUxlbI7uaoEGRrLB4zO4Z4MWJ6EmgHxokt98O7PCFh4Co5MGrqcffm+0hBbBf/FFc8eOHTv+J/wDOXUtd064qKcAAAAASUVORK5CYII=
//data:image/png;base64,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

  return (
    <Stack p={["5px", "30px"]} bg="#060c30" id="home">
      <SimpleGrid columns={[1, 1, 2, 2]} spacing={10}>
        <Box bg="#060c30" align="center">
          <Box>
            <Text
              textAlign="center"
              textColor="white"
              fontFamily="sans-serif"
              fontWeight={["800"]}
              fontSize={["25px", "30px", "35px"]}
            >
              Hi !
            </Text>
            <Text
              textAlign="center"
              textColor="white"
              fontSize={["20px", "25px", "30px"]}
            >
              I am{" "}
            </Text>{" "}
            <Text
              textAlign="center"
              textColor="red"
              fontFamily="fantasy"
              fontSize={["24px", "28px", "35px"]}
            >
              Robin George
            </Text>
            <Text
              textAlign="center"
              textColor="white"
              fontSize={["18px", "22px", "26px"]}
            >
              Full Stack Web Developer
            </Text>
            <Link
              href="Robin_George_Resume.pdf"
              download="Robin_George_Resume.pdf"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1TaPfTrafYWjQPRd4JrUNCEXL6YXhlOS6/view?usp=sharing"
                )
              }
            >
              <Button m="10px" textColor="white" bgColor="blue.200">
                {" "}
                RESUME
              </Button>
            </Link>
            {/* //onClick={()=>{window.open("https://drive.google.com/file/d/1qf6VhbUzITIoe2vnuz0pxJ2qCuJBNv32/view?usp=sharing","_blank")}} */}
          </Box>

          <HStack
            spacing={10}
            mt="10px"
            w={["100%", "100%", "70%"]}
            h={10}
            justify="center"
          >
            <Text>
              <Link
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/robin-george-909699232"
                  )
                }
              >
                {" "}
                <img
                  width="30px"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg"
                  alt="piv"
                />
              </Link>
            </Text>
            <Text>
              <Link
                onClick={() => window.open("https://github.com/Robingeorge12")}
              >
                {" "}
                <Image
                  bgColor="white"
                  width="30px"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg"
                  alt="piv"
                />
              </Link>
            </Text>
            <Text>
              <Link
                onClick={() => window.open("mailto:robingsa.btch@gmail.com")}
              >
                {" "}
                <Image
                  bgColor="white"
                  width="30px"
                  src="https://img.icons8.com/ios-filled/50/null/circled-envelope.png"
                  alt="piv"
                />
              </Link>
            </Text>
          </HStack>
        </Box>

        <Box bg="#060c30" align="center">
          <Box
            bg="#060c30"
            w={["200px", "210px", "200px"]}
            mt="30px"
            borderRadius="10px"
          >
            <Image
              borderRadius="10px"
              width="100%"
              src="https://i.ibb.co/thp106J/not-suitable.jpg"
              alt="picu"
            />
          </Box>
        </Box>
      </SimpleGrid>
    </Stack>
  );
}