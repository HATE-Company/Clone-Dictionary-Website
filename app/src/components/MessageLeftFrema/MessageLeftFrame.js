import Message from "../Messages/Messages";
import "./messageleftframe.scss"


const MessageLeftFrame = () => {


    return(
        <div className="messageleftframe">

            
<div style={{
    padding:'1rem',
    height:'max-content',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    position:'relative'
}} className="messageleftframe__message sarchmessage">
    <h1 style={{marginBottom:'1rem'}}>messages</h1>
                  <input placeholder="search in messages"></input>
                  <img style={{
                    position:'absolute',
                    height:'20%',
                    bottom:'1.5rem',
                    left:'2.7rem'
                  }} src={require("../../assets/010-search-interface-symbol.png")}></img>
                </div>
            
                <div className="messageleftframe__message">
                    <div className="messageleftframe__message__picture">

                    </div>
                    <div className="messageleftframe__message__message">
                        <h1 >nickname</h1>
                        <p>lorem ipsum is simply dummy text</p>
                        <div style={{
                            position:'absolute',
                            right:'0',
                            color:'grey'
                        }}>
                            7.34pm
                        </div>
                    </div>
                </div>
                <div className="messageleftframe__message">
                    <div className="messageleftframe__message__picture">

                    </div>
                    <div className="messageleftframe__message__message">
                        <h1>nickname</h1>
                        <p>lorem ipsum is simply dummy text</p>
                        <div style={{
                            position:'absolute',
                            right:'0',
                            color:'grey'
                        }}>
                            7.34pm
                        </div>
                    </div>
                </div>
                <div className="messageleftframe__message">
                    <div className="messageleftframe__message__picture">

                    </div>
                    <div className="messageleftframe__message__message">
                        <h1>nickname</h1>
                        <p>lorem ipsum is simply dummy text</p>
                        <div style={{
                            position:'absolute',
                            right:'0',
                            color:'grey'
                        }}>
                            7.34pm
                        </div>
                    </div>
                </div>
                <div className="messageleftframe__message">
                    <div className="messageleftframe__message__picture">

                    </div>
                    <div className="messageleftframe__message__message">
                        <h1>nickname</h1>
                        <p>lorem ipsum is simply dummy text</p>
                        <div style={{
                            position:'absolute',
                            right:'0',
                            color:'grey'
                        }}>
                            7.34pm
                        </div>
                    </div>
                </div>
                <div className="messageleftframe__message">
                    <div className="messageleftframe__message__picture">

                    </div>
                    <div className="messageleftframe__message__message">
                        <h1>nickname</h1>
                        <p>lorem ipsum is simply dummy text</p>
                        <div style={{
                            position:'absolute',
                            right:'0',
                            color:'grey'
                        }}>
                            7.34pm
                        </div>
                    </div>
                </div>
                <div className="messageleftframe__message">
                    <div className="messageleftframe__message__picture">

                    </div>
                    <div className="messageleftframe__message__message">
                        <h1>nickname</h1>
                        <p>lorem ipsum is simply dummy text</p>
                        <div style={{
                            position:'absolute',
                            right:'0',
                            color:'grey'
                        }}>
                            7.34pm
                        </div>
                    </div>
                </div>
                <div className="messageleftframe__message">
                    <div className="messageleftframe__message__picture">

                    </div>
                    <div className="messageleftframe__message__message">
                        <h1>nickname</h1>
                        <p>lorem ipsum is simply dummy text</p>
                        <div style={{
                            position:'absolute',
                            right:'0',
                            color:'grey'
                        }}>
                            7.34pm
                        </div>
                    </div>
                </div>
                <div className="messageleftframe__message">
                    <div className="messageleftframe__message__picture">

                    </div>
                    <div className="messageleftframe__message__message">
                        <h1>nickname</h1>
                        <p>lorem ipsum is simply dummy text</p>
                        <div style={{
                            position:'absolute',
                            right:'0',
                            color:'grey'
                        }}>
                            7.34pm
                        </div>
                    </div>
                </div>
               
        </div>
    )

}

export default MessageLeftFrame;