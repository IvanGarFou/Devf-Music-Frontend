import React, {useEffect, useState} from "react";
import axios from 'axios'
import "./styles.css"

export default function Main(){
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://render-devf-music.onrender.com/discografia')
        .then(response => {
            setData(response.data)
        })
        .catch(error => {
            console.log('Error al obtener los datos', error)
        })
    }, [])

    return(
        <div className="container">
            <h2>Discografia</h2>

            <ul>
                {data.map(item => (
                    <div className="items-discos" key={item._id}>

                        <img src={item.imagen_url} alt={item.nombre} />

                        <h3>{item.nombre} </h3>
                        <p>{item.artista} </p>
                    </div>
                ))}
            </ul>
        </div>
    )
}