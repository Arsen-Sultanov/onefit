import React from 'react';
import './index.css';
import HeaderImage from '../../../components/header-image';
import Dash from '../../../components/dash';
import Address from '../../../components/address';
import WorkTime from '../../../components/work-time';
import Limit from '../../../components/limit';
import Buns from '../../../components/buns';
import Slider from '../../../components/slider';
import Helpers from '../../../helpers';

class ClubAbout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : "",
            discription : "",
            working_hours : "",
            main_image : "",
            address : "",
            metro : "",
            instructors : [],
            workouts : []
        }
    }
    componentDidMount(){
        Helpers.getClubAbaut(
            (res)=>{
                let instructorsLength = res.data.relationships.instructors.data.length;
                this.setState({
                    name : res.data.attributes.name,
                    discription : res.data.attributes.description,
                    working_hours : res.data.attributes.working_hours,
                    main_image : res.data.attributes.main_image,
                    address : res.data.attributes.address,
                    metro : res.data.attributes.metro,
                    instructors : res.included.slice(0, instructorsLength),
                    workouts : res.included.slice(instructorsLength)
                })
            }, 
            this.props.match.params.direction
        )
    }
    render() {
        return (
            <main className="main_club">
                <HeaderImage image={this.state.main_image }>
                    <div className="cb_info ">
                        <div className="cbid_dash">
                            <Dash gold="true" silver="true" />
                        </div>
                        <div className="cbi_name">{this.state.name}</div>
                    </div>
                </HeaderImage>
                <div className="club_data">
                    <Address address={this.state.address} metro={this.state.metro}/>
                    <div className="cd_other">
                        <WorkTime time={this.state.working_hours}/>
                        <Limit limit="остаось 10 часов"/>
                    </div>
                    <Buns wifi="true"/>
                </div>
                    <Slider navigationItem={
                            [ 
                                {
                                    nav : "Рассписание",
                                    content : <Slider 
                                                navClass="cn_nav_custom"
                                                customItemClass="cn_item_custom"
                                                customItemActiveClass="cn_itemActive_custom"
                                                navigationItem={
                                                    [
                                                        {
                                                            nav : "Пн",
                                                            content : "контент"
                                                        },
                                                        {
                                                            nav : "Вт",
                                                            content : "контент"
                                                        },
                                                        {
                                                            nav : "Ср",
                                                            content : "контент"
                                                        },
                                                        {
                                                            nav : "Чт",
                                                            content : "контент"
                                                        },
                                                        {
                                                            nav : "Пт",
                                                            content : "контент"
                                                        },
                                                        {
                                                            nav : "Сб",
                                                            content : "контент"
                                                        },
                                                        {
                                                            nav : "Вс",
                                                            content : "контент"
                                                        },
                                                    ]
                                                }
                                            />
                                },
                                {
                                    nav : "Информация",
                                    content : "Это контент"
                                }, 
                                {
                                    nav : "Инструкторы",
                                    content : "Это контент"
                                },
                            ]
                        }
                    />
            </main>
        )
    }
};

export default ClubAbout;