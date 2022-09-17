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

                <input type={"text"}></input>

            </div>

            <div className="secondheader__create">
                <h1>create hashtag #</h1>
                <h1>create headline +</h1>
            </div>

        </div>
    )

}


export default SecondHeader;