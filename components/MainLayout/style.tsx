import styled from 'styled-components/'

export const Nav = styled.nav`
    position: fixed;
    height: 60px;
    top: 0;
    left: 0;
    right: 0;
    background: darkblue;
    display: flex;
    justify-content: space-around;
    align-items: center;

    a {
        color: white;
        text-decoration: none;
    }
`

export const Main = styled.main`
    margin-top: 60px;
`