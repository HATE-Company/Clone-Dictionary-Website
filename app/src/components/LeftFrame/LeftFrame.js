import LeftframeItem from "../LeftframeItem/LeftframeItem";
import "./leftframe.scss"


const LeftFrame = ()=> {

        return(
                <div className="leftframe">
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