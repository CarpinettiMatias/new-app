import { data } from "../Data/Data";



export const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(data)
        }, 1500);
    });
};