import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Link, Box, Flex, Avatar, Tooltip } from '@chakra-ui/react'
import { CreatePostLogo, InstagramLogo, InstagramMobileLogo, NotificationsLogo, SearchLogo } from '../../accets/constants'
import {AiFillHome} from "react-icons/ai";

export const Sidebar = () => {

    const sidebarItems = [
        {
            icon: <AiFillHome size={25} />,
            text: "Home",
            link: "/"
        },
        {
            icon: <SearchLogo/>,
            text: "Search",
        },
        {
            icon: <NotificationsLogo/>,
            text: "Notifications",
        },
        {
            icon: <CreatePostLogo/>,
            text: "Create",
        },
        {
            icon: <Avatar size={"sm"} name='Tkt' src='./profilepic.png' />,
            text: "Profile",
            link: "/asaprogrammer",
        },
    ];

  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{base:2, md:4}}
    >
      <Flex direction={"column"} gap={10} w={"full"} height={"full"}>
        <Link cursor={"pointer"} to={"/"} as={RouterLink} pl={2} display={{base: "none", md:"block"}}>
          <InstagramLogo />
        </Link>

        <Link cursor={"pointer"} to={"/"} as={RouterLink} p={2} display={{base: "block", md:"none"}}
            borderRadius={6}
            _hover={{bg: "whiteAlpha.200"}}
            w={10}
        >
          <InstagramMobileLogo />
        </Link>

        <Flex
        direction={'column'}
        gap={5}
        cursor={'pointer'}
        >
            {sidebarItems.map((item, index)=>(
                <Tooltip
                key={index}
                hasArrow
                label={item.text}
                placement='right'
                ml={1}
                openDelay={500}
                display={{base: "block", sm: "none"}}
                >
                    <Link
                        display={"flex"}
                        to= {item.link || null}
                        as={RouterLink}
                        alignItems={"center"}
                        gap={4}
                        _hover={{bg:"whiteAlpha.400"}}
                        p={2}
                        w={"full"}
                    >
                        {item.icon}
                        <Box display={{base:"none", md:"block"}}>
                            {item.text}
                        </Box>
                    </Link>
                </Tooltip>
            ))}

            <Tooltip
                hasArrow
                label={"Sign Out"}
                placement='right'
                ml={1}
                openDelay={500}
                display={{base: "block", sm: "none"}}
                >
                    <Link
                        display={"flex"}
                        to= {"/auth"}
                        as={RouterLink}
                        alignItems={"center"}
                        gap={4}
                        _hover={{bg:"whiteAlpha.400"}}
                        p={2}
                        w={"full"}
                    >
                        <Box display={{base:"none", md:"block"}}>
                            Sign out
                        </Box>
                    </Link>
                </Tooltip>
        </Flex>
      </Flex>
    </Box>
  )
}
