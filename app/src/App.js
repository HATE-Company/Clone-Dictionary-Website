import './App.scss';
import BodyWrapper from './components/BodyWrapper/BodyWrapper';
import HeaderMain from './components/HeaderMain/HeaderMain';
import HeaderSecond from './components/HeaderSecond/HeaderSecond';
import InnerBody from './components/InnerBody/InnerBody';
import LeftFrame from './components/LeftFrame/LeftFrame';
import MainWrapper from './components/MainWrapper/MainWrapper';

function App() {
  return (
    <div className="App">

    <MainWrapper>
    <HeaderMain />
    <HeaderSecond />
    <BodyWrapper>
      <LeftFrame />
      <InnerBody />

    </BodyWrapper>
    </MainWrapper>
    
    </div>
  );
}

export default App;
