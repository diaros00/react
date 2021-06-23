import React from 'react'

interface Props {
    count: number
}

const Cptest: React.FC<Props> = ({ count }) => {
    return (
        <div>Cptest {count}</div>

    )
}

export default Cptest