import React from 'react'
import { Box, Flex, Image, Input, Button, VStack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  })

  const navigate = useNavigate();

  const handleAuth = () =>{
    // console.log("Inputs: ", inputs);
    // nếu email và password trống -> hiển thị thông báo
    if(!inputs.email || !inputs.password){
      alert("Vui lòng điền!");
      return;
    }

    navigate("/");
  };
  return (
    <>
      <Box border={'1px solid gray'} borderRadius={4}>
      <VStack spacing={4} p={5}>
            <Image src='./logo.png' cursor={'pointer'} h={24} alt='Instagram' />

          <Input 
            placeholder='Email'
            type='email'
            size={"sm"}
            fontSize={14}
            value={inputs.email}
            onChange={(e)=>{setInputs({...inputs, email:e.target.value})}}
          />

          <Input 
            placeholder='Password'
            type='password'
            size={"sm"}
            fontSize={14}
            value={inputs.password}
            onChange={(e)=>{setInputs({...inputs, password:e.target.value})}}
          />

          {!isLogin ? 
          <Input 
          placeholder='Confirm password' 
          type='password' 
          size={"sm"} 
          fontSize={14} 
          value={inputs.confirmPassword}
          onChange={(e)=>{setInputs({...inputs, confirmPassword:e.target.value})}}
          /> : null}

          <Button 
          w={'full'} 
          colorScheme='blue'
          size={'sm'}
          fontSize={14}
          onClick={() => {handleAuth()}}
          >
          {isLogin? "Log in" : "Sign in"}
          </Button>

          {/* ---- OR ---- */}
          <Flex gap={1} w={'full'} my={4} alignItems={"center"} justifyContent={"center"}>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text>OR</Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>

          <Flex gap={1} w={'full'} alignItems={"center"} justifyContent={"center"}>
            <Image src='./google.png' w={5} />
            <Text mx={2} color={"blue.500"}>Login with Google</Text>
          </Flex>

      </VStack>
      </Box>

      <Box border={'1px solid gray'} borderRadius={4} padding={5} w={"full"}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14} >
            {isLogin? "Don't have an account?" : "Already have an account?"}
          </Box>

          <Box 
          color={"blue.500"} 
          cursor={"pointer"} 
          fontSize={14} 
          onClick={() => {setIsLogin(!isLogin)}}
          >
            {isLogin? "Log in" : "Sign up"}
          </Box>
        </Flex>
      </Box>

      <Box>Get the App.</Box>
      <Flex gap={10}>
        <Image src='./playstore.png' h={10} />
        <Image src='./microsoft.png' h={10} />
      </Flex>
    </>
  )
}
