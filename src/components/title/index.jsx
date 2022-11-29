import React from "react";
import styled from "styled-components";

export const Title = ({size, children})=> {
    return <TitleTag as={size}>{children}</TitleTag>
};

const TitleTag = styled.h2``
