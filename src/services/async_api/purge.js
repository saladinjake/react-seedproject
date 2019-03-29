import demoData from '../../vehiclelist.json'
const getRequest = (url) =>{
    return fetch(url).then(response => response.json());
}


const getDemoData = () => {

}
export {
    getRequest,
    getDemoData
};

