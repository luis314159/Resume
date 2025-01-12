import React from 'react';
import { Typography, Button } from 'antd';
import { LinkedinOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const About = () => (
  <section id="about" style={{ textAlign: 'center', padding: '20px' }}>
    <Title level={2}>About</Title>
    <Paragraph><strong>Fullname:</strong> Luis Ángel Almazán López</Paragraph>
    <Paragraph><strong>Email:</strong> 14400@ulsachihuahua.edu.mx</Paragraph>
    <Paragraph><strong>Location:</strong> Chihuahua, Chihuahua (Availability for relocation)</Paragraph>
    <Paragraph><strong>Phone:</strong> 6145636233</Paragraph>
    <Paragraph>
      <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/luis-ángel-almazán-lópez" target="_blank" rel="noopener noreferrer">
        Luis Ángel Almazán López
      </a>
    </Paragraph>
    <Button type="primary" icon={<LinkedinOutlined />} size="large" href="https://www.linkedin.com/in/luis-ángel-almazán-lópez" target="_blank">
      Visit my LinkedIn
    </Button>
    <br /><br />
    <Paragraph>
    My name is Ángel Almazán, I am an electromechanical engineer with a specialization in industrial automation and I also have studies in computer science. Throughout my life, I have worked in many fields, both related and unrelated to my profession, such as dishwashing, music production, various buying and selling activities, gym coaching, electromechanical maintenance, PLC programming, electrical installations, home automation, solar panel installation, mechanical design, CNC programming, and in recent years, teaching in higher education, data science, and full-stack web development.

I define myself as a very curious person with a great hunger to learn, so I am always acquiring new knowledge relevant to my career or interests that allow me to contribute something to society.
    </Paragraph>
  </section>
);

export default About;
