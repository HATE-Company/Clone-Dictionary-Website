import "./mainheader.scss"


const MainHeader = (props) => {

    return(
        <div className="mainheader">

            <div className="mainheader__logo">
                <img src={require("../../assets/hate.png")}/>
                <h1>hate club</h1>

            </div>

            <div className="mainheader__user">
                <img src={require("../../assets/notify.png")}></img>
                <img src={require("../../assets/message_white.png")}></img>
                <img src={require("../../assets/avatar.png")}></img>
                <div className="mainheader__user__info">
                    <h1><b>nickname</b></h1>
                    <h1>xxx karma</h1>

                </div>
            </div>

        </div>
    )

}


export default MainHeader;