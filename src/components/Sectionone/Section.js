import React, { Component } from 'react';

class Section extends Component {
  render() {
    return (
      <section id="section-one">
          <article className="article-section-one">
            <h4>Ideas</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </article>
          <article className="article-section-one">
            <h4>Make search</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </article>
          <article className="article-section-one">
            <h4>Do the work</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </article>
      </section>
    )
  }
}

export default Section;
