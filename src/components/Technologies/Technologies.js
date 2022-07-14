import React from 'react';
import {  DiReact, DiCss3  } from 'react-icons/di';
import { SiHtml5,SiNodeDotJs, SiJavascript  } from 'react-icons/si';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id='tech'>
<SectionDivider/>
<br />
<SectionTitle>Technologies</SectionTitle>
<SectionText>
  I have Worked with wide Range of technologies in the web development .
  From Front-end to Design 
</SectionText>
<List>
  <ListItem>
    <SiJavascript size='3rem'/>
    <ListContainer>
      <ListTitle>Javascript</ListTitle>
    </ListContainer>
  </ListItem>
  <ListItem>
    <DiReact size='3rem'/>
    <ListContainer>
      <ListTitle>React Js</ListTitle>
    </ListContainer>
  </ListItem>
  <ListItem>
    <SiHtml5 size='3rem'/>
    <ListContainer>
      <ListTitle>HTML5</ListTitle>
    </ListContainer>
  </ListItem>
  <ListItem>
    <DiCss3 size='3rem'/>
    <ListContainer>
      <ListTitle>CSS3</ListTitle>
    </ListContainer>
  </ListItem>
  <ListItem>
    <SiNodeDotJs size='3rem'/>
    <ListContainer>
      <ListTitle>Node.js</ListTitle>
    </ListContainer>
  </ListItem>
</List>
</Section>
);

export default Technologies;
