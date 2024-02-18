import { Box, Button, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import "./home.css"
import { Link } from 'react-router-dom'
import vg from '../../assets/images/bg.png'
import {CgGoogle,CgYoutube} from 'react-icons/cg'
import {SiCoursera,SiUdemy} from 'react-icons/si'
import {DiAws} from 'react-icons/di'
import intro from '../../assets/videos/intro.mp4'
const Home = () => {
  return (
    <section className="home">
        <div className="container">
            <Stack
            direction={['column','row']}
            height="100%"
            justifyContent={["center",'space-between']}
            alignItems="center"
            spacing={["16","56"]}
            >
            <VStack width={"full"} alignItems={["center", "flex-end"]}>
                <Heading children="LEARN FROM THE EXPORTS" size={"2xl"} textAlign={"right"}/>
                <Text fontFamily={"cursive"} fontSize={"2xl"} textAlign={"left"} children="Find Valuable Content At Reasonable Price"/>
                <Link to="/courses">
                <Button size={"lg"} colorScheme='yellow'>
                    Explore Now
                </Button>

                </Link>
            </VStack>

            <Image className='vector-graphics' boxSize={"md"} src={vg} objectFit="contain"/>
            </Stack>
        </div>

        <Box padding={"8"} bg="blackAlpha.800">
          <Heading color={'yellow.400'} textAlign={"center"} children="OUR BRANDS"/>
        
        <HStack className='brandsbaner' justifyContent={'space-evenly'} marginTop="4">
          <CgGoogle/>
          <CgYoutube/>
          <SiCoursera/>
          <SiUdemy/>
          <DiAws/>
        </HStack>
        </Box>

        <div className="container2">
          <video src={intro} controls controlsList='nodownload nofullscreen noremoteplayback' disablePictureInPicture disableRemotePlayback/>
        </div>
    </section>
  )
}

export default Home;