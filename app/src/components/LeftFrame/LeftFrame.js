import { useLocation } from "react-router-dom";
import LeftframeItem from "../LeftframeItem/LeftframeItem";
import "./leftframe.scss"
import DATA from "../../data/data.json"

const LeftFrame = ()=> {
const location = useLocation().pathname.slice(1)
const style = {
        display:'none'
}

console.log(DATA.HASHTAGS.hashtags)
let hashTags = DATA.HASHTAGS.hashtags

        return(
                <div className="leftframe "style={location.includes('messages' || 'headline' || 'entries' || 'upvoted' || 'code' )? style : {display:'block'}}>
                    <div className="leftframe__items">

                        <LeftframeItem type='' tag='news'></LeftframeItem>

                        <LeftframeItem type='' tag='arts & culture'></LeftframeItem>

                        <LeftframeItem type='ad' tag='brand advertisement'></LeftframeItem>
                        {hashTags.map(x => <LeftframeItem type='' tag={x.name} headlines={x.headlinecount} />)}
                        <LeftframeItem type='' tag='news'></LeftframeItem>

<LeftframeItem type='' tag='arts & culture'></LeftframeItem>

<LeftframeItem type='ad' tag='brand advertisement'></LeftframeItem>
{hashTags.map(x => <LeftframeItem type='' tag={x.name} headlines={x.headlinecount} />)}
<LeftframeItem type='' tag='news'></LeftframeItem>

<LeftframeItem type='' tag='arts & culture'></LeftframeItem>

<LeftframeItem type='ad' tag='brand advertisement'></LeftframeItem>
<LeftframeItem type='' tag='news'></LeftframeItem>

<LeftframeItem type='' tag='arts & culture'></LeftframeItem>

<LeftframeItem type='ad' tag='brand advertisement'></LeftframeItem>


                    </div>
                  
                
                </div>
        )

}

export default LeftFrame;