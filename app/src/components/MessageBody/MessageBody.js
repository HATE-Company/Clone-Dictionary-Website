import "./messagebody.scss"


const MessageBody = (props) => {


    return(
        <div className="messagebody">
                {props.children}
        </div>
    )

}

export default MessageBody;