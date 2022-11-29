import styled from "styled-components";

export const SidebarContainer = styled.div`
    position: relative;
`

export const SidebarContent = styled.div`
  position: absolute;
  background-color: var(--primary);
  right: 0;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  min-width: 250px;
  height: 100vh;
  padding: 10px 10px 0 10px;  
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`