import React from 'react';

import { Paragrafo } from '../src/molecules/paragrafo/Paragrafo';

export default {
    title: 'Example/Molecules/Paragrafo',
    component: Paragrafo,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
     // backgroundColor: { control: 'color' },
    },
  };

  const Template = (args) => <Paragrafo {...args} />;
 
  export const PlainParagrafo = Template.bind({});

  PlainParagrafo.args = {
    //label: 'Prova',
    //type: 'reset',
  };

