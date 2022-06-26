import moment from "moment";
import { useRepositorySelected } from "../../hooks/DetailRepositoryModalContext";
import { IRepository } from "../../types/repository";
import { Card, ContainerCardInfo, RepositoryLanguage, Span, TitleRepository } from "./style-RepositoryCard";
// import {}
interface IRepositoryCardProps {
    repository: IRepository;
    onOpenDetailRepositoryModal: () => void;
    // onClickCard: React.Dispatch<React.SetStateAction<{}>>
}

// const { repositorySelected } = useRepositorySelected();




export function RepositoryCard({
    repository,
    onOpenDetailRepositoryModal,
    // onClickCard,
    }: IRepositoryCardProps) {

    const { repositorySelected, repositorySelectedData } =
        useRepositorySelected();
    
    const handleOpenDetailRepositoryModal = (repository: IRepository) => {
        onOpenDetailRepositoryModal();
        // onClickCard(repository);
        repositorySelected(repository);
        console.log(repositorySelectedData);
    };


    return (
        <Card onClick={() => handleOpenDetailRepositoryModal(repository)}>
            <ContainerCardInfo>
                <TitleRepository>{repository.name}</TitleRepository>

                {repository.language && (
                    <RepositoryLanguage>
                        {repository.language}
                    </RepositoryLanguage>
                )}

                <Span>{`created: ${moment(repository.created_at).format(
                    "DD/MM/YY"
                )}`}</Span>
            </ContainerCardInfo>
        </Card>
    );
}