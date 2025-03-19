import React from 'react';
import './Content.css'
import { Routes, Route } from 'react-router-dom'
import About from "../../views/examples/About";
import Home from "../../views/examples/Home";
import NotFound from "../../views/examples/NotFound";
import Param from "../../views/examples/Param";


const Content = () => {
    return (
        <main className="Content">
            <Routes>
                <Route  path='/' element={<Home/>}/>
                <Route  path='/about' element={<About />}/>
                <Route path="/param/:id" element={<Param />} />
                <Route path="*" element={<NotFound />} />

            </Routes>
            {/*<Routes>*/}
            {/*    <Route path="/about" component={<About />} />*/}
            {/*     />*/}
            {/*    <Route path="/" component={<Home />} />*/}
            {/*    */}
            {/*</Routes>*/}
        </main>
    )
}

export default Content