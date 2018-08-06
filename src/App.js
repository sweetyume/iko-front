import React, {Component} from "react";
import  Button from './components/Button/Button';
import Header from './components/Header/Header';
require('./app.scss');

class App extends Component {
    constructor(){
        super();
        this.state = {users: []}
    }
    componentDidMount() {
        fetch('/all')
        .then(res => res.json())
        .then(users =>this.setState({users}));
    }
    render() {
        return (
            <div>
                <p>Iko Project starting</p>
                <Header />
                <Button />
                <p>users</p>
                {this.state.users.map(user =>
                    <div key={user.user_id}>
                        <p>name: {user.user_lastname}</p>
                        </div>
                )}
            </div>
        );
    }  
}
export default App;
