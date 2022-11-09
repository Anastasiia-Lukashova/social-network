import {Routes, Route, Link} from "react-router-dom";
import './App.css';
import Notfound from './Pages/NoFound/Notfound'
import PostPage from "./Pages/PostPage/PostPage";
import Settings from "./Pages/Settings/Settings";
import Layout from "./components/Layout/Layout";
import Friends from "./components/Friends/Friends";
import Profile from "./components/Profile/Profile";
import Groups from "./components/Groups/Groups";
import Dialogs from "./Pages/Dialogs/DIalogs";
import state from "./components/Redux/state";
import Homepage from "./Pages/Home/Home";

function App(props) {

  return (
    <div className="App">

        <Routes>
            <Route path='/' element={ <Layout />}>
                <Route path='home' element={<Homepage />} />
                <Route path='post' element={
                    <PostPage state={props.state.postPage}/>}/>
                <Route path='dialogs/' element={ () =>
                    <Dialogs state={props.state.messagesPage} /> }/>
            </Route>
            <Route path='/' element={ <Layout /> }>
                <Route path='settings' element={<Settings/>}/>
                <Route path='friends' element={<Friends/>}/>
                <Route path='profile' element={<Profile/>}/>
                <Route path='groups' element={<Groups/>}/>
                <Route path='*' element={<Notfound/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
