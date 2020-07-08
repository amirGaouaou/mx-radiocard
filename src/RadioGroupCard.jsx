/* eslint-disable sort-imports */
import { Component, createElement } from "react";
import { hot } from "react-hot-loader/root";
import { Big } from "big.js";
import { RadioGroup, RadioButton, ReversedRadioButton } from "react-radio-buttons";
import "./ui/RadioGroupCard.scss";

class RadioGroupCard extends Component {
    render() {
        const defaultClass = this.props.class;
        const cardContents = this.props.cardContents;
        const {
            orientation,
            icon,
            iconSize,
            iconMarginTop,
            iconLocation,
            iconWidth,
            indexSelected,
            borderWidth,
            defaultColor,
            selectedType,
            selectedTextColor,
            hideBorder,
            hideBorderSelected,
            customSelectedColor,
            disabledColor
        } = this.props;

        const horizontal = orientation === "horizontal";

        let resultClass = `${defaultClass} radio-group-card`;
        if (hideBorder) {
            resultClass += " hide-border";
        }
        if (hideBorderSelected) {
            resultClass += " hide-border-selected";
        }

        let iconCalSize = 0;
        let iconCalInnerSize = 0;

        if (iconSize === "small") {
            iconCalSize = 16;
            iconCalInnerSize = 6;
        } else if (iconSize === "medium") {
            iconCalSize = 20;
            iconCalInnerSize = 10;
        } else {
            iconCalSize = 30;
            iconCalInnerSize = 15;
        }

        const radioButtonOptions = {
            iconLocation: iconLocation,
            iconWidth: iconWidth,
            borderWidth: borderWidth,
            iconMarginTop: iconMarginTop,
            rootColor: defaultColor,
            pointColor: customSelectedColor,
            disabledColor: disabledColor,
            selectedColorType: selectedType,
            iconSize: iconCalSize,
            iconInnerSize: iconCalInnerSize,
            selectedTextColor: selectedTextColor
        };

        return (
            <RadioGroup
                value={indexSelected.value}
                className={resultClass}
                onChange={this.changeAttribute.bind(this)}
                horizontal={horizontal}
            >
                {cardContents.map((contents, index) => {
                    const disabledValue = contents.disabled;
                    return icon === "left" ? (
                        <ReversedRadioButton value={index} disabled={disabledValue} {...radioButtonOptions}>
                            {contents.content.map(item => item)}
                        </ReversedRadioButton>
                    ) : (
                        <RadioButton
                            value={index}
                            disabled={disabledValue}
                            {...radioButtonOptions}
                            hidden={icon === "hidden"}
                        >
                            {contents.content.map(item => item)}
                        </RadioButton>
                    );
                })}
            </RadioGroup>
        );
    }

    changeAttribute(value) {
        const { indexSelected } = this.props;
        // Special type for index 0 it the react component returns a ""
        if (value === "") {
            indexSelected.setValue(new Big(0));
        } else {
            indexSelected.setValue(new Big(value));
        }
    }
}

export default hot(RadioGroupCard);
