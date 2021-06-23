import React, { useState, useEffect } from 'react'
import Cptest from '../components/Cptest'
import { Button, Text } from '@chakra-ui/react'

interface Props { }

const Test: React.FC<Props> = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("App effect count = " + count)
    }, [count])

    return (

        <div>
            <p>{count}</p>
            <Button onClick={() => { setCount(count + 1) }}>
                <Text color="white">
                    บวก 1
                </Text>
            </Button>
            <Cptest count={count} />
        </div>

    )
}

export default Test