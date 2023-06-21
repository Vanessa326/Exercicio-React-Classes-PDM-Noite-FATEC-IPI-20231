import React from 'react'
import ReactDOM from 'react-dom'
import '@fortawesome/fontawesome-free/css/all.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

class App extends React.Component {
    constructor(props){
        super(props)
        this.state={
            valorSorteado: Array(6).fill(<i className="fas fa-money-bill-1-wave" ></i>)
        }
    }


    sorteio = () => {
        
        const listItems = Array.from({length: 6}, () => Math.floor(Math.random() * 60) + 1);

        this.setState({valorSorteado: listItems})

    }

    render(){
        return(
            <Card className="container p-2 mt-2" border="success" as="h5">
                <Card.Header>MEGA SENA</Card.Header>
                <Card.Body className="mx-auto" >
                    <Card.Title >
                        Números do sorteio
                    </Card.Title>
                        <ListGroup horizontal >
                        {this.state.valorSorteado.map((valor) => <ListGroup.Item variant="success">{valor}</ListGroup.Item>)}

                        </ListGroup>

                    
                </Card.Body>
                <Button 
                        variant="success"
                        onClick={this.sorteio} 
                        >
                        Gerar Jogo!
                    </Button>
            </Card>
        )
    }
}
    

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)