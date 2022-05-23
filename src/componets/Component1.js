import React, { Component } from 'react'
import { StylesLI } from '../styles/Styles'



export class Component1 extends Component{
     render() {
        return(
            <div>
                <h1>Hola estoy dentro de Componente 1</h1>
                <ul>
                    <StylesLI>Uno</StylesLI>
                    <StylesLI>Dos</StylesLI>
                    <StylesLI>Tres</StylesLI>
                 
                </ul>
            </div>
        )
    }
}