import React from "react";
import styled from "styled-components";

export const Title = ({size, children})=> {
    const sizes = ["h1", "h2", "h3", "h4"];
    
    if (sizes.includes(size)){
        return <TitleTag as={size}>{children}</TitleTag>
    } else {
        return <TitleTag as="h1">{children}</TitleTag>
    }

};

const TitleTag = styled.h2``
