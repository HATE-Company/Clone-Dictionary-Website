import "./innerbody.scss"


const InnerBody = (props) => {

    return(
        <div className="innerbody">
            <div className="innerbody__header">
                <h1>create a headline</h1>
                <div className="innerbody__header__navbar container flex justify-between items-center">
                    <div className="innerbody__header__navbar__item flex bodyinput">
                        <input placeholder="up to 50 characters"></input>
                    </div>

                    <select className="innerbody__header__navbar__item flex ">
                        <option>tags</option>
                    </select>

                    <select className="innerbody__header__navbar__item flex ">
                        <option>language</option>
                    </select>

                    <div className="innerbody__header__navbar__item innercreate flex">
                        create
                    </div>


                </div>
            </div>
        </div>
    )

}

export default InnerBody