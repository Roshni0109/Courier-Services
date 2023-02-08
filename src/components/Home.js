import React, { useState } from "react"
import { Box, Button, ButtonGroup, FormControl, FormLabel, HStack, Input, Spacer, VStack } from "@chakra-ui/react"


export default function Home(){
    const [details , setDetails]= useState({user:"",
    phone:"", 
    });
    function getdetails(e){
        const name= e.target.name;
        const value = e.target.value;
        console.log(details);
        setDetails((prevDetails) => {
            
            return(
                {
                    ...prevDetails, [name] : value
                }
            );
        })
    }
    return(
        <nav>
            
             <Box borderRadius={"xl"} bg='lavenderblush' w='100%' h='100%' p={"30"}>
             
    <FormControl>
        
        <HStack>
            <FormLabel width={"80"}> Name of Receiver:</FormLabel>
            <Input name="user" onChange={getdetails} value={details["user"]} variant={"outline"}  type='name' />
            </HStack>
            
           <HStack>
           <FormLabel width={"80"} > Phone Number of Receiver:</FormLabel>
            <Input name="phone" onChange={getdetails} value={details["phone"]} variant={"outline"}  type='number' />
           </HStack> 
            
            <HStack>
            <FormLabel width={"80"}>Name of Sender:</FormLabel>
            <Input  variant={"outline"}  type='name' /><Spacer/>
            </HStack>

            <HStack>
            <FormLabel width={"80"} > Phone Number of Sender:</FormLabel>
            <Input variant={"outline"}  type='number' />
            </HStack>
        
       
            
            
            <HStack>
            <FormLabel width={"80"}> From:</FormLabel>
            <Input variant={"outline"}  type='name' />
            </HStack>

            <HStack>
            <FormLabel width={"80"}>To:</FormLabel>
            <Input  variant={"outline"}  type='name' />
            </HStack>
            
           <HStack>
            <FormLabel width={"80"}> Pin code:</FormLabel>
            <Input variant={"outline"}  type='number' />
            </HStack>
            <HStack>
            <FormLabel width={"80"} > Pin code:</FormLabel>
            <Input variant={"outline"}  type='number' />
            </HStack>
            
            <HStack>
            <FormLabel width={"80"}>Anything else you would like to add:</FormLabel>
            <Input  variant={"outline"}  type='name' /><br/>
            </HStack>
            
               
            
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
    
