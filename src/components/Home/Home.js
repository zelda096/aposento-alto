import React, { Component } from 'react';

import Image from '../componenttwo/Image';
import Section from '../Sectionone/Section';
import Instituto_fiel from '../sectionone-one/Institutofiel';
import Story from '../Story_aposento/Story_aposento';

class Home extends Component
{
  render()
   {
    return (
      <div className="Home">
        <Image />
        <Story />
        <Section />
        <Instituto_fiel />
      </div>
    );
  }
}

export default Home;
