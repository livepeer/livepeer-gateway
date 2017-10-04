import React from 'react'
import { observer, inject } from 'mobx-react';

import { Link } from 'react-router'
import logo from '../../static/favicon.svg';


class Placeholder extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <div className="Placeholder">
            <section className="Placeholder-tagline">
              <i className="Placeholder-logo" dangerouslySetInnerHTML={{ __html: logo }} />
              <h1 className="Placeholder-text logoFont">LIVEPEER</h1>
              <p className="Placeholder-text-sub">Decentralized live streaming platform built on Ethereum
                  <br /><a href="https://medium.com/@petkanics/introducing-livepeer-a-decentralized-live-video-broadcast-platform-and-crypto-token-protocol-7eb4b1de47ed">Learn more here</a>
              </p>
            </section>
          </div>
        );
    }
}


export default Placeholder
