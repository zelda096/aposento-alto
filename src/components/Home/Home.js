import React, { Component } from 'react';

import Image from '../componenttwo/Image';
import Section from '../Sectionone/Section';
import Instituto_fiel from '../sectionone-one/Institutofiel';

class Home extends Component
{
  render()
   {
    return (
      <div className="Home">
        <Image />
        <Section />
        <Instituto_fiel />
      </div>
    );
  }
}

export default Home;
