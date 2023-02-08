import React from "react";
import { Box, Button, ButtonGroup, FormControl, FormLabel, HStack, Input } from "@chakra-ui/react"
export default function SignUp(){
    return(
        <div>
            <Box borderRadius = {"xl"} bg='lavenderblush' w='100' p={"30"} color='black'>
      <FormControl>
        <HStack>
        <FormLabel >FirstName</FormLabel>
            <Input type='text' />
            <FormLabel width={"80"}>LastName</FormLabel>
            <Input type='text' />
        </HStack>
            <HStack>
            <FormLabel width={"80"}>Email address</FormLabel>
            <Input type='email' />
            <FormLabel width={"80"}>Phone Number</FormLabel>
            <Input type='number' />
            </HStack>
            
            <FormLabel width={"80"}>Address</FormLabel>
            <Input type='text' />
            <HStack>
            <FormLabel width={"80"}>Password</FormLabel>
            <Input type='password' />
            <FormLabel width={"80"}> Confirm Password</FormLabel>
            <Input  type='password' />

            </HStack>
            
            <ButtonGroup p={4} variant='solid' spacing='6'>
                <Button colorScheme='blue'>Save</Button>
                     <Button colorScheme='blue'>Cancel</Button>
                    </ButtonGroup>

            </FormControl>
            
            
                </Box>
        </div>
    )
}