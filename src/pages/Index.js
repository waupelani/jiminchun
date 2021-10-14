import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Jimin Chun's personal website. Penn State graduate, "
    + 'co-founder and CTO of Waupelani.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Welcome</Link></h2>
          <p>
            A collection of thoughts.
          </p>
        </div>
      </header>
      <p> Welcome to my website.
      </p>
    </article>
  </Main>
);

export default Index;
