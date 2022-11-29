import React from "react";
import {DevsList, FooterContainer, FooterContent, InformationBox, DevName} from "./styled"

export const Footer = ()=> {
    return <FooterContainer>
        <FooterContent>
            <InformationBox>
                <p>© Alkemy 2022</p>
            </InformationBox>
            <DevsList>
                <li><DevName>Jander Gomez</DevName></li>
                <li><DevName>Nazareno Rios</DevName></li>
                <li><DevName>Hernán Cosin</DevName></li>
                <li><DevName>Ricardo Yegros</DevName></li>
                <li><DevName>Jcaicedo</DevName></li>
                <li><DevName>Sebastian Torreiro</DevName></li>
                <li><DevName>Gabriel Carames</DevName></li>
            </DevsList>
        </FooterContent>
    </FooterContainer>
};


