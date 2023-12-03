import {Flex, Container, Image, Box, VStack } from '@chakra-ui/react'
import React from 'react'
import { AuthForm } from '../../components/AuthForm/AuthForm'

export const AuthPage = () => {
  return (
    <Flex minH={'100vh'} justifyContent={'center'} alignItems={'center'}>
      <Container maxW={"container.md"} padding={0}>
      <Flex justifyContent={'center'} alignItems={'center'} gap={10}>
        {/* left */}
      <Box display={{base: 'none', md: 'block'}}>
        <Image src='./auth.png' h={650} alt='auth image'/>
      </Box>

        {/* right */}
      <VStack gap={4}>
        <AuthForm />

      </VStack>
      </Flex>
      </Container>
    </Flex>
  )
}
