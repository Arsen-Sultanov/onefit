import React from 'react';
import './index.css';
class SerchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itsHover : false
        }
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }
    onFocus() {
        this.setState({itsHover : true})
    }
    onBlur() {
        this.setState({itsHover : false})
    }
    render() { 
        return (
            <div className="header_find">
                <div className={this.state.itsHover ? "label_active" : "serch_icon"}></div>
                <input type="text" placeholder="Поиск" onFocus={this.onFocus} onBlur={this.onBlur} />
            </div>
        );
    }
}

export default SerchInput;