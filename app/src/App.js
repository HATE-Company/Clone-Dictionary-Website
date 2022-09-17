import './App.scss';
import Body from './components/Body/Body';
import LeftFrame from './components/LeftFrame/LeftFrame';
import MainHeader from './components/MainHeader/MainHeader';
import SecondHeader from './components/SecondHeader/SecondHeader';

function App() {
  return (
    <section>
      <div className='headers'>
      <MainHeader />
      <SecondHeader />
      </div>
      <div className='content'>
      <LeftFrame />
      <Body />
      </div>
    </section>
  );
}

export default App;
