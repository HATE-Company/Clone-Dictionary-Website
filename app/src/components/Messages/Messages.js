import "./message.scss"
import {NavLink} from "react-router-dom" 


const Message = (props) => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();
    
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    var minutes = today.getMinutes();
    var hours = today.getHours();
    const formattedToday = dd + '/' + mm + '/' + yyyy;
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + '' + ampm;
    return(
       
        <NavLink style={{textDecoration:'none', color:'black'}} to='/message' className="messageitem">
            <NavLink to='/' className="incoming__profile">
            </NavLink>
            <div className="incoming__message">
            
                <NavLink style={{textDecoration:'none', color:'black'}} to='/'><b>nickname</b></NavLink>
                <p>lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className="message__date">
                {formattedToday +" "+ strTime}
            </div>
            </div>
        </NavLink>
    )

}

export default Message;