import React, {Component} from 'react';
import NavMenu from "../../components/menu";

export default class Home extends Component{
    render() {
        return(
            <div>
                <NavMenu/>
                <div>home</div>
            </div>
        );
    }
}