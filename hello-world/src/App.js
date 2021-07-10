//import logo from './logo.svg';
import './App.css';
import {HelloWorld} from './Component/HelloWorld'
import Welcome from './Component/Welcome'
import Hello from './Component/Hello'
import Message from './Component/Message';
import Counter from './Component/Counter';
import FunctionClick from './Component/FunctionClick';
import ClassClick from './Component/ClassClick';
import ParentComponent from './Component/ParentComponent';
import UserGreeting from './Component/UserGreeting';
import PersonList from './Component/PersonList';
import './Component/appStyle.css'
import styles from './Component/appStyle.module.css'
import Form from './Component/Form';
import LifecycleA from './Component/LifecycleA';
import InputRef from './Component/InputRef';
import FocusInput from './Component/FocusInput';
import ModalRoot from './Component/ModalRoot';
import Hero from './Component/Hero';
import ErrorBoundary from './ErrorBoundary'
import ClickCounter from './Component/ClickCounter';
import HoverCounter from './Component/HoverCouter';
import SecondaryForm from './Component/SecondaryForm';
import RenderProps from './Component/RenderProps';
import ClickCounterForRenderProps from './Component/ClickCounterForRenderProps';
import { UserProvider } from './Component/ContextApi';
import ContextApiA from './Component/ContextApiA';

import PostList from './Component/PostList';
import HookCounter from './ComponentHooks/HookCounter';
import HookCounter2 from './ComponentHooks/HookCounter2';
import StateWithObject from './ComponentHooks/StateWithObject';
import UseEffect1 from './ComponentHooks/UseEffect1';
import ConditionUseEffect from './ComponentHooks/ConditionUseEffect';
import UseEffectRenderOne from './ComponentHooks/UseEffectRenderOne';
import ConditionRendering from './ComponentHooks/ConditionRendering';
import CounterWithUseReducer from './ComponentHooks/CounterWithUseReducer';
import CounterWithUseReducerByObject from './ComponentHooks/CounterWithUseReducerByObject';
import ExampleDate from './ComponentHooks/ExampleDate';







function App() {

  const click=()=>alert("there")
  return (
    <div className="App">
      {/* <h1 className='done'> Error</h1>
      <h1 className={styles.succes}> Success</h1> */}
      {/* <HelloWorld name="Akash" text="Hello By"> This is child prop for testing</HelloWorld>
      <HelloWorld name="Jack" text="Hello By"> <h1>Tesing word passed  </h1><button onClick={click} > Click</button></HelloWorld> */}
      {/* <Welcome name="Class component"/>
      <HelloWorld></HelloWorld> */}
      {/* <Message/> */}
      {/* <Hello/> */}
      {/* <Counter/> */}
      {/* <HelloWorld name="Jack" text="Hello By"> <button onClick={click} > Click</button></HelloWorld> */}
      {/* <FunctionClick/>
      <ClassClick></ClassClick> */}
       {/* <Counter/>   */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <UserGreeting id="1" name="akash"></UserGreeting> */}
       {/* <PersonList></PersonList>  */}
       {/* <Form Title="Welcome to React form"></Form> */}
       {/* <SecondaryForm></SecondaryForm> */}
       {/* <LifecycleA></LifecycleA> */}

       {/* <InputRef></InputRef>
       <FocusInput/> */}
       {/* <ModalRoot></ModalRoot> */}
       {/* <ErrorBoundary></ErrorBoundary> */}
       {/* <ClickCounter game="Badminton"></ClickCounter>
       <HoverCounter></HoverCounter> */}

       {/* <RenderProps  render = {(count, handle)=>{
       return <ClickCounterForRenderProps currentCount={count} handler={handle}></ClickCounterForRenderProps>}}/>
        */}
       
        {/* <UserProvider value={["akash","David"]} second="done">
          <ContextApiA></ContextApiA>
        </UserProvider> */}
        {/* <PostList></PostList> */}
          {/* React Hooks  */}
        {/* <HookCounter2></HookCounter2> */}
        {/* <StateWithObject></StateWithObject> */}
        {/* <UseEffect1></UseEffect1> */}
        {/* <ConditionUseEffect></ConditionUseEffect> */}
        {/* <UseEffectRenderOne></UseEffectRenderOne> */}
        {/* <ConditionRendering></ConditionRendering> */}
        {/* <CounterWithUseReducer></CounterWithUseReducer> */}
        {/* <CounterWithUseReducerByObject></CounterWithUseReducerByObject> */}
        <ExampleDate></ExampleDate>
        

    </div>
  );
}

export default App;
