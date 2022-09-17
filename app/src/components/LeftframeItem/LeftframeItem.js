import { useState } from "react";
import "./leftframeitem.scss"

const LeftframeItem = (props) => {

    const [state, setState] = useState(true)

    const dropdown = (event) => {
        console.log(event.target.parentElement.parentElement)
        if(state === true){
            event.target.parentElement.parentElement.querySelector('.leftframeitem__headline').style.display = 'block'
        event.target.parentElement.style.background = 'radial-gradient(circle, rgba(238,129,249,1) 0%, rgba(120,16,130,1) 100%)'
        event.target.parentElement.style.color = 'white'
        event.target.style.filter = 'invert(100%)'

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

    return(
        <div className="leftframeitem">
            <div className="leftframeitem__tag">
            <h1>tag</h1>
            <img onClick={dropdown} src={require("../../assets/005-up-arrow-1.png")}></img>
            </div>
            <div className="leftframeitem__headline">

                <div className="leftframeitem__headline__item">
                <h1>headline</h1>
                </div>
                <div className="leftframeitem__headline__item">
                <h1>headline</h1>

                </div>
                <div className="leftframeitem__headline__item">
                <h1>headline</h1>

                </div>
                <div className="leftframeitem__headline__item">
                <h1>headline</h1>

                </div>
                <div className="leftframeitem__headline__item">
                <h1>headline</h1>

                </div>
                <div className="leftframeitem__headline__item">
                <h1>headline</h1>

                </div>
                <div className="leftframeitem__headline__item">
                <h1>headline</h1>

                </div>
             
            </div>
        </div>
    )

}

export default LeftframeItem;