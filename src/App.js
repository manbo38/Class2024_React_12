import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Main from './Main';
import Product from './Product';
import NotFound from './NotFound';
import Footer from './Footer';
import Test from './Test';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header /><hr/>
            <Routes>
                    {/* 슬래시(/)로 요청하면 Main.js 컴포넌트를 실행 */}
                    <Route path="/" element={<Main />}></Route>

                    {/* /product/1로 요청하면 Product.js 컴포넌트를 실행 */}
                    <Route path="/product/:productId" element={<Product />}></Route>

                    <Route path="/test" element={<Test />} />

                    {/* 일치하는 라우트가 없는 경우 NotFound.js 컴포넌트를 실행 */}
                    <Route path="/*" element={<NotFound />}></Route>
            </Routes><hr/>
            <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
