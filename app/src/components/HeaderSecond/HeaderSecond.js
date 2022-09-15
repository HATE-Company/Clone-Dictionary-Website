import "./headersecond.scss"


const HeaderSecond = (props) => {

    return(
        <div className="headersecond flex justify-between items-center">
        <div className="headersecond__item container items-center flex">most upvoted entries</div>
        <div className="headersecond__item container items-center flex">monst upvoted headlines</div>
        <div className="headersecond__item container items-center flex">bronze [newcomer]</div>
        <select className="headersecond__item container items-center flex">
            <option>tags</option>
        </select>
        <select className="headersecond__item container items-center flex">
            <option>language</option>
        </select>
        <div className="headersecond__item container items-center flex create">create headline</div>
        <div className="headersecond__item container items-center flex input">
            <form>

            <input type="text" placeholder="başlık, #entry, @yazar"></input>
            <input type='submit' placeholder="" value=" "></input>
            </form>
        
</div>
        </div>
    )

}

export default HeaderSecond