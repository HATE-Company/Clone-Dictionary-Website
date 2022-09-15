import "./mainwrapper.scss"

const MainWrapper = (props) => {


    return (
        <div className="mainwrapper">
            {props.children}

        </div>

    )

}



export default MainWrapper;