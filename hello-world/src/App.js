import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import StyleSheet from './components/Stylesheet'
import Inline from './components/Inline'
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';

function App() {
  return (
    <div className="App">
      <RefsDemo/>
      {/* <ParentComp /> */}
      {/* <Table/> */}
      {/* <FragmentDemo /> */}
      {/* <LifecycleA /> */}
      {/* <Form /> */}
      {/* <h1 className = 'error'>Error</h1> */}
      {/* <h1 className = {styles.sucess}>Sucess</h1> */}
      {/* <Inline/> */}
      {/* <StyleSheet primary={true}/> */}
      {/* <NameList /> */}
      {/* <UserGreeting/> */}
      {/* <ParentComponent/> */}
      {/* <EventBind /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name = "Faker" heroName = "Batman"> */}
        {/* <p>This is Children props</p> */}
        {/* <button>Action</button> */}
      {/* </Greet> */}
      {/* <Greet name = "Alan" heroName = "Superman"> */}
      {/* <button>Action</button> */}
      {/* </Greet> */}
      {/* <Greet name = "just" heroName = "Wonder Wonman"/> */}
      {/* <Welcome name = "Faker" heroName = "Batman"/> */}
      {/* <Welcome name = "Alan" heroName = "Superman"/> */}
      {/* <Welcome name = "just" heroName = "Wonder Wonman"/> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;
