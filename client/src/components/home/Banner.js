import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { Button,Carousel } from 'antd';

const items =[
    {
        key:"1",
        title:"Buy or sell properties",
        content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  ever since the 1500s, when an unknow printer took a gallery of type and scrambled it to make a type specimen book. It has survived  not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    },
    {
        key:"2",
        title:"Buy or sell lands",
        content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  ever since the 1500s, when an unknow printer took a gallery of type and scrambled it to make a type specimen book. It has survived  not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    },
    {
        key:"3",
        title:"Proudly African",
        content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  ever since the 1500s, when an unknow printer took a gallery of type and scrambled it to make a type specimen book. It has survived  not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    },
];
function Banner() {
    return (
        <div id="banner" className="banner-section">
            <Carousel>
                {items.map((item)=>{
                    return(
                        <div key={item.key} className="fluid-container">
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>
                            <div className="btn-group">
                                <Button type="primary" size="large">
                                    Learn More
                                </Button>
                                <Button icon={<SearchOutlined />} size="large">
                                    Search
                                </Button>
                            </div>
                        </div> 
                    );
                })}
            </Carousel>
        </div>
    );
}


export default Banner;
