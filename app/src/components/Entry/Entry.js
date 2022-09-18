import { useState } from "react";
import "./entry.scss"


const Entry = () => {

    const [style, setStyle] = useState({
        height:'17rem'
    })

    const [styleReply, setStyleReply] = useState({
        display:'none'
    })
    const [clicked, setClickedd] = useState(false)

    const reply = ()=>{
        setClickedd(true)
    }
    return(
        <div className="entry" style={ clicked ? style:null}>
            <div className="entry__text">

            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate</p>
            </div>

            <div className="entry__footer">
                <div className="entry__footer__left">

                    <div className="entry__footer__upvote">
                    <img src={require("../../assets/003-arrow-up.png")}></img>
                    <h1>85</h1>
                    </div>

                    <div className="entry__footer__reply">
                        <img onClick={reply} src={require("../../assets/reply.png")}/>
                        <p> 23 replies</p>

                    </div>
                </div>
                <div className="entry__footer__right">
                <div className="entry__footer__right__userinfo">
                    <p>nickname</p>
                    <p>dd/mm/yy &nbsp; &nbsp;--:--pm</p>

                </div>
                    <div className="entry__footer__right__userpicture">

                    </div>
                </div>
                </div>

                <div className="replyarea "style={clicked ? styleReply : null}>
                    <div className="replyarea__inner">

                        <input placeholder="your reply"></input>
                        <div className="send"></div>

                    </div>


                </div>
        </div>
    )

}

export default Entry;