import axios from "axios";
import { useState } from "react";
import { Header } from "./components/Header/Header";
import { RepositoryList } from "./components/RepositoryList/RepositoryList";
import { IRepository } from "./types/repository";

import {alertToastify} from './components/Toastify/alertToastify'

import { ToastContainer, toast } from 'react-toastify';


import 'react-toastify/dist/ReactToastify.css'


// interface err{
//     message: string;
// }

function App() {
    const [user, setUser] = useState<string>('phpaulohenrique');
    const [userRepositories, setUserRepositories] = useState<IRepository[]>([]);
    // console.log(user);


    const getUserRepositories = async () => {

        try {
            const response = await axios.get(
            `https://api.github.com/users/${user}/repos`
            );
            setUserRepositories(response.data);

            console.log(response.data);
            // if(response.data == 0){
            //     // const notify = () => toast.error('User has no repositories!',{
            //     //     position: toast.POSITION.TOP_CENTER
            //     // })

            //     alertToastify('User has no repositories!')
            // }

            response.data == 0 && alertToastify('User has no repositories')
            
        } catch(error) {
            // alert('deu erro')

            // EXAMPLE USER THAT EXISTS BUT DOES NOT HAVE REPOSITORY: zzax


            if (error instanceof Error) {
                // console.log('error message: ', error.message);
                // const isError404 = error.message.includes('404')
                // console.log(isError404);

                // const notify = () => toast.error('User does not exist!',{
                //     position: toast.POSITION.TOP_CENTER
                // })
                // error.message.includes('404') && 
                if(error.message.includes('404')){
                    alertToastify('User does not exist!')
                    setUserRepositories([]);

                    return 
                }

                alertToastify(error.message)
                
                // console.log('unexpected error: ', error);

            } else {
                // alertToastify(error)
                // console.log(error)
                alertToastify('Unexpected error!')
                setUserRepositories([]);

            }

            // setUserRepositories([]);
            alert('cuca')

        }
        
        // console.log(userRepositories);
    };

    return (
        <div className="App">
            <Header
                user={user}
                setUser={setUser}
                handleGetUserRepositories={getUserRepositories}
                totalRepositories={userRepositories.length}

            />
            <RepositoryList
                repositories={userRepositories}
            />

            <ToastContainer />
        </div>
    );
}

export default App;
