import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { firebase } from '../firebase/firebase'
import '../components/componentsCss/Kitchen.css'




const Kitchen = () => {
    
    const [newarray, setNewArray] = useState([])
    const [idOrderDeliver, setIdOrderDeliver] = useState('')
    const [time, setTime] = useState({ms:0, s:0, m:0, h:0})
    const [interv, setInterv]=useState();
    

    const getUpate = () => {
        const db = firebase.firestore()
        db.collection('mesas').orderBy('fecha', 'desc').onSnapshot((querySnapshot) =>{
            const docs = []
            querySnapshot.forEach((doc) => {
            docs.push({...doc.data(), id:doc.id})
            console.log(doc.data())
            console.log(doc.id)
        })
        console.log(docs)
        setNewArray(docs)
    })
    
 }
 useEffect(() => {
    getUpate()
    start()
 }, [])

 const activateOrderDeliver = (item) => {
     console.log(item.id)
     console.log(item.name)
     setIdOrderDeliver(item.id)
     stop(item.id)
     
 }
 const start =()=>{
     run()
     setInterv(setInterval(run,10));
 }
 let updatedMs= time.ms, updatedS=time.s, updatedM=time.m, updatedH=time.h;

 const run=() => {
     if(updatedM===60){
         updatedH++;
         updatedM=0;

     }
     if(updatedS===60){
         updatedM++;
         updatedS=0;
     }
     if(updatedMs===100){
        updatedS++;
        updatedMs=0;
     }
     updatedMs++;
     return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
 }

 const stop =() =>{
     clearInterval(interv);
     
 }

 const addOrderDeliver = () => {

    var indexOrder = newarray.map(item => item.id).indexOf(idOrderDeliver)
    const db = firebase.firestore()
    db.collection('Entregas').doc(idOrderDeliver).set({
      order: newarray[indexOrder]
    })
    db.collection('mesas').doc(idOrderDeliver).update({
        fecha: '',
        nameClient: '',
        nameWaiter: '',
        order: [],
 })
}

 
 const deleteOrder = (id) => {
    const db = firebase.firestore()
    db.collection('mesas').doc(id).update({
        fecha: '',
        nameClient: '',
        nameWaiter: '',
        order: [],
 })

 }

    return (
        <main className="kitcherContainer">
            <section className="btnKitchenReturn">
                <Link to="/orden">
                    <button className="returnButton">Volver</button>
                </Link>
            </section>
            {
                newarray.map((item, index) => (
                    <section className="orderKitchen">
                        <div className="orderTitle">
                            <div className="containerTittleOrden">
                                <div key={index}>
                                    <p className="nameTable">{item.name}</p>
                                    
                                    <button type="button" 
                                    className="btnDeleteKitchen" 
                                    onClick={()=>deleteOrder(item.id)}
                                    ><img className="imgBtnDeleteKitchen" src="http://imgfz.com/i/GBTyIih.png" alt="" />
                                    </button>
                                    <div className="clock-holder" time={time}>
                                    <span>{(time.h >=10)? time.h : "0"+time.h}</span>&nbsp;:&nbsp;
                                    <span>{(time.m >=10)? time.m : "0"+time.m}</span>&nbsp;:&nbsp;
                                    <span>{(time.s >=10)? time.s : "0"+time.s}</span>&nbsp;:&nbsp;
                                    <span>{(time.ms >=10)? time.ms : "0"+time.ms}</span>
                                    </div>
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
                                <div className="divProduct" key={index}>
                                    {
                                    item.order.map(element => 
                                        <p className="productOrder">{element}</p>
                                    )}
                                    
                                </div>
                            </div>
                        </div>

                        <div className="kitchenButton">
                            <button  className="kitchenReady" onClick = {() => activateOrderDeliver(item)}>
                                <p className="btnList" key={item.id}>Listo</p>
                            </button>
                            <br/>
                            <Link to="/Entregas">
                            <button type="submit" key={item.id} className="kitchenReady" onClick = {() => addOrderDeliver()}>
                                Firebase
                            </button>
                            </Link>
                            
                               
                            
                            
                            
                        </div>
                    </section>
                ))
            }
        </main>
    )
}

export default Kitchen 
