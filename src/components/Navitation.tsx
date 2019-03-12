import React, {Component} from 'react';
import logo from '../logo.svg';

interface INavigationsProps {
    title?: string;
}

class Navigation extends Component<INavigationsProps, any> {
    constructor(props: INavigationsProps) {
        super(props);
    }

    getTitle(): string {
        return ( this.props.title?  this.props.title : ' New React App')
    }

    render(): JSX.Element {
        return (
            <nav>
                <div className="nav-wrapper blue lighten-2">
                    <div className="row">
                        <div className="col m1">
                            <img src={logo} alt="logo" className="App-logo"/>
                        </div>
                        <div className="col m2">
                            <a href="/" 
                                className="brand-logo">
                                {this.getTitle()}
                            </a>
                        </div>
                        <div className="col m9">
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><a href="../html/secuencia.html">Test Secuencia</a></li>
                                <li><a href="../html/filtros.html">Test Filtros</a></li>
                                <li><a href="../html/index.html">Test Responsive</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;