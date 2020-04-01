import React, { Component } from 'react';

//Método de importção de classe para compodentes
class TechList extends Component {

    state = {
        techs: [
            'NodeJS',
            'React',
            'React Native'
        ]
    };

    //A criação do metodo render() é obrigatório
    render() {

        console.log(this.state);

        return (

            <ul>
                <li>NodeJS</li>
                <li>React</li>
                <li>React Native</li>

            </ul>

        )
    }

}

export default TechList;
