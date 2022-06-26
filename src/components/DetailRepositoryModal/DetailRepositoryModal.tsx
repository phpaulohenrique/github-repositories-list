import ReactModal from "react-modal";
import Modal from "react-modal";
import { Container, ContainerData, ImgIconClose, RepositoryDateCreated, RepositoryLanguage, RepositoryName } from "./style-DetailRepositoryModal";

import close from '../../assets/close.svg';
import { useRepositorySelected } from "../../hooks/DetailRepositoryModalContext";
import { IRepository } from "../../types/repository";
import moment from "moment";

interface IDatailRepositoryModalProps{
    isOpen: boolean,
    onRequestClose: () => void,
    // repositorySelectedData: IRepository;
}


export const DetailRepositoryModal = ({
    isOpen,
    onRequestClose,
    
    }: IDatailRepositoryModalProps) => {
    
    const { repositorySelectedData } = useRepositorySelected();

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container>
                <ImgIconClose src={close} alt="" onClick={onRequestClose} />

                <ContainerData>
                    <RepositoryName>
                        {repositorySelectedData.name}
                    </RepositoryName>

                    {/* <span>{`| ${repositorySelectedData.topics } dd | `}</span> */}
                    {repositorySelectedData.language && (
                        <RepositoryLanguage>
                            {repositorySelectedData.language}
                        </RepositoryLanguage>
                    )}
                    {/* <RepositoryLanguage>
                        {repositorySelectedData.language}
                    </RepositoryLanguage> */}
                    <RepositoryDateCreated>
                        {`created: 
                        ${moment(repositorySelectedData.created_at).format(
                            "DD/MM/YY"
                        )}`}
                    </RepositoryDateCreated>
                </ContainerData>
            </Container>
        </Modal>
    );
};
