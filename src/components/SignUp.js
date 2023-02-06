import React from "react";
import { Box, Button, ButtonGroup, FormControl, FormLabel, HStack, Input } from "@chakra-ui/react"
export default function SignUp(){
    return(
        <div>
            <Box borderRadius = {"xl"} bg='lavenderblush' w='100' p={"30"} color='black'>
      <FormControl>
        <HStack>
        <FormLabel>FirstName</FormLabel>
            <Input type='text' />
            <FormLabel>LastName</FormLabel>
            <Input type='text' />
        </HStack>
            <HStack>
            <FormLabel>Email address</FormLabel>
            <Input type='email' />
            <FormLabel>Phone Number</FormLabel>
            <Input type='number' />
            </HStack>
            
            <FormLabel>Address</FormLabel>
            <Input type='text' />
            <HStack>
            <FormLabel>Password</FormLabel>
            <Input type='password' />
            <FormLabel> Confirm Password</FormLabel>
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