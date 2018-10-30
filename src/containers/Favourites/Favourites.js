import React, { Component } from "react";
import { Header, Body, Footer, Page } from "./../../layout";

class Favourites extends Component {
    state = {
        userId: Number(this.props.match.params.userId),
        isLoading: true,
        names: []
    };
    render() {
        const headerItems = [
            {
                type: "empty"
            },
            {
                type: "title",
                text: "Rewards"
            },
            {
                type: "empty"
            }
        ];
        const { userId } = this.state;
        return (
            <Page slideFromDirection="none">
                <Header items={headerItems} />
                <Body>Favourites feature coming soon!!</Body>
                <Footer userId={userId} editMode={false} readOnlyMode={false} />
            </Page>
        );
    }
}

export default Favourites;
