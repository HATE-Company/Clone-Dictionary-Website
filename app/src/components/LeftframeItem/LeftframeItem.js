import { useState } from "react";
import "./leftframeitem.scss"

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



    return(
        <div className="leftframeitem">
            <div className={"leftframeitem__tag "+(props.type.includes('ad')? "ad":"")}>
            <p>{props.tag}</p>
            <img onClick={dropdown} src={require("../../assets/005-up-arrow-1.png")}></img>
            </div>
            <div className="leftframeitem__headline">

                <div className="leftframeitem__headline__item">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscin</p>
                <p>18</p>
                </div>
                <div className="leftframeitem__headline__item">
                <p>headline</p>
                <p>51</p>

                </div>
                <div className="leftframeitem__headline__item">
                <p>headline</p>
                <p>21</p>

                </div>
                <div className="leftframeitem__headline__item">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscin</p>
                <p>7</p>

                </div>
                <div className="leftframeitem__headline__item">
                <p>headline</p>
                <p>128</p>

                </div>
                <div className="leftframeitem__headline__item">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscin</p>
                <p>352</p>

                </div>
                <div className="leftframeitem__headline__item">
                <p>headline</p>
                <p>51</p>

                </div>
             
            </div>
        </div>
    )

}

export default LeftframeItem;