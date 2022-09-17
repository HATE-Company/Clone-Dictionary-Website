import Entry from "../Entry/Entry"
import Leaderboard from "../Leaderboard/Leaderboard"
import "./body.scss"

const Body = () => {

    return(
        <div className="body">

            <div className="body__inner">
                <div className="body__inner__headlinearea">
                    <div className="body__inner__headlinearea__upvote">
                        <img src={require("../../assets/003-arrow-up.png")}></img>
                        <h1>125</h1>

                    </div>
                    <h1>headline area includes up to 50 characters</h1>
                    <div className="body__inner__headlinearea__enterpost">
                        <img src={require("../../assets/create-entry-icon.png")}></img>

                    </div>

                </div>
                <Entry></Entry>
                <Entry></Entry>
            </div>

            <div className="body__leaderboard">
                <Leaderboard></Leaderboard>
            </div>

        </div>
    )

}

export default Body