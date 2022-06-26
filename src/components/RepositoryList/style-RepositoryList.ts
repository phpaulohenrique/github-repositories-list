import styled from 'styled-components'


export const Container = styled.div`
    // background-color: #0123;
    width: 100%;
    min-height: 80vh;
    padding: 1.3rem 2rem;
    margin-top: 3.5rem;
    padding-bottom: 10rem;

    &::before{
        content: '';
        width: 100%;
        border-bottom: solid 1px #000;
        position: absolute;
        left: 0;
        top: 15rem;
        z-index: 1;
    }
`;


export const Footer = styled.footer`
    background-color: #3D3DEC;
    width: 100%;
    height: 7rem;
    position: relative;
    bottom: 0;
`