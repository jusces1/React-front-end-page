import { TableData} from './endPoints';

export function getTableData(){
    return fetch(TableData).then(function(response){
        return response.json();
    }).catch(function () {
        // This is where you run code if the server returns any errors
    });
}
