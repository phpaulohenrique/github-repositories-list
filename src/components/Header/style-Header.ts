import  styled from 'styled-components';


export const Container = styled.div`
    background-color: #1A1A20;
    width: 100%;
    height: 12rem;
    padding: 1.3rem 2rem;
    position: relative;
    // z-index: 100;
    // position: fixed;
    // top: 0;
`;

export const ContainerHeaderInfo = styled.div`
    width: 100%;
    // background: tomato;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.2rem;
`;

export const Title = styled.h1`
    color: #fff;
    font-size: 2.1rem;
    font-weight: 500;
    // margin-top: 1rem;
    letter-spacing: .1rem;

`;

export const TotalRepositories = styled.span`
    font-size: 1.4rem;
    color: #fff;
    letter-spacing: .1rem;
    font-weight: 300;
`;



export const ContainerInput = styled.div`
    position: absolute;
    // background-color: #313533;
    bottom: -2rem;
    left: 50%;
    width: 90%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    // gap: .3rem;
`


export const Input = styled.input`
    // border-radius: 1rem;
    // top: 100px;
    // position: absolute;
    background-color: #e0e0de;
    font-size: 2rem;
    padding: 1.3rem .9rem;
    width: 80%;
    // margin-top: 3rem;
    border: none;
    border-right: .4rem solid #fff;
    letter-spacing: .1rem;

    ::placeholder{
        font-style: italic;
        font-weight: 100;
        font-size: 1.8rem;
    }

`;

export const ButtonSearch = styled.button`
    height: 100%;
    width: 20%;
    // border-radius: 1rem;
    border: none;
    // margin-left: .7rem;
    padding: 1.15rem;
    background-color: #e0e0de;
    display: flex;
    align-items: center;
    justify-content: center;
    

`;

export const ImgSearch = styled.img`
    // max-width: 100%;
    height: 2.6rem;
    // width: 10px;
    // background-color: tomato;
    // padding: 2rem;
`