import React from "react";
import styled from "styled-components";

const Link = styled.a`
    color: #BF4F74;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;

    &:visited {
        color: white;
    }
`

export const CV = () => {
    return (
        <Link href="https://s3.eu-west-1.amazonaws.com/www.ronyo.xyz/Ronan+O'Cuinn+-+CV.pdf" target="_blank" rel="noopener noreferrer">CV</Link>
    )
}