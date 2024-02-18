import { Avatar, Container, Heading, Stack, VStack,Text } from '@chakra-ui/react'
import React from 'react'


const Framee = () => {
  return (
    <Stack direction={["column","row"]} spacing={["4","16"]} padding={"8"}>
        <VStack>
            <Avatar boxSize={["40","48"]}/>
            <Text children="Co-Founder" opacity={0.7}/>
        </VStack>
        <VStack>
            <Heading children="Dipuranjan Sethy" size={["md","xl"]}/>
            <Text textAlign={["center","left"]} children={`Hi, I am a full-stack developer`}/>
        </VStack>
    </Stack>
  )
}

export default Framee