import * as React from "react"
import { BrowserRouter } from 'react-router-dom'
import Routes from './rountes/Rountes'

import {
    ChakraProvider,
    Box,
    theme,
} from "@chakra-ui/react"

export const App = () => (
    <ChakraProvider theme={theme}>
        <Box fontSize="xl">
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </Box>

    </ChakraProvider>
)
