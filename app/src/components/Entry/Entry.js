import { useEffect, useState } from "react";
import  { collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../../config/firebase";
import "./entry.scss"


const Entry = (props) => {

    const [entries, setEntries] = useState([])

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

    const entry = () => {
        console.log(entries)
    }
    const [upvote, setUpvote] = useState(props.upvote)
    const upvoteHandler= () => {
        return setUpvote(upvote+1)

    }
    return(
        <div className="entry" onClick={entry}>
            <div className="entry__text">

            <p>{props.entry}</p>
            </div>

            <div className="entry__footer">
                <div className="entry__footer__left">

                    <div className="entry__footer__upvote">
                    <img onClick={upvoteHandler} src={require("../../assets/003-arrow-up.png")}></img>
                    <h1>{upvote}</h1>
                    </div>

                    <div className="entry__footer__reply">
                        <p style={{position:'relative', left:'-0.0rem'}}>reply</p>
                        <p> 23 replies</p>

                    </div>
                </div>
                <div className="entry__footer__right">
                <div className="entry__footer__right__userinfo">
                    <p>{props.author}</p>
                    <p>{props.date} &nbsp; &nbsp;--:--pm</p>

                </div>
                    <div className="entry__footer__right__userpicture">

                    </div>
                </div>
                </div>

                <div className="replyarea ">
                    <div className="replyarea__inner">

                        <input placeholder="your reply"></input>
                        <div className="send"></div>

                    </div>


                </div>
        </div>
    )

}

export default Entry;