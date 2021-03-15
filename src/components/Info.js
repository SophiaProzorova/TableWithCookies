import { useState, useEffect } from "react"
import Table from "./table"

export default function Info(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const id_name = "name";

  
    useEffect(() => {
      fetch("http://fs.mh.net.ua/ajax/lsjson.php?dir=global/video&idu=1")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setIcon(result);
            setItems(result);
            
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
    
    
    if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
        } else {
            setIcon(items);
            return (
                <Table 
                    itemsInfo = { items }
                />
            )
        }

}

function setIcon(array){

    array.map( item => {
        let extention = item.ext.toLowerCase();
        let iconPath = '/img/';
         switch (extention) {
            case 'pdf':
                iconPath += 'pdf.png'
                break;
            case 'png':
                iconPath += 'png.png'
                break;
             case 'json':
                 iconPath += 'json.png'
                 break
             case 'mp4':
                 iconPath += 'mp4.png'
                 break
             default: 
                 iconPath += 'txt.ico' 
                 break;
             }
        item.icon = iconPath;
    })
}