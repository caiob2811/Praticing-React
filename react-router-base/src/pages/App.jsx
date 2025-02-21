import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import "../../src/styles/styles.css"

export default function App() {
    return (
        <div>
            <h1>Projeto Curso Router - tudo passo a passo</h1>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sobre' element={<About />} />
                <Route path='/contatos' element={<Contact />} />
            </Routes>
        </div>
    )
}


// <Route path='/'/> o barra sempre é o home, em toda aplicação do lado do cliente funciona assim
// <Route path='/contatos'/> assim que eu digitar /contatos vai para o elemento(página contact)