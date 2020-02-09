import React, {Component} from 'react'

class LoginButton extends Component{
    render(){
        return <button>Iniciar Sesión</button>
    }
}

class LogoutButton extends Component{
    render(){
        return( 
        <div>
            <button>Cerrar sesión</button>
            <p>Bienvenido, usuario</p>
        </div>
        )
    }
}

class ConditionalSection extends Component{
    constructor(){
        super()
        this.state = {
            isUserLogged: true
        }
    }
    
    render(){
    
        return(
            <div>
                <h4>Conditional rendering</h4>
                {this.state.isUserLogged ? <LogoutButton/> : <LoginButton/>}
            </div>
        )
    }
}

class Form extends Component{
    constructor(){
        super()
        this.state = {
            inputName: '',
            inputTwitter: '@',
            inputTerms: true
        }
    }
    handleSubmit = e =>{
        e.preventDefault()
        alert(this.state.inputName)
        alert(this.state.inputTwitter)
    }


    handleChange = e =>{
        alert(e.target.checked)
        this.setState({inputTerms: e.target.checked})
    }
        
    render(){
        return(
            <div>
                <h4>Formularios</h4>

                <form onSubmit={this.handleSubmit}> 
                    <p>
                        <label htmlFor='name' >Nombre: </label>
                        <input
                            id = 'name'
                            name = 'username'
                            placeholder = 'Introduce el nombre'
                            onChange = {e => this.setState({inputName: e.target.value})}
                            ref = {inputElement => this.inputName = inputElement}
                            value = {this.state.inputName}
                        />
                    </p>

                    <p>
                        <label htmlFor='twitter'>Twitter: </label>
                        <input
                            id = 'twitter'
                            name = 'twitterAccount'
                            onChange = {e => this.setState({inputTwitter: e.target.value})}
                            placeholder = 'Introduce tu Twitter'
                            value = {this.state.inputTwitter}
                        />
                    </p>

                    <p>
                        <label>
                            <input 
                            id = 'twitter'
                            name = 'check'
                            type = 'checkbox'
                            onChange={this.handleChange} 
                            checked={this.state.inputTerms}/>
                            Aceptar
                        </label>
                    </p>


                    <button>Enviar</button>
                </form>
            </div>
        )
    }
}

export default Form;