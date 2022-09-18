import { useState } from "react"
import { NavLink } from "react-router-dom"
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
                <p>{props.title}</p>
                <img onClick={dropdown} src={require("../../assets/005-up-arrow-1.png")}/>
            </div>
            <div className="leaderboarditem__list">

                <div className="leaderboarditem__list__item">
                    1<img src={require("../../assets/uparrowleader.png")}></img>
                <h1>nickname</h1>
                </div>

                <div className="leaderboarditem__list__item">
                2<img src={require("../../assets/uparrowleader.png")}></img>

                <h1>nickname</h1>
                </div>

                <div className="leaderboarditem__list__item">
                3<img src={require("../../assets/uparrowleader.png")}></img>

                <h1>nickname</h1>
                </div>

                <div className="leaderboarditem__list__item">
                4<img src={require("../../assets/uparrowleader.png")}></img>

                <p>nickname</p>
                </div>

                <div className="leaderboarditem__list__item">
                5<img src={require("../../assets/uparrowleader.png")}></img>

                <p>nickname</p>
                </div>

                <div className="leaderboarditem__list__item" style={{
                    justifyContent:'center', border:'none', height:'4rem'
                }}>
                    <NavLink to={'/'+props.link} style={{textDecoration:'none', color:'black'}}className="viewall">
                    <p>view all</p>
                    </NavLink>
                </div>
              
            </div>

        </div>
    )

}

export default LeaderboardItem;