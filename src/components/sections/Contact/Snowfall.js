import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Snowfall from 'react-snowfall'

const SnowfallComponent = () => {
    const { width, height } = useWindowSize()

    return (
        <Snowfall
            color = "#3a0ca3"
            snowflakeCount={50}
            width = {width}
            height = {height}
        />  
    )
}

export default SnowfallComponent