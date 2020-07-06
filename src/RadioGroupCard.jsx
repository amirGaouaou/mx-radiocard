import { Component, createElement } from "react";
import { hot } from "react-hot-loader/root";

import { RadioGroup, RadioButton, ReversedRadioButton } from 'react-radio-buttons';
import "./ui/RadioGroupCard.css";

class RadioGroupCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const defaultClass = this.props.class;
        const cardContents = this.props.cardContents;
        const { orientation, icon, onChange, iconSize} = this.props;

        const horizontal = orientation === "horizontal" ? true : false
        let size = iconSize;
        if (icon === "hidden") {
            size = "0";
        }

        
        return (
            <RadioGroup  className={'radio-group-card'} onChange={() => { console.log('test change')} } horizontal={horizontal}>
                 {
                    cardContents.map((contents, index) => {
                        return (
                            icon === 'left' ? 
                            <ReversedRadioButton value={index} iconSize={size}>
                                {
                                   contents.content.map(item => item)
                                }
                            </ReversedRadioButton> 
                            :
                            <RadioButton value={index} iconSize={size}>
                                {
                                contents.content.map(item => item)
                                }
                            </RadioButton> 
                        )
                    })
                }
            </RadioGroup>

        );
    }
}

export default hot(RadioGroupCard);
