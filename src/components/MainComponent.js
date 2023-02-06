import React from  "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Center} from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react'
import {VStack,Stack} from '@chakra-ui/react'
import {Button} from '@chakra-ui/react'
import {   MdCall, MdEmail } from "react-icons/md"
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import TrackShipment from "./TrackShipment"
export default function MainComponent(){
return(
    
    <div>
        <VStack p={10}>
        <Center><Heading  fontWeight={"extrabold"} bgGradient= "linear(to-r,purple.500,purple.700,purple.900)"
        bgClip="text">
           ONLINE COURIER SERVICES
       </Heading > 
       </Center>
      <Divider p={4}/>
      
      <Tabs isManual variant='soft-rounded'colorScheme='red'>
  <TabList  >
    <Center>
    <Tab color={'blackAlpha.700'} >Home </Tab> 
    <Tab color={'blackAlpha.700'}>Login</Tab>
    <Tab color={'blackAlpha.700'}>Sign Up</Tab>
    <Tab color={'blackAlpha.700'}>Track Shipment</Tab>
    
    </Center>
  </TabList>
  <TabPanels >
    <TabPanel >
          <Home/>
    </TabPanel>
    <TabPanel>
        <Login/>
    </TabPanel>
    <TabPanel>
          <SignUp/>
    </TabPanel>
    <TabPanel>
        <TrackShipment/>
    </TabPanel>
  </TabPanels>
</Tabs>
<Stack direction='row' spacing={4} alignSelf={"baseline"}>
  <Button  leftIcon={<MdEmail />} colorScheme='purple' variant='solid' >
    Email
  </Button>
  <Button rightIcon={<MdCall />} colorScheme='purple' variant='outline'>
    Call us
  </Button>
</Stack>

    </VStack>
      
    </div>
    
  )


}