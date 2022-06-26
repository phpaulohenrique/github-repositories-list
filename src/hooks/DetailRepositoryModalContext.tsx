import { createContext, ReactNode, useContext, useState } from "react";
import { IRepository } from "../types/repository";


interface DatailRespositoryProviderProps {
    children: ReactNode;
}

interface DetailContextData {
    repositorySelected: (repository: IRepository) => void;
    repositorySelectedData: IRepository;
}

const DetailRepositoryContext = createContext<DetailContextData>(
    {} as DetailContextData
);

export const DetailRepositoryProvider =({children}: DatailRespositoryProviderProps) => {

    const [repositorySelectedData, setRepositorySelectedData] = useState<IRepository>({} as IRepository);

    function repositorySelected(repository: IRepository) {
        console.log(repository);
        setRepositorySelectedData(repository);
    }

    // const hello = 'arroz';


    return (
        <DetailRepositoryContext.Provider
            value={{ repositorySelected, repositorySelectedData }}
        >
            {children}
        </DetailRepositoryContext.Provider>
    );
};

export const useRepositorySelected = () => {
    const context = useContext(DetailRepositoryContext);
    return context;
}