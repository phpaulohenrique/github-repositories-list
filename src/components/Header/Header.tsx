import axios from "axios";
import { useState } from "react";
import { ButtonSearch, Container, ContainerHeaderInfo, ContainerInput, ImgSearch, Input, Title, TotalRepositories } from "./style-Header";
import searchIcon from '../../assets/search.png'

interface IHeaderProps{
    user: string;
    setUser: React.Dispatch<React.SetStateAction<string>>;
    handleGetUserRepositories: () => void;
    totalRepositories: number;
}

export function Header({user, setUser, handleGetUserRepositories, totalRepositories}:IHeaderProps ){
    
    // console.log(totalRepositories)

    let textTotalRepository;

    if(totalRepositories === 0){
        textTotalRepository = ''

    }else if(totalRepositories === 1){
        textTotalRepository = `${totalRepositories} repository`
    }else{
        textTotalRepository = `${totalRepositories} repositories`
    }

    return(
        <Container>

            <ContainerHeaderInfo>
                <Title>GitHub Repo List</Title>

                <TotalRepositories>
                    {textTotalRepository}

                    {/* {
                        if(totalRepositories === 1){
                            return `${totalRepositories} repository`
                        }else{
                            return `${totalRepositories} repository`
                        }
                
                    } */}
                </TotalRepositories>


            </ContainerHeaderInfo>

            <ContainerInput>

                <Input type="text"
                    value={user} 
                    placeholder="Enter GitHub user..."
                    onChange={(e) => setUser(e.target.value)}>

                </Input>


                <ButtonSearch type="button" onClick={handleGetUserRepositories}>
                    <ImgSearch src={searchIcon} alt="" />
                </ButtonSearch>
                
            </ContainerInput>



        </Container>
        
    )
}