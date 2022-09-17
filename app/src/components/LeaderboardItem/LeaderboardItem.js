import { useState } from "react"
import "./leaderboarditem.scss"


const LeaderboardItem = (props) => {

    const [state, setState] = useState(true)

    const dropdown = (event) => {
        if(state == true){

            event.target.parentElement.parentElement.querySelector('.leaderboarditem__list').style.display = 'block'
            event.target.style.rotate = '90deg'
            setState(false)
        }
        else if (state==false) {
            event.target.parentElement.parentElement.querySelector('.leaderboarditem__list').style.display = 'none'
            setState(true)
            event.target.style.rotate = '0deg'


        }
    }

    return(
        <div className="leaderboarditem">
            <div className="leaderboarditem__title">
                <h1>{props.title}</h1>
                <img onClick={dropdown} src={require("../../assets/005-up-arrow-1.png")}/>
            </div>
            <div className="leaderboarditem__list">
                <h1>nickname</h1>
                <h1>nickname</h1>
                <h1>nickname</h1>
                <h1>nickname</h1>
                <h1>nickname</h1>
            </div>

        </div>
    )

}

export default LeaderboardItem;