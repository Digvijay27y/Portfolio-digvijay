import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row padding>
   <LeftSection>
     <SectionTitle main center>
     Hi, I am Digvijay Yadav.<br />
      
     </SectionTitle>
     <SectionText>
     I am  a MERN stack developer  with a keen eye for creating interactive UI, bringing products to life.
     </SectionText>
     <Button onClick={()=>window.location = 'https://www.linkedin.com/in/digvijay-yadav-2a0529168'}>Hire Me!</Button>
   </LeftSection>
 

 </Section>
);

export default Hero;