import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Body from './components/Body/Body';
import Chatbox from './components/Chatbox/Chatbox';
import LeftFrame from './components/LeftFrame/LeftFrame';
import MainHeader from './components/MainHeader/MainHeader';
import MessageBody from './components/MessageBody/MessageBody';
import MessageLeftFrame from './components/MessageLeftFrema/MessageLeftFrame';
import SecondHeader from './components/SecondHeader/SecondHeader';

function App() {
  return (
    <section>
      <div className='headers'>
      <MainHeader />
      <SecondHeader />
      </div>
      <Routes>
      <Route path='*' element={

        
        <div className='content'>
      <LeftFrame />
      <Body />
      </div>
      }>
      </Route>

      <Route path='message' element={
        <>
        <MessageBody>
          <MessageLeftFrame/>
          <Chatbox />
        </MessageBody>
        </>
      }>

      </Route>
    
      </Routes>
    </section>
  );
}

export default App;
