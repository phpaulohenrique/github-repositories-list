
import { toast } from 'react-toastify';
// export const notify()

// export const Toastify = () => toast.error('User has no repositories!', {
//     position: toast.POSITION.TOP_CENTER
// })

export function alertToastify(alertTextMessage: string) {
    return(
        toast.error(alertTextMessage, {
            position: toast.POSITION.TOP_CENTER
        })

    );
}