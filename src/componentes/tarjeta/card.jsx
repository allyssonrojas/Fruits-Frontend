import React,{useState, useEffect} from "react";
import "./style.css"
import axios from "axios"



function CardFruit(){

    const [fruits, setFruits] = useState([]);

    const getAllFruits = async() =>{
        axios.get(`/fruits`).then((response) =>{
            console.log(response)
            console.log(response.data)
            setFruits(response.data)
        }) 
    }

    useEffect(() => {
        getAllFruits()
    },[])

    return(
     <div className="allCards">
         {fruits.map((particularFruit) =>(

            <div className="formm">
                <h1 className="titlee">Description</h1>
                    <div className="informationn">
                        <p className="namee">Name :</p>
                        <p className="nameFruitt">{particularFruit.nameFruit}</p>
                        <p className="pricee">Price :</p>
                        <p className="priceFruitt">{particularFruit.priceFruit}</p>
                    </div>
             </div>
         ))}
     </div>
    )

}

export default CardFruit;