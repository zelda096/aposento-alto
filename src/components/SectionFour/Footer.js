import React, { Component } from 'react';

class Footer extends Component {
  render () {
    return (
      <footer id="section-four">
        <article className="article-section-four">
          <h4>About us</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        </article>
        <article className="article-section-four">
          <h4>Quick links</h4>
            <ul className="lista">
              <li>elemento 1</li>
              <li>elemento 2</li>
              <li>elemento 3</li>
              <li>elemento 4</li>
            </ul>
        </article>
        <article className="article-section-four">
          <h4>Get in touch</h4>
        </article>
      </footer>
    )
  }
}

export default Footer;
