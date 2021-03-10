import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Erro extends Component{
    render(){
        return(
            <div>
                <h3>Ops, Página não encontrada!</h3>
                <p>Voltar para <Link to="/">Home</Link></p>
            </div>
        );
    }
}

export default Erro;