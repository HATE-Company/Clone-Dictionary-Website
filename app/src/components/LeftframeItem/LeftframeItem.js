import { useEffect, useState } from "react";
import "./leftframeitem.scss";
import  { collection, doc, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../../config/firebase";

const LeftframeItem = (props) => {

    const [state, setState] = useState(true)
    
    const [ad, setAd] = useState(false)

    const dropdown = (event) => {
        console.log(event.target.parentElement.parentElement)
        if(state === true){
            event.target.parentElement.parentElement.querySelector('.leftframeitem__headline').style.display = 'block'
    

            event.target.style.rotate = '90deg'
            setState(!state)
        }
        else if(state === false){

            event.target.parentElement.parentElement.querySelector('.leftframeitem__headline').style.display = 'none'
            event.target.parentElement.style.background = ''
            event.target.parentElement.style.color = 'black'
            event.target.style.filter = 'invert(0%)'


            event.target.style.rotate = '0deg'
            setState(!state)
        }

    }


 const [headlines, setHeadlines] = useState([])
 const [entry, setEntry] = useState([])

    useEffect(()=> {

        const headlineCollection = query(collection(db, 'headlines'));
        onSnapshot(headlineCollection, (snapshot) => {
            setHeadlines(snapshot.docs.map(headline => {
                
                return {
                    id: headline.id,
                    ...headline.data()
                }
                
              }))
           
        })

    },[])

    return(
        <div className="leftframeitem">
            <div className={"leftframeitem__tag "+(props.type.includes('ad')? "ad":"")}>
            <p>{props.tag}</p>
            <img onClick={dropdown} src={require("../../assets/005-up-arrow-1.png")}></img>
            </div>
            <div className="leftframeitem__headline">

               
                {headlines.map(headline=>  <div className="leftframeitem__headline__item">
                <p>{headline.headline}</p>
                <p>{headline.entries}</p> </div>)}
                
              

             
            </div>
        </div>
    )

}

export default LeftframeItem;