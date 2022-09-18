import { Routes, Route, NavLink, useLocation } from "react-router-dom"
import Entry from "../Entry/Entry"
import Leaderboard from "../Leaderboard/Leaderboard"
import "./body.scss"

const Body = () => {

const location = useLocation().pathname.slice(1)
let leaderboard = ""
if(location === 'headline'){
    leaderboard = 'most upvoted headlines'
}
else if(location === 'entries'){
    leaderboard = 'most upvoted entries'
}
else if(location === 'upvoted'){
    leaderboard = 'most upvoted in total'
}
else if(location === 'code'){
    leaderboard = 'invitation codes'
}

    return(
        <Routes>
<Route path="/" element={
    <>
    
    <div className="body">
    <div className="body__inner">
                <div className="body__inner__headlinearea">
                    <div className="body__inner__headlinearea__upvote">

                        <img src={require("../../assets/003-arrow-up.png")}></img>
                        <h1>125</h1>

                    </div>
                    <h1>headline area includes up to 50 characters</h1>
                    <NavLink to='/create' className="body__inner__headlinearea__enterpost">

                        <img src={require("../../assets/create-entry-icon.png")}></img>

                    </NavLink>

                </div>
                <Entry></Entry>
                <Entry></Entry>
            </div>

            <div className="body__leaderboard">
                <Leaderboard></Leaderboard>
            </div>
</div>
</>
}>
</Route>

<Route path="/:name" element={

    <div className="body__leaderboardpage">

    
        <div className="body__inner__leaderboardpage">

            <div className="body__inner__leaderboardpage__board">

                <div className="body__inner__leaderboardpage__board__item" style={{
                    backgroundColor:'black', color: 'white', justifyContent:'flex-start', alignItems:'center'
                }}>
                    <img style={{
                        marginRight:'1rem', height:'180%'
                    }} src={require("../../assets/best.png")}/>
                    <h1>{leaderboard}</h1>

                    
                </div>
                <div className="body__inner__leaderboardpage__board__item">
                    <div className="body__inner__leaderboardpage__board__item__userinfo">

                        <h1>1</h1>
                        <img src={require("../../assets/uparrowleader.png")}/>
                        <div className="body__inner__leaderboardpage__board__item__userinfo__profile">

                        </div>
                        <NavLink to='/'>nickname</NavLink>

                    </div>
                    <div className="body__inner__leaderboardpage__board__item__userkarma">

                    <h1>xxx karma</h1>
                    

                    </div>
                    
                </div>
                <div className="body__inner__leaderboardpage__board__item">
                    <div className="body__inner__leaderboardpage__board__item__userinfo">

                        <h1>2</h1>
                        <img src={require("../../assets/uparrowleader.png")}/>
                        <div className="body__inner__leaderboardpage__board__item__userinfo__profile">

                        </div>
                        <NavLink to='/'>nickname</NavLink>
                    </div>
                    <div className="body__inner__leaderboardpage__board__item__userkarma">

                    <h1>xxx karma</h1>
                    

                    </div>
                    
                </div>
                <div className="body__inner__leaderboardpage__board__item">
                    <div className="body__inner__leaderboardpage__board__item__userinfo">

                        <h1>3</h1>
                        <img src={require("../../assets/uparrowleader.png")}/>
                        <div className="body__inner__leaderboardpage__board__item__userinfo__profile">

                        </div>
                        <NavLink to='/'>nickname</NavLink>

                    </div>
                    <div className="body__inner__leaderboardpage__board__item__userkarma">

                    <h1>xxx karma</h1>
                    

                    </div>
                    
                </div>
                <div className="body__inner__leaderboardpage__board__item">
                    <div className="body__inner__leaderboardpage__board__item__userinfo">

                        <p>4</p>
                        <img src={require("../../assets/uparrowleader.png")}/>
                        <div className="body__inner__leaderboardpage__board__item__userinfo__profile">

                        </div>
                        <NavLink to='/'>nickname</NavLink>

                    </div>
                    <div className="body__inner__leaderboardpage__board__item__userkarma">

                    <p>xxx karma</p>
                    

                    </div>
                    
                </div>
                <div className="body__inner__leaderboardpage__board__item">
                    <div className="body__inner__leaderboardpage__board__item__userinfo">

                        <p>5</p>
                        <img src={require("../../assets/uparrowleader.png")}/>
                        <div className="body__inner__leaderboardpage__board__item__userinfo__profile">

                        </div>
                        <NavLink to='/'>nickname</NavLink>

                    </div>
                    <div className="body__inner__leaderboardpage__board__item__userkarma">

                    <p>xxx karma</p>
                    

                    </div>
                    
                </div>
                <div className="body__inner__leaderboardpage__board__item">
                    <div className="body__inner__leaderboardpage__board__item__userinfo">

                        <p>6</p>
                        <img src={require("../../assets/uparrowleader.png")}/>
                        <div className="body__inner__leaderboardpage__board__item__userinfo__profile">

                        </div>
                        <NavLink to='/'>nickname</NavLink>

                    </div>
                    <div className="body__inner__leaderboardpage__board__item__userkarma">

                    <p>xxx karma</p>
                    

                    </div>
                    
                </div>
                <div className="body__inner__leaderboardpage__board__item">
                    <div className="body__inner__leaderboardpage__board__item__userinfo">

                        <p>7</p>
                        <img src={require("../../assets/uparrowleader.png")}/>
                        <div className="body__inner__leaderboardpage__board__item__userinfo__profile">

                        </div>
                        <NavLink to='/'>nickname</NavLink>

                    </div>
                    <div className="body__inner__leaderboardpage__board__item__userkarma">

                    <p>xxx karma</p>
                    

                    </div>
                    
                </div>
                <div className="body__inner__leaderboardpage__board__item">
                    <div className="body__inner__leaderboardpage__board__item__userinfo">

                        <p>8</p>
                        <img src={require("../../assets/uparrowleader.png")}/>
                        <div className="body__inner__leaderboardpage__board__item__userinfo__profile">

                        </div>
                        <NavLink to='/'>nickname</NavLink>

                    </div>
                    <div className="body__inner__leaderboardpage__board__item__userkarma">

                    <p>xxx karma</p>
                    

                    </div>
                    
                </div>
                <div className="body__inner__leaderboardpage__board__item">
                    <div className="body__inner__leaderboardpage__board__item__userinfo">

                        <p>9</p>
                        <img src={require("../../assets/uparrowleader.png")}/>
                        <div className="body__inner__leaderboardpage__board__item__userinfo__profile">

                        </div>
                        <NavLink to='/'>nickname</NavLink>

                    </div>
                    <div className="body__inner__leaderboardpage__board__item__userkarma">

                    <p>xxx karma</p>
                    

                    </div>
                    
                </div>
                <div className="body__inner__leaderboardpage__board__item">
                    <div className="body__inner__leaderboardpage__board__item__userinfo">

                        <p>10</p>
                        <img src={require("../../assets/uparrowleader.png")}/>
                        <div className="body__inner__leaderboardpage__board__item__userinfo__profile">

                        </div>
                        <NavLink to='/'>nickname</NavLink>

                    </div>
                    <div className="body__inner__leaderboardpage__board__item__userkarma">

                    <p>xxx karma</p>
                    

                    </div>
                    
                </div>
                <div className="body__inner__leaderboardpage__board__item">
                    <div className="body__inner__leaderboardpage__board__item__userinfo">

                        <p>11</p>
                        <img src={require("../../assets/uparrowleader.png")}/>
                        <div className="body__inner__leaderboardpage__board__item__userinfo__profile">

                        </div>
                        <NavLink to='/'>nickname</NavLink>

                    </div>
                    <div className="body__inner__leaderboardpage__board__item__userkarma">

                    <p>xxx karma</p>
                    

                    </div>
                    
                </div>
                <div className="body__inner__leaderboardpage__board__item">
                    <div className="body__inner__leaderboardpage__board__item__userinfo">

                        <p>12</p>
                        <img src={require("../../assets/uparrowleader.png")}/>
                        <div className="body__inner__leaderboardpage__board__item__userinfo__profile">

                        </div>
                        <NavLink to='/'>nickname</NavLink>

                    </div>
                    <div className="body__inner__leaderboardpage__board__item__userkarma">

                    <p>xxx karma</p>
                    

                    </div>
                    
                </div>
             
                
                
                
                        
            </div>
            <div className="body__leaderboard" style={{
                paddingTop:'0'
            }}>
                <Leaderboard></Leaderboard>
            </div>
               

        </div>

    </div>

}>
</Route>

<Route path="/create" element={
 <>
    
 <div className="body">
 <div className="body__inner">
             <div className="body__inner__headlinearea">
                 <div className="body__inner__headlinearea__upvote">
                     <img src={require("../../assets/003-arrow-up.png")}></img>
                     <h1>125</h1>

                 </div>
                 <h1>headline area includes up to 50 characters</h1>
                 <div className="body__inner__headlinearea__enterpost">

                     <img style={{visibility:'hidden'}} src={require("../../assets/create-entry-icon.png")}></img>
                    

                 </div>

             </div>
           <div className="createentry__area">
            <div className="createentry__area__header">
                <div style={{display:'flex', alignItems:'center', width:'20%', justifyContent:'space-between'}}>

                <img src={require("../../assets/create-entry-icon.png")}></img>
                <h1>create a entry</h1>
                </div>
                <div>
                <img src={require("../../assets/hate.png")} style={{filter: 'invert(100%)'}}></img>
                </div>

            </div>
                <textarea placeholder="write here"></textarea>
                <div className="createentry__area__footer">
                    <select>
                    <option>language</option>
                    <option>english</option>
                    <option>turkish</option>
                    <option>german</option>
                    </select>
                    <NavLink to='/'className="createentry__area__footer__button">
                        send
                    </NavLink>

                </div>
           </div>
         </div>

         <div className="body__leaderboard">
            
             <Leaderboard></Leaderboard>
         </div>
</div>
</>

}>

</Route>

<Route path="/createheadline" element={
     <>
    
     <div className="body">
     <div className="body__inner">
                
    
                 
               <div className="createheadline__area">
                <div className="createheadline__area__header">
                    <div style={{display:'flex', alignItems:'center', width:'23%', justifyContent:'space-between'}}>
    
                    <img src={require("../../assets/plus.png")} ></img>
                    <h1>create a headline</h1>
                    </div>
                    <div>
                    <img src={require("../../assets/hate.png")} style={{filter: 'invert(100%)'}}></img>
                    </div>
    
                </div>
                    <textarea placeholder="write here"></textarea>
                    <div className="createheadline__area__footer">
                        <div>

                        <select style={{marginRight:'1.5rem'}}>
                        <option>language</option>
                        <option>english</option>
                        <option>turkish</option>
                        <option>german</option>
                        </select>
                        <select>
                        <option>hashtag</option>
                        <option>news</option>
                        <option>sport</option>
                        <option>nft</option>
                        <option>business</option>
                        <option>travel</option>
                        <option>crypto</option>
                        </select>
                        </div>
                        <NavLink to='/'className="createheadline__area__footer__button">
                            send
                        </NavLink>
    
                    </div>
               </div>
             </div>
    
             <div className="body__leaderboard">
                
                 <Leaderboard></Leaderboard>
             </div>
    </div>
    </>
}>

</Route>

</Routes>
    )

}

export default Body