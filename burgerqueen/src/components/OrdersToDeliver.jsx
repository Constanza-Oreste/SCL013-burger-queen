import React, { useState, useEffect } from 'react'
import { firebase } from '../firebase/firebase'
import { Link } from "react-router-dom";
import '../components/componentsCss/OrdersToDeliver.css'
import '../components/componentsCss/Kitchen.css'

const OrdersToDeliver = () => {

    const [arrayOrderDeliver, setArrayOrderDeliver] = useState([])

    const getUpDate = () => {

        const db = firebase.firestore()
        const getEntregas = async() =>{
            const querySnapshot = await firebase.firestore().collection('Entregas').get()
            const docs = []
            querySnapshot.forEach(doc => {
                docs.push({...doc.data(), id:doc.id})
                console.log(docs)
            })
            const docsArray = docs.map(item => (
                item.order
            ))
            console.log(docsArray)
            setArrayOrderDeliver(docsArray)
            
        }
    getEntregas()


        // const querySnapshot = db.collection('Entregas').onSnapshot((querySnapshot) =>{
        //     const docs = []
        //     querySnapshot.forEach((doc) => {
        //         console.log(doc.data())
        //         console.log(doc.id)
        //         console.log(arrayOrderDeliver)
             
        //     })
        //     console.log(docs)
        //     setArrayOrderDeliver(docs)
        // })
        
    }

    useEffect(() => {
        getUpDate()
    }, [])

    return (
        <main className="menuContainerDeliver">
            <section className="buttonsContainer">
                <section className="containerNewOrder">
                    <Link to="/orden">
                        <button className="btnNewOrder">Nuevo Pedido</button>
                    </Link>
                </section>

                <section className="containerDeliverOrder">
                <Link to="/entregas">
                    <button className="btnDeliverOrder">Pedidos a entregar</button>
                </Link>
                </section>
            </section>
            <div className="containerProductsDeliver">
            
            
            {
                    arrayOrderDeliver.map((item, index) => (
                        <section className="orderKitchen">
                            <div className="orderTitle">
                                <div className="containerTittleOrden">
                                    <div key={index}>
                                        <p className="nameTable">{item.name}</p>
                                    </div>        
                                </div>

                                <div className="containerClientDateAndHour">
                                    <div key={index}>
                                        <p className="dateAndHour">Fecha y hora: {item.fecha}</p>
                                        <p className="dateWaiter">Mesero:
                                        {item.nameWaiter}</p>
                                        <p className="dateClient">Ciente: 
                                        {item.nameClient}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="scrollProduct">
                                <div className="containerOrderProduct">
                                    <div className="divProduct">
                                        {
                                        item.order.map(element => 
                                            <p className="productOrder">{element}</p>
                                        )}
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="kitchenButton">
                                <button  className="kitchenReady">
                                    <p className="btnList">Entregado</p>
                                </button>
                            </div>
                        </section>
                    ))
                }
                </div>
        </main>
    )
}

export default OrdersToDeliver