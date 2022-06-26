import styled from 'styled-components'

export const Container = styled.div`
    width: 84vw;
    height: 30rem;
    background-color: #e3faf6;
    // left: 50%;
    // top: 50%;
    position: relative;
    // transform: translate(-50%, -50%);
    z-index: 10;
    border-radius: .8rem;
    padding: 2rem;
    margin-inline: auto;

`;

export const ImgIconClose = styled.img`
    position: absolute;
    right: 1.6rem;

`;
export const ContainerData = styled.div`
    // background-color: blue;
    margin-top: 1.3rem;
    line-height: 200%;
    
`;
    
    
export const RepositoryName = styled.h1`
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 2rem;

`;


export const RepositoryLanguage = styled.span`
    font-size: 1.4rem;
    // margin-right: 1rem;
    background-color: #1c73ff;
    color: #fff;
    padding: .3rem .6rem;
    border-radius: .8rem;
    // font-weight: 500;
    letter-spacing: .08rem;

`;

export const RepositoryDateCreated = styled.span`
    font-size: 1.4rem;
    // font-weight: 500;
    margin-bottom: 1rem;
    margin-left: 3rem;
    // right: 0;


`;