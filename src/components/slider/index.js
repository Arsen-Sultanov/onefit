import React from 'react';
import './index.css';

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            id : 0,
            cnLine : {
                transform : 'translateX(0%)',
                width : 100 / props.navigationItem.length + '%'
            },
            ccCase : {
                width : 100 * props.navigationItem.length + '%'
            },
            ccItem : {
                transform : 'translateX(0%)'
            }
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        let target = event.target;
        let id = target.getAttribute('id');
        this.setState( prevState => {
            console.log('стейт ',prevState);
            return {
                id,
                cnLine : {
                    transform : 'translateX('+ target.getAttribute('id') * 100 +'%)',
                    width : prevState.cnLine.width
                },
                ccItem : {
                    transform : 'translateX(-'+ target.getAttribute('id') * 100 +'%)'
                }
            }
        });
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <div className={this.props.navClass || "club_nav" }>
                    {
                        this.props.navigationItem.map(
                            (item, iter) => ( 
                                    <div 
                                        className={ 
                                            iter == this.state.id ? 
                                            (this.props.customItemClass || "cn_item") + " " + (this.props.customItemActiveClass || "cn_itemActive"): 
                                            this.props.customItemClass || "cn_item"
                                        } 
                                        style={this.props.navStyle}
                                        onClick={this.handleClick} 
                                        id={iter} 
                                        key={iter}
                                    >
                                        {item.nav}
                                    </div> 
                            ) 
                        )
                    }
                    <div className="cn_line" style={this.state.cnLine}></div>
                </div>
                <div className="club_content">  
                    <div className="cc_case" style={this.state.ccCase}>
                        {
                            this.props.navigationItem.map(
                                (item, iter) => ( 
                                    <div className="cc_item" style={this.state.ccItem} key={iter}>
                                        {item.content}
                                    </div> 
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
};

export default Slider;