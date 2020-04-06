import React, {Component} from 'react';
import NavMenu from "../../components/menu";

export default class Admin extends Component{
    render() {
        return(
            <div>
                <NavMenu/>
                <div>admin</div>
            </div>
        );
    }
}