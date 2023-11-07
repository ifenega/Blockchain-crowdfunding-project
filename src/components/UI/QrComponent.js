import React from 'react'
import { useSelector } from 'react-redux';
import { QRCodeSVG } from "qrcode.react";


const QrComponent = ({ value }) => {



    return (
        <QRCodeSVG value={value} size={184}
            bgColor={`${'white'}`}
            fgColor={`${'black'}`}
        />
    )
}

export default QrComponent