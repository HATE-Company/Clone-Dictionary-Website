import { NavLink } from "react-router-dom";
import "./secondheader.scss"



const SecondHeader = (props) => {
//createheadline
    return(
        <div className="secondheader">
            <div className="secondheader__grid" >
                <div className="secondheader__sort">

                    <img src={require("../../assets/best1.png")}></img>
                    <h1>best</h1>
                    <img src={require("../../assets/hot.png")}></img>
                    <h1>hot</h1>

                    <img src={require("../../assets/new.png")}></img>
                    <h1>new</h1>
                    <img src={require("../../assets/bronze.png")}></img>
                    <h1>bronze</h1>
                </div>

            </div>
            <div className="secondheader__grid" >
            <div className="secondheader__search">
                <input placeholder="headline, #tag, @writer"></input>

            </div>

            </div>
            <div className="secondheader__grid" >
                <div className="secondheader__create">
                    <h1 style={{color:'#a636b1'}}>create hashtag #</h1>
                    <NavLink style={{textDecoration:'none', color:'black', fontWeight:'bolder'}} to='/createheadline'>create headline +</NavLink>
                </div>

            </div>

        </div>
    )

}


export default SecondHeader;