import { NavLink } from "react-router-dom";
import "./chatbox.scss"
import IncomingMessage from "./IncomingMessage/IncmoingMessage";
import SendMessage from "./SendMessage/SendMessage";

const Chatbox = () => {
    return(
        <div className="chatbox">

            <div className="chatbox__header">
 
                <div className="chatbox__header__userinfo">

                    <div className="chatbox__header__userinfo__info">
                        <NavLink to='/messages' className="backbutton">
                            <img style={{rotate:'-90deg'}} src={require("../../assets/005-up-arrow-1.png")}></img>
                        </NavLink>
                        <NavLink to='/' className="userpp">
                        </NavLink>

                        <div className="usernickkarma">
                        <NavLink to='/' style={{textDecoration:'none', color:'black', fontWeight:'bold', position:'relative', top:'0.05rem'}}>nickname</NavLink>
                        <p style={{position:'relative', bottom:'0.15rem'}}>xxx karma</p>
                        </div>

                        

                    </div>
                </div>
                <div className="chatbox__header__usertier">
                        silver
                </div>

            </div>
            <div className="chatbox__body">
            <IncomingMessage></IncomingMessage>
            <SendMessage></SendMessage>
            <IncomingMessage></IncomingMessage>
            <IncomingMessage></IncomingMessage>


            </div>
            <div className="chatbox__footer">
                <textarea placeholder="your reply"></textarea>
                <img style={{rotate:'45deg'}} src={require("../../assets/download.png")}></img>

            </div>

        </div>
    )

}


export default Chatbox;