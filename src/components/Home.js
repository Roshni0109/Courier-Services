import React from "react"
import { Box, Button, ButtonGroup, FormControl, FormLabel, HStack, Input, Spacer } from "@chakra-ui/react"


export default function Home(){
    return(
        <nav>
            
             <Box borderRadius={"xl"} bg='lavenderblush' w='100' p={"30"}>
             
    <FormControl>
    <HStack>
        <FormLabel > Name of Receiver:</FormLabel>
            <Input variant={"outline"} width={"80"} type='name' />
            <FormLabel > Phone Number of Receiver:</FormLabel>
            <Input variant={"outline"} width={"80"} type='number' />
           </HStack>
           <HStack>
           
            </HStack> 
            
            <HStack>
            <FormLabel>Name of Sender:</FormLabel>
            
            <Input  variant={"outline"} width={"80"} type='name' /><Spacer/>
            <FormLabel > Phone Number of Sender:</FormLabel>
            <Input variant={"outline"} width={"80"} type='number' />
            </HStack>
            <HStack>
            <FormLabel > From:</FormLabel>
            <Input variant={"outline"} width={"80"} type='name' />
            <FormLabel>To:</FormLabel>
            <Input  variant={"outline"} width={"80"} type='name' />
            </HStack>
            <HStack>
            <FormLabel > Pin code:</FormLabel>
            <Input variant={"outline"} width={"80"} type='number' />
            
            <FormLabel > Pin code:</FormLabel>
            <Input variant={"outline"} width={"80"} type='number' />
            </HStack>
            
            
            <FormLabel>Anything else you would like to add:</FormLabel>
            <Input  variant={"outline"} width={"80"} type='name' /><br/>
            
            
            <ButtonGroup p={4} variant='solid' spacing='6'>
                <Button colorScheme='blue'>Book Order</Button>
                     <Button colorScheme='blue'>Sign up</Button>
                     <Button colorScheme='blue'>Cancel</Button>
                    </ButtonGroup>
           
                
        </FormControl>
      
            
            </Box>
            
        </nav>
    )
}
    
