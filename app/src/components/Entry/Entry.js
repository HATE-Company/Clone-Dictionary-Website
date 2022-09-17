import "./entry.scss"


const Entry = () => {

    return(
        <div className="entry">
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
                    <img src={require("../../assets/reply.png")}/>
                    <h1> 23 replies</h1>

                </div>
            </div>
            <div className="entry__footer__right">
            <div className="entry__footer__right__userinfo">
                <h1>nickname</h1>
                <h1>dd/mm/yy --:--pm</h1>

            </div>
                <div className="entry__footer__right__userpicture">

                </div>
            </div>
            </div>
        </div>
    )

}

export default Entry;