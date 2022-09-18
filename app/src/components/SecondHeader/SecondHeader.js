import { NavLink } from "react-router-dom";
import "./secondheader.scss"



const SecondHeader = (props) => {

    return(
        <div className="secondheader">
            <div className="secondheader__sort">
                <div className="secondheader__sort__item">
                <img src={require("../../assets/best1.png")}></img>
                <h1>best</h1>
                </div>

                <div className="secondheader__sort__item">
                <img src={require("../../assets/hot.png")}></img>
                <h1>hot</h1>
                </div>

                 <div className="secondheader__sort__item">
                <img src={require("../../assets/new.png")}></img>
                <h1>new</h1>
                </div>   
                <div className="secondheader__sort__item">

                <img src={require("../../assets/bronze.png")}></img>
                <h1>bronze</h1>
                </div>

            </div>

            <div className="secondheader__search">

                <input placeholder="headline, #tag, @writer" type={"text"}></input>
                <img src={require("../../assets/010-search-interface-symbol.png")}></img>

            </div>

            <div className="secondheader__create">
                <h1 style={{
                    color:'#B026FF'
                }}>create hashtag</h1>
                <h1 className="hash" style={{
                    color:'#B026FF'
                }}>#</h1>
                <NavLink to='/createheadline' style={{textDecoration:'none', color:'black'}}>

                <h1>create headline</h1>
                </NavLink>
                <h1 className="plus">+</h1>

            </div>

        </div>
    )

}


export default SecondHeader;