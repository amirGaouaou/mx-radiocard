import { Component, createElement } from "react";

export class preview extends Component {
    render() {
        return <div sampleText={this.props.sampleText} />;
    }
}

export function getPreviewCss() {
    return require("./ui/RadioGroupCard.scss");
}
