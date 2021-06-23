import React from 'react'
import {
    Box,
    Flex,
    Link,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Heading,
    useColorMode,
} from '@chakra-ui/react'
import { IconButton } from "@chakra-ui/react"
import { useHistory } from 'react-router-dom'
import { ExternalLinkIcon, AddIcon, RepeatIcon, EditIcon, HamburgerIcon } from '@chakra-ui/icons'
import { ColorModeSwitcher } from "../ColorModeSwitcher"
interface Props { }

const Navbar: React.FC<Props> = () => {

    const history = useHistory()
    // const [{ fetching: logoutFetching }, logout] = useLogoutMutation()
    // const [{ data, fetching }] = useMeQuery()
    const { colorMode } = useColorMode()


    let body = (
        <Box>
            <Button
                bg="white"
                color="black"
                mr="4"
                onClick={() => history.push('/login')}
            >
                Login
            </Button>
            <Button
                bg="white"
                color="black"
                onClick={() => history.push('/Register')}
            >
                Register
            </Button>
        </Box>
    )


    return (
        <Flex
            zIndex={1}
            position="sticky"
            top={0}
            bg={colorMode === "light" ? "#373737" : "white"
            }
            color={colorMode === "light" ? "white" : "black"}
            p={4}
        >
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<HamburgerIcon />}
                    variant="outline"
                    color={colorMode === "light" ? "white" : "black"}
                />
                <MenuList color={colorMode === "light" ? "black" : "white"}>
                    <MenuItem icon={<ExternalLinkIcon />} command="⌘N" onClick={() => { history.push('/dashboard') }}>
                        Dashboard
                    </MenuItem>
                    <MenuItem icon={<AddIcon />} command="⌘T" onClick={() => { history.push('/tiers/factories') }}>
                        Factories
                    </MenuItem>
                    <MenuItem icon={<RepeatIcon />} command="⌘⇧N" onClick={() => { history.push('/create-post') }}>
                        Create-post
                    </MenuItem>

                </MenuList>
            </Menu>
            <Link
                mr={2}
                onClick={() => { history.push('/') }}
            >
                <Box p="2">
                    <Heading size="md">MK Management</Heading>
                </Box>
            </Link>

            <ColorModeSwitcher justifySelf="flex-end" />

            <Box ml={'auto'} >
                {body}
            </Box>
        </Flex >
    )
}


export default Navbar