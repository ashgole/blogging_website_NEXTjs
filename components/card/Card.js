// yt - https://www.youtube.com/watch?v=pwHf-3stDeE

import React from 'react'

const Card = () => {
    return (
        <>
            <style global jsx >
                {`
            .dummy{
            background:yellow;
            }
            `}
            </style>
            <div className='dummy'>This is style jsx global</div>
        </>
    )
}

export default Card