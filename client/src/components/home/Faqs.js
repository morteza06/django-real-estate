import React from 'react'
import { Button, Collapse } from 'antd'

const {Panel}= Collapse

function Faqs() {
    return (
        <div id="faq" className="block faq-block">
            <div className="fluid-contanier">
                <div className="title-section">
                    <h2>Frequently Asked Questions</h2>
                    <p>
                        What are the most Frequently asked questins
                        regarding
                        properties?
                    </p>
                </div>
                <Collapse defaultActiveKey={"1"}>
                    <Panel header="How do I find the right property?">
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting 
                        industry. Lorem Ipsum has been the industry's standard dummy text 
                        ever since the 1500s, when an unknow printer took a gallery of type 
                        and scrambled it to make a type specimen book. It has survived 
                        not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                        </p>
                    </Panel>
                    <Panel header="How do I know I can trust your agents?">
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting 
                        industry. Lorem Ipsum has been the industry's standard dummy text 
                        ever since the 1500s, when an unknow printer took a gallery of type 
                        and scrambled it to make a type specimen book. It has survived 
                        not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                        </p>
                    </Panel>
                    <Panel header="Who are your major clients?">
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting 
                        industry. Lorem Ipsum has been the industry's standard dummy text 
                        ever since the 1500s, when an unknow printer took a gallery of type 
                        and scrambled it to make a type specimen book. It has survived 
                        not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                        </p>
                    </Panel>
                    <Panel header="How do I get in touch?">
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting 
                        industry. Lorem Ipsum has been the industry's standard dummy text 
                        ever since the 1500s, when an unknow printer took a gallery of type 
                        and scrambled it to make a type specimen book. It has survived 
                        not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                        </p>
                    </Panel>
                    <Panel header="Do I need to create an account?">
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting 
                        industry. Lorem Ipsum has been the industry's standard dummy text 
                        ever since the 1500s, when an unknow printer took a gallery of type 
                        and scrambled it to make a type specimen book. It has survived 
                        not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                        </p>
                    </Panel>
                </Collapse>
                <div className="quick-support">
                    <h3>Want expedited support?</h3>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting 
                        industry. Lorem Ipsum has been the industry's standard dummy text 
                        ever since the 1500s, when an unknow printer took a gallery of type 
                        and scrambled it to make a type specimen book. It has survived 
                        not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.                       
                    </p>
                    <Button type="primary" size="large">
                        <i className="fas fa-envelope"></i>Email your question!
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Faqs
