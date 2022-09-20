import { Routes, Route, NavLink, useLocation, Navigate, useNavigate } from "react-router-dom"
import Entry from "../Entry/Entry"
import Leaderboard from "../Leaderboard/Leaderboard"
import Message from "../Messages/Messages"
import  { collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../../config/firebase";
import "./body.scss"
import { useEffect, useState } from "react";

const Body = () => {

const location = useLocation().pathname.slice(1)
let leaderboard = "white"
let leaderboard2 = "white"
let leaderboard3 = "white"
let leaderboard4 = "white"
if(location === 'total'){
    leaderboard = 'rgb(166, 54, 177)'
}
else if(location === 'entries'){
    leaderboard2 = 'rgb(166, 54, 177)'
}
else if(location === 'upvoted'){
    leaderboard3 = 'rgb(166, 54, 177)'
}
else if(location === 'code'){
    leaderboard4 = 'rgb(166, 54, 177)'
}

const [entries, setEntries] = useState([])
const navigate = useNavigate();
useEffect(()=> {

    const entryCollection = query(collection(db, 'Entries'));
    onSnapshot(entryCollection, (snapshot) => {
        setEntries(snapshot.docs.map(entries => {
    
            return {
                id: entries.id,
                ...entries.data()
            }
            
          }))
       
    })

},[])

const [inputText, setText] = useState("")
const [inputAuthor, setAuthor] = useState("")
const textHandler = (event) => {setText(event.target.value)}
const authorHandler = (event) => {setAuthor(event.target.value)}

const formhandler = (event) =>{event.preventDefault()

    const dt = new Date()
    addDoc(collection(db,'Entries'), {
    entry: inputText,
    author: 'nickname',
    upvote:0,
    date: dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear(),
    query:9
})
return navigate('/')
}




    return(
        <Routes>
<Route path="/" element={
    <>
    
    <div className="body">
        <div className="body__filler"></div>
    <div className="body__inner">
                <div className="body__inner__headlinearea">

                    <div className="body__inner__headlinearea__upvote">

                        <div className="body__inner__headlinearea__upvote__button">
                        <img src={require("../../assets/003-arrow-up.png")}></img>
                        <h1>125</h1>
                        </div>

                    <h1>headline area includes up to 50 characters</h1>
                    </div>
                    
                    <NavLink to='/create' className="body__inner__headlinearea__enterpost">

                        <img alt='test 1 2 ' title='Create Entry'src={require("../../assets/create-entry-icon.png")}></img>

                    </NavLink>

                </div>
                {entries.map( entries => 

                <Entry entry={entries.entry} upvote={entries.upvote} author={entries.author} date={entries.date}></Entry>
                    )}
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

    
        <div className="body__inner__leaderboardpage" >

            <div className="body__inner__leaderboardpage__board ">

                <div className="body__inner__leaderboardpage__board__item" style={{
                    backgroundColor:'black', color: 'white', display:'flex',justifyContent:'space-between', alignItems:'center', padding:'1rem 0rem',height:'4.1rem',width:'100%', padding:'1rem 2.5rem'
                }}>
                    {/* <img style={{
                        marginRight:'1rem', height:'100%'
                    }} src={require("../../assets/best.png")}/> */}
                    <NavLink className='leaderboardlist' style={{textDecoration:'none', color:leaderboard, fontWeight:'bolder'}} to='/total'>most upvoted headlines </NavLink>
                    <NavLink className='leaderboardlist' style={{textDecoration:'none', color:leaderboard2, fontWeight:'bolder'}} to='/entries'> &nbsp;most upvoted entries </NavLink>
                    <NavLink className='leaderboardlist' style={{textDecoration:'none', color:leaderboard3, fontWeight:'bolder'}} to='/upvoted'> &nbsp;most upvoted in total </NavLink>
                    <NavLink className='leaderboardlist' style={{textDecoration:'none', color:leaderboard4, fontWeight:'bolder'}} to='/code'> &nbsp;invitation codes </NavLink>
                    <h1></h1>

                    
                </div>
                <div className="body__inner__leaderboardpage__board__item" style={{width:'85%', margin:'0 auto'}}>
                    <div className="body__inner__leaderboardpage__board__item__userinfo">

                        <h1>1</h1>
                        <img src={require("../../assets/uparrowleader.png")}/>
                        <div className="body__inner__leaderboardpage__board__item__userinfo__profile">

                        </div>
                        <NavLink style={{textDecoration:'none',color:'black',fontWeight:'bold'}} to='/'>nickname</NavLink>

                    </div>
                    <div className="body__inner__leaderboardpage__board__item__userkarma">

                    <h1>xxx karma</h1>
                    

                    </div>
                    
                </div>
                <div className="body__inner__leaderboardpage__board__item" style={{width:'85%', margin:'0 auto'}}>
                    <div className="body__inner__leaderboardpage__board__item__userinfo">

                        <h1>2</h1>
                        <img src={require("../../assets/uparrowleader.png")}/>
                        <div className="body__inner__leaderboardpage__board__item__userinfo__profile">

                        </div>
                        <NavLink style={{textDecoration:'none',color:'black',fontWeight:'bold'}} to='/'>nickname</NavLink>
                    </div>
                    <div className="body__inner__leaderboardpage__board__item__userkarma">

                    <h1>xxx karma</h1>
                    

                    </div>
                    
                </div>
                <div className="body__inner__leaderboardpage__board__item" style={{width:'85%', margin:'0 auto'}}>
                    <div className="body__inner__leaderboardpage__board__item__userinfo">

                        <h1>3</h1>
                        <img src={require("../../assets/uparrowleader.png")}/>
                        <div className="body__inner__leaderboardpage__board__item__userinfo__profile">

                        </div>
                        <NavLink style={{textDecoration:'none',color:'black',fontWeight:'bold'}} to='/'>nickname</NavLink>

                    </div>
                    <div className="body__inner__leaderboardpage__board__item__userkarma">

                    <h1>xxx karma</h1>
                    

                    </div>
                    
                </div>
                <div className="body__inner__leaderboardpage__board__item" style={{width:'85%', margin:'0 auto'}}>
                    <div className="body__inner__leaderboardpage__board__item__userinfo">

                        <p>4</p>
                        <img src={require("../../assets/uparrowleader.png")}/>
                        <div className="body__inner__leaderboardpage__board__item__userinfo__profile">

                        </div>
                        <NavLink style={{textDecoration:'none',color:'black'}} to='/'>nickname</NavLink>

                    </div>
                    <div className="body__inner__leaderboardpage__board__item__userkarma">

                    <p>xxx karma</p>
                    

                    </div>
                    
                </div>
                <div className="body__inner__leaderboardpage__board__item" style={{width:'85%', margin:'0 auto'}}>
                    <div className="body__inner__leaderboardpage__board__item__userinfo">

                        <p>5</p>
                        <img src={require("../../assets/uparrowleader.png")}/>
                        <div className="body__inner__leaderboardpage__board__item__userinfo__profile">

                        </div>
                        <NavLink style={{textDecoration:'none',color:'black'}} to='/'>nickname</NavLink>

                    </div>
                    <div className="body__inner__leaderboardpage__board__item__userkarma">

                    <p>xxx karma</p>
                    

                    </div>
                    
                </div>
                <div className="body__inner__leaderboardpage__board__item" style={{width:'85%', margin:'0 auto'}}>
                    <div className="body__inner__leaderboardpage__board__item__userinfo">

                        <p>6</p>
                        <img src={require("../../assets/uparrowleader.png")}/>
                        <div className="body__inner__leaderboardpage__board__item__userinfo__profile">

                        </div>
                        <NavLink style={{textDecoration:'none',color:'black'}} to='/'>nickname</NavLink>

                    </div>
                    <div className="body__inner__leaderboardpage__board__item__userkarma">

                    <p>xxx karma</p>
                    

                    </div>
                    
                </div>
                <div className="body__inner__leaderboardpage__board__item" style={{width:'85%', margin:'0 auto'}}>
                    <div className="body__inner__leaderboardpage__board__item__userinfo">

                        <p>7</p>
                        <img src={require("../../assets/uparrowleader.png")}/>
                        <div className="body__inner__leaderboardpage__board__item__userinfo__profile">

                        </div>
                        <NavLink style={{textDecoration:'none',color:'black'}} to='/'>nickname</NavLink>

                    </div>
                    <div className="body__inner__leaderboardpage__board__item__userkarma">

                    <p>xxx karma</p>
                    

                    </div>
                    
                </div>
                <div className="body__inner__leaderboardpage__board__item" style={{width:'85%', margin:'0 auto'}}>
                    <div className="body__inner__leaderboardpage__board__item__userinfo">

                        <p>8</p>
                        <img src={require("../../assets/uparrowleader.png")}/>
                        <div className="body__inner__leaderboardpage__board__item__userinfo__profile">

                        </div>
                        <NavLink style={{textDecoration:'none',color:'black'}} to='/'>nickname</NavLink>

                    </div>
                    <div className="body__inner__leaderboardpage__board__item__userkarma">

                    <p>xxx karma</p>
                    

                    </div>
                    
                </div>
                <div className="body__inner__leaderboardpage__board__item" style={{width:'85%', margin:'0 auto'}}>
                    <div className="body__inner__leaderboardpage__board__item__userinfo">

                        <p>9</p>
                        <img src={require("../../assets/uparrowleader.png")}/>
                        <div className="body__inner__leaderboardpage__board__item__userinfo__profile">

                        </div>
                        <NavLink style={{textDecoration:'none',color:'black'}} to='/'>nickname</NavLink>

                    </div>
                    <div className="body__inner__leaderboardpage__board__item__userkarma">

                    <p>xxx karma</p>
                    

                    </div>
                    
                </div>
                <div className="body__inner__leaderboardpage__board__item" style={{width:'85%', margin:'0 auto'}}>
                    <div className="body__inner__leaderboardpage__board__item__userinfo">

                        <p>10</p>
                        <img src={require("../../assets/uparrowleader.png")}/>
                        <div className="body__inner__leaderboardpage__board__item__userinfo__profile">

                        </div>
                        <NavLink style={{textDecoration:'none',color:'black'}} to='/'>nickname</NavLink>

                    </div>
                    <div className="body__inner__leaderboardpage__board__item__userkarma">

                    <p>xxx karma</p>
                    

                    </div>
                    
                </div>
             
             
                
                
                
                        
            </div>
            <div className="body__leaderboard" style={{
                paddingTop:'0',
                display:'none'
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
    <div className="body__filler"></div>
 <div className="body__inner">
             <div className="body__inner__headlinearea" style={{width:'38.8%'}}>
             <div className="body__inner__headlinearea__upvote">

<div className="body__inner__headlinearea__upvote__button">
<img src={require("../../assets/003-arrow-up.png")}></img>
<h1>125</h1>
</div>

<h1>headline area includes up to 50 characters</h1>
</div>

             </div>
           <div className="createentry__area" style={{width:'85%', borderRadius:'9px'}}>
            <div className="createentry__area__header">
                <div style={{display:'flex', alignItems:'center', width:'19%', justifyContent:'space-between'}}>

                <img src={require("../../assets/create-entry-icon.png")}></img>
                <h1>create a entry</h1>
                </div>
                <div>
                <img src={require("../../assets/hate.png")} style={{filter: 'invert(100%)'}}></img>
                </div>

            </div>

                <div className="createentry__area__footer">
                    <form  onSubmit={formhandler}>
                <textarea required='required' onChange={textHandler} placeholder="write here"></textarea>

                    <select>
                    <option>language</option>
                    <option>english</option>
                    <option>turkish</option>
                    <option>german</option>
                    </select>
                    <input type={'submit'} style={{right:'9.2rem'}} value='send' to='/' className="createentry__area__footer__button">
                       
                    </input>
                    </form>

                </div>
           </div>
         </div>

         <div className="body__leaderboard">
            
             <Leaderboard />
         </div>
</div>
</>

}>

</Route>

<Route path="/createheadline" element={
     <>
    
     <div className="body">

     <div className="body__inner">
                
    
                 
               <div className="createheadline__area" style={{borderRadius:'9px 9px 0 0'}}>
                <div className="createheadline__area__header">
                    <div style={{display:'flex', alignItems:'center', width:'21%', justifyContent:'space-between'}}>
    
                    <img src={require("../../assets/plus.png")} ></img>
                    <h1>create a headline</h1>
                    </div>
                    <div>
                    <img src={require("../../assets/hate.png")} style={{filter: 'invert(100%)'}}></img>
                    </div>
    
                </div>
                    <textarea maxlength="50" required='required' placeholder="write here"></textarea>
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
                       
    
                    </div>
               </div>
               <div className="createentry__area" style={{width:'87%'}}>
            <div className="createentry__area__header" >
                <div style={{display:'flex', alignItems:'center', width:'19%', justifyContent:'space-between'}}>

                <img src={require("../../assets/create-entry-icon.png")}></img>
                <h1>create a entry</h1>
                </div>
                <div>
                </div>

            </div>
                <div className="createentry__area__footer">
                    <form  onSubmit={formhandler}>
                <textarea  required='required' onChange={textHandler} placeholder="write here"></textarea>

                    <select>
                    <option>language</option>
                    <option>english</option>
                    <option>turkish</option>
                    <option>german</option>
                    </select>
                    <input type={'submit'} style={{right:'8rem'}} value='send' to='/'className="createentry__area__footer__button">
                       
                    </input>
                    </form>

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

<Route path='/messages' element={

<>
    
<div className="body" style={{padding:'0'}}>
<div className="body__inner " style={{position:'relative',right:'3rem'}}>
           <div style={{marginTop:'4.5rem'}}></div>
            <div className="searchmessage">
                <h1>messages</h1>
                <input placeholder="search in messages"></input>
                <img src={require("../../assets/010-search-interface-symbol.png")}></img>
            </div>
            <Message></Message>
            <Message></Message>
            <Message></Message>
            <Message></Message>
            <Message></Message>

          </div>
      
</div>
</>
}>

</Route>

</Routes>
    )

}

export default Body