import React from "react";
import { Box, Button, ButtonGroup, FormControl, FormLabel, HStack, Input, Radio, RadioGroup } from "@chakra-ui/react"
export default function TrackShipment(){
    return(
        <div>
                <Box borderRadius = {"xl"} bg='lavenderblush' w='100' p={"30"} color='black'>
            <FormControl as='fieldset'>
                <FormLabel>Enter your:  </FormLabel>
                <RadioGroup defaultValue='Order No.'>
             <HStack spacing='24px'>
                <Radio value='Order no.'>Order Number::</Radio>
                <Radio value='Refrence no.'>Reference Number::</Radio>
             </HStack>
          </RadioGroup>
                <Input variant={"outline"}  type='number'></Input>
            </FormControl>
            <ButtonGroup   p={4} variant='solid' spacing='6'>
                <Button  colorScheme='blue'>GO</Button>
                </ButtonGroup>
        </Box>

        </div>
    )
}