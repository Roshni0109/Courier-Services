import React from "react";
import { Box, Button, ButtonGroup, FormControl, FormLabel, Input } from "@chakra-ui/react"
export default function Login(){
    return(
            <nav>
                <Box borderRadius={"xl"} bg='lavenderblush' w='100%' h='100%' p={"30"} color='black'>
      <FormControl>
            <FormLabel width={"80"}>Email address/Phone Number</FormLabel>
            <Input  type='email' />
            <FormLabel width={"80"}>Password</FormLabel>
            <Input  type='password' /><br/>
            <ButtonGroup p={4} variant='solid' spacing='6'>
                <Button colorScheme='blue'>Login</Button>
                     <Button colorScheme='blue'>Cancel</Button>
                    </ButtonGroup>
            </FormControl>
                </Box> 
            </nav>

    )
}