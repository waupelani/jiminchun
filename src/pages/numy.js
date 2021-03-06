import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

import Main from '../layouts/Main';

// uses babel to load contents of file
const markdown = raw('../data/numy.md');

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const Tweet = () => (
  <Main
    title="주미누미코믹스"
    description="뚝딱이와툴툴이"
  >
    <article className="post markdown" id="yes">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/naval-tweet">벌미~</Link></h2>
        </div>
      </header>
      <ReactMarkdown
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      />
    </article>
  </Main>
);

export default Tweet;
