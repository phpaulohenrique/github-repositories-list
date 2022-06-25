import moment from "moment";
import { IRepository } from "../../types/repository";
import { Card, ContainerCardInfo, RepositoryLanguage, TitleRepository } from "./style-RepositoryCard";

interface IRepositoryCardProps{
    repository: IRepository
}


export function RepositoryCard({repository }: IRepositoryCardProps){
    
    return(
        <Card>

            <ContainerCardInfo>

                <TitleRepository>{repository.name}</TitleRepository>

                
                {repository.language && <RepositoryLanguage>{repository.language}</RepositoryLanguage>}
                
                <span>{moment(repository.created_at).format('DD-MM-YYYY')}</span>
                
            </ContainerCardInfo>

            


            
        </Card>
    )
}