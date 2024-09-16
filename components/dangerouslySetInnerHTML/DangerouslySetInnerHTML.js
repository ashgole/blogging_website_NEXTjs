import React from 'react'

const DangerouslySetInnerHTML = ({content}) => {
    const markup = { __html: content }
    return <div dangerouslySetInnerHTML={markup} />;
}

export default DangerouslySetInnerHTML