import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Lotto from './lotto/Lotto';
import BusanFestival from './festival/BusanFestival';
import FestivalContents from './festival/FestivalContents';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Todolist from './todo/Todolist';
import Login from './Login';
import { useAtomValue } from 'jotai';
import { loginAtom } from './20/loginAtom';
import Testts from './testts/Testts';

function App() {
  const isLogin = useAtomValue(loginAtom);

  const pageMap = [
    { name: "로그인", url: "/", element: <Login />, isHide: false},
    { name: "로또", url: "/lotto", element: <Lotto />, isHide: false },
    { name: "축제정보", url: "/festival", element: <BusanFestival />, isHide: false },
    { name: "festivalcontent", url: "/festival/content", element: <FestivalContents />, isHide: true },
    { name: "TodoList", url: "/todolist" , element: <Todolist />, isHide: false},
    { name: "Test", url: "/testts" , element: <Testts />, isHide: false},
  ];

  // console.log(pageMap)

  return (
    <BrowserRouter>
      <div className='w-full h-screen flex flex-col overflow-y-hidden'>
        { isLogin ? <Header pageMap={pageMap} /> : <Header pageMap={[]}/>}
        <main className='container mx-auto flex flex-col overflow-auto h-full'>
          {<Routes>
            {
              pageMap.map((item, index) => {
                return <Route path={item["url"]} element={item["element"]} />
              })
            }
          </Routes>}
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App
