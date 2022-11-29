import styled from "styled-components";

export const FooterContainer = styled.footer`
    max-width: 1280px;
    background-color: #58C1F5;
`
export const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    padding: 10px 0;
    
    
    @media (min-width: 470px) {
        flex-direction: row;
        margin: 0 auto; 
        justify-content: space-between; 
        padding: 0 50px; 
        align-items: center;
    }
`

export const InformationBox = styled.div`

`
export const DevsList = styled.ul`
    padding: 10px 0;
    overflow-wrap: break-word;
`

export const DevName = styled.p`
    font-size: 12px;
`
