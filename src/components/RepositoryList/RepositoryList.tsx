// import { IRepository } from "../../types/repository"
import { IRepository } from "../../types/repository"
import { RepositoryCard } from "../RepositoryCard/RepositoryCard"
import { Container, Footer } from "./style-RepositoryList"


export interface IRepositories{

    repositories: IRepository[]

}

export function RepositoryList({repositories}: IRepositories){

    // console.log('arroz')
    // console.log(repositories)
    // repositories.length == 0 && alert('oi')
    return(
        <>
            <Container>
            {
                
                repositories.map( (repository) => 
                    <RepositoryCard 
                    key={repository.id}
                        repository={repository}
                        // repositoryLanguage={repository.language}

                    />
                
                )

                
            }

            </Container>
            <Footer></Footer>
        
        </>
    )
}