import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Formik, Form } from 'formik'
import { Box, Button } from '@chakra-ui/react'
import InputField from '../components/InputField'
import { Flex, Spacer, useColorMode } from "@chakra-ui/react"
import { Badge } from "@chakra-ui/react"
import { Divider } from "@chakra-ui/react"
import { Stack, HStack, VStack } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
} from "@chakra-ui/react"
interface Props { }



const Register: React.FC<Props> = () => {
    const history = useHistory()
    const { colorMode } = useColorMode()
    const [isOpen, setIsOpen] = React.useState(false)
    const onClose = () => setIsOpen(false)
    const cancelRef = React.useRef()



    return (

        <Flex >
            <Box></Box>

            <Box w="20%" ></Box>
            <Box w="60%" marginTop="2%" borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Flex
                    zIndex={1}
                    position="sticky"
                    top={0}
                    bg={colorMode === "light" ? "#373737" : "white"}
                    color={colorMode === "light" ? "white" : "black"}
                    p={4}
                >

                    <Heading as="h4" size="lg">Register</Heading>

                </Flex>

                <Box padding="2%" marginTop="2%" borderRadius="lg" overflow="hidden">


                    <Formik
                        initialValues={{ title: "", text: "" }}
                        onSubmit={async (values) => {
                            console.log(values)

                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form>

                                <InputField
                                    name="firstname"
                                    placeholder="firstname"
                                    label="firstname"
                                />
                                <InputField
                                    name="lastname"
                                    placeholder="lastname"
                                    label="lastname"
                                />
                                <InputField
                                    name="email"
                                    placeholder="email"
                                    label="email"
                                />

                                {/* <Box mt={4}> */}
                                <InputField

                                    name="password"
                                    placeholder="Enter password"
                                    label="password"
                                />
                                {/* </Box> */}

                                <Divider variant="solid" size="20px" color="black" />


                                <Button
                                    mt={6}
                                    type="submit"
                                    isLoading={isSubmitting}
                                    colorScheme="white"
                                    variant="outline"
                                    onClick={() => setIsOpen(true)}
                                >
                                    Register
                                </Button>

                            </Form>

                        )}


                    </Formik>
                </Box>
                <Flex
                    zIndex={1}
                    position="sticky"
                    top={0}

                    color={colorMode === "light" ? "black" : "black"}
                    p={4}
                >
                    <div>
                        Have an account? <a href="/Login">Login</a>
                    </div>
                </Flex>
            </Box>


            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Register New ID
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure? to Register.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme="green" onClick={onClose} ml={3}>
                                Sure
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>

        </Flex>




    )
}

export default Register