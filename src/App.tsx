import { useState } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";

import { Header } from "./components/Header/Header";
import { RepositoryList } from "./components/RepositoryList/RepositoryList";
import { IRepository } from "./types/repository";
import { alertToastify } from "./components/Toastify/alertToastify";
import { DetailRepositoryModal } from "./components/DetailRepositoryModal/DetailRepositoryModal";
import { DetailRepositoryProvider, useRepositorySelected } from "./hooks/DetailRepositoryModalContext";

Modal.setAppElement("#root");

function App() {
    const [user, setUser] = useState<string>("phpaulohenrique");
    const [userRepositories, setUserRepositories] = useState<IRepository[]>([]);

    // const [repositorySelected, setRepositorySelected] = useState<IRepository>({} as IRepository);
    // console.log(repositorySelected);
    const { repositorySelected } = useRepositorySelected();

    // console.log(repositorySelected())

    // repositorySelected();

    const [isRepositoryDetailModalOpen, setIsRepositoryDetailModalOpen] =
        useState(false);

    function handleOpenRepositoryDetailModal() {
        setIsRepositoryDetailModalOpen(true);
        // repositorySelected();
    }

    function handleCloseRepositoryDetailModal() {
        setIsRepositoryDetailModalOpen(false);
    }

    const getUserRepositories = async () => {
        try {
            const response = await axios.get(
                `https://api.github.com/users/${user}/repos`
            );
            setUserRepositories(response.data);

            // console.log(response.data);

            response.data == 0 && alertToastify("User has no repositories!");
        } catch (error) {
            if (error instanceof Error) {
                if (error.message.includes("404")) {
                    alertToastify("User does not exist on GitHub!");
                    setUserRepositories([]);

                    return;
                }

                alertToastify(error.message);

                // console.log('unexpected error: ', error);
            } else {
                // console.log(error)
                alertToastify("Unexpected error!");
                setUserRepositories([]);
            }
            // setUserRepositories([]);
        }

        // console.log(userRepositories);
    };

    return (
        <div className="App">
            {/* <DetailRepositoryProvider> */}
                <Header
                    user={user}
                    setUser={setUser}
                    handleGetUserRepositories={getUserRepositories}
                    totalRepositories={userRepositories.length}
                />
                <RepositoryList
                    repositories={userRepositories}
                    // onClickCard={setRepositorySelected}
                    onOpenDetailRepositoryModal={
                        handleOpenRepositoryDetailModal
                    }
                />

                <ToastContainer />

                <DetailRepositoryModal
                    isOpen={isRepositoryDetailModalOpen}
                    onRequestClose={handleCloseRepositoryDetailModal}
                />
            {/* </DetailRepositoryProvider> */}
        </div>
    );
}

export default App;
