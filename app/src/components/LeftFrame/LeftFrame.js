import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LeftframeItem from "../LeftframeItem/LeftframeItem";
import "./leftframe.scss"


const LeftFrame = ()=> {
const location = useLocation().pathname.slice(1)
const style = {
        display:'none'
}


        return(
                <div className="leftframe "style={location==='messages' ? style :{display:'block'}}>
                    <div className="leftframe__items">
                    <LeftframeItem type='' tag='news'></LeftframeItem>
                    <LeftframeItem type='' tag='arts & culture'></LeftframeItem>
                    <LeftframeItem type='ad' tag='brand advertisement'></LeftframeItem>
                    <LeftframeItem type='' tag='society'></LeftframeItem>
                    <LeftframeItem type='' tag='arts & culture'></LeftframeItem>
                    <LeftframeItem type='' tag='sport'></LeftframeItem>
                    <LeftframeItem type='' tag='crypto'></LeftframeItem>
                    <LeftframeItem type='' tag='nft'></LeftframeItem>
                    <LeftframeItem type='' tag='business'></LeftframeItem>
                    <LeftframeItem type='' tag='finance'></LeftframeItem>
                    <LeftframeItem type='' tag='travel'></LeftframeItem>
                    
                  
                    </div>
                  
                
                </div>
        )

}

export default LeftFrame;