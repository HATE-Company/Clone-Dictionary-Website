import LeaderboardItem from "../LeaderboardItem/LeaderboardItem";
import "./leaderboard.scss"



const Leaderboard = () => {

    return(
        <div className="leaderboard">
            <div className="leaderboard__title">
                <img src={require("../../assets/best.png")}></img>
                <h1>leaderboards</h1>
            </div>
            <div className="leaderboard__items">
                <LeaderboardItem title="test"></LeaderboardItem>
                <LeaderboardItem title="test"></LeaderboardItem>
                <LeaderboardItem title="test"></LeaderboardItem>
                <LeaderboardItem title="test"></LeaderboardItem>
            </div>
        </div>
    )

}

export default Leaderboard;