import "./leftframe.scss"



const LeftFrame = (props) => {

    return (
        <div className="leftframe">
            <div className="leftframe__wrapper">
                <div className="leftframe__wrapper__items">
                    <div className="leftframe__wrapper__items__item">
                        <div className="leftframe__wrapper__items__item__title">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  width="30px" height='30px'
                        viewBox="0 0 495 495" style={{enableBackground:'new 0 0 495 495'}}>
                        <path style={{fill:'#FF7956'}} d="M0,247.5C0,384.19,110.81,495,247.5,495V0C110.81,0,0,110.81,0,247.5z"/>
                        <path style={{fill:'#FF5023'}} d="M247.5,0v495C384.19,495,495,384.19,495,247.5S384.19,0,247.5,0z"/>
                        </svg>
                        <h1>getting started</h1>
                        </div>

                        <div className="leftframe__wrapper__items__item__text">
                            <h3>welcome</h3>
                        </div>

                    </div>
                    <div className="leftframe__wrapper__items__item">
                        <div className="leftframe__wrapper__items__item__title">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  width="30px" height='30px'
                        viewBox="0 0 495 495" style={{enableBackground:'new 0 0 495 495'}}>
                        <path style={{fill:'#FF7956'}} d="M0,247.5C0,384.19,110.81,495,247.5,495V0C110.81,0,0,110.81,0,247.5z"/>
                        <path style={{fill:'#FF5023'}} d="M247.5,0v495C384.19,495,495,384.19,495,247.5S384.19,0,247.5,0z"/>
                        </svg>
                        <h1>hate company</h1>

                        
                        </div>

                        <div className="leftframe__wrapper__items__item__text">
                            <h3>community</h3>
                        <button></button>
                        </div>
                        <div className="leftframe__wrapper__items__item__dropdown">
                            <a>telegram</a>
                            <a>discord</a>
                            <a>linkedin</a>
                            <a>youtube</a>
                            <a>twitter</a>
                            <a>reddit</a>
                            <a>instagram</a>
                            <a>medium</a>

                        </div>
                        <div className="leftframe__wrapper__items__item__text">
                            <h3>website</h3>
                        <button></button>

                        </div>
                        <div className="leftframe__wrapper__items__item__dropdown">
                            <a>web 2.0</a>
                            <a>web 3.0</a>
                            

                        </div>
                        <div className="leftframe__wrapper__items__item__text">
                            <h3>introduction</h3>
                        </div>
                        <div className="leftframe__wrapper__items__item__text">
                            <h3>business model</h3>
                        </div>

                    </div>
                  
                    
                 
                    
                </div>
            </div>
        </div>
    )

}


export default LeftFrame