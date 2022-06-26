// import { IRepository } from "../../types/repository"
import { IRepository } from "../../types/repository"
import { RepositoryCard } from "../RepositoryCard/RepositoryCard"
import { Container, Footer } from "./style-RepositoryList"


export interface IRepositories {
    repositories: IRepository[];
    onOpenDetailRepositoryModal: () => void;
    // onClickCard: React.Dispatch<React.SetStateAction<{}>>;
}

export function RepositoryList({
    repositories,
    onOpenDetailRepositoryModal,
    // onClickCard,
}: IRepositories) {
    // console.log('arroz')
    // console.log(repositories)
    // repositories.length == 0 && alert('oi')
    return (
        <>
            <Container>
                {repositories.map((repository) => (
                    <RepositoryCard
                        key={repository.id}
                        repository={repository}
                        onOpenDetailRepositoryModal={
                            onOpenDetailRepositoryModal
                        }

                        // onClickCard={onClickCard}
                        // repositoryLanguage={repository.language}
                    />
                ))}
            </Container>
            <Footer></Footer>
        </>
    );
}