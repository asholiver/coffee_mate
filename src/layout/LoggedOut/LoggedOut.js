import React from "react";
import { Container, Icon } from "../../components";

const LoggedOut = ({ children }) => {
  return (
    <Container modifiers="l-container--fixed-width">
      <main className="c-home-page">
        <div className="c-logo-container h-spacing-2x-large">
          <Icon icon="app-logo" size="large" classes="c-logo" />
        </div>
        {children}
      </main>
    </Container>
  );
};

export default LoggedOut;
