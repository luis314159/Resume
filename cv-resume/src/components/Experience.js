import React from 'react';
import { Typography, Row, Col, Image, Divider } from 'antd';

const { Title, Paragraph } = Typography;

const imageSize = 250; // Constante para el tamaño de las imágenes
const sectionStyle = { textAlign: 'center', padding: '20px' }; // Estilo para centrar contenido

const Experience = () => (
  <section id="experience" style={sectionStyle}>
    <Title level={2}>Experience</Title>
    <div>
      <Title level={3}>AI and Software developer at Visteon, Chihuahua</Title>
      <Row justify="center">
        <Col>
          <Image src={`${process.env.PUBLIC_URL}/images/Works/visteon-vector-logo.png`} width={imageSize} alt="Visteon" />
        </Col>
      </Row>
      <Paragraph>June 2024 - Present</Paragraph>
      <Paragraph>Computer vission and LLM development for diferent aplications using, TF, 
      pytorch, langchain, hugingface and azure ML.</Paragraph>
      <Divider />
    </div>
    <div>
      <Title level={3}>Professor at La Salle Chihuahua</Title>
      <Row justify="center">
        <Col>
          <Image src={`${process.env.PUBLIC_URL}/images/Works/4_IMAGOTIPO_LASALLE_CHIHUAHUA_COLOR_RGB_2020.png`} width={imageSize*2} alt="Professor at La Salle" />
        </Col>
      </Row>
      <Paragraph>January 2023 - Present</Paragraph>
      <Paragraph>Subjects: Artificial Intelligence, Discrete Mathematics, Differential Equations, Instrumentation and Control, Mechanical Design, Dynamics, Microcontrollers (PICs) and Signal Processing.</      Paragraph>
      <Divider />
    </div>
    <div>
      <Title level={3}>Data Engineer and ML Engineer at Leading Tech, Chihuahua</Title>
      <Row justify="center">
        <Col>
          <Image src={`${process.env.PUBLIC_URL}/images/Works/lead.jpg`} width={imageSize} alt="Data Engineer at Leading Tech" />
        </Col>
      </Row>
      <Paragraph>July 2023 - April 2024</Paragraph>
      <Paragraph>Web scraping various online news outlets for consulting on public figure/company image or acceptance issues, using frameworks and libraries such as Scrapy, NLTK, Selenium and TensorFlow.</Paragraph>
      <Divider />
    </div>
    <div>
      <Title level={3}>Electromechanical Engineer at FPA, Chihuahua</Title>
      <Row justify="center">
        <Col>
          <Image src={`${process.env.PUBLIC_URL}/images/Works/FPA.webp`} width={imageSize} alt="Electromechanical Engineer at FPA" />
        </Col>
      </Row>
      <Paragraph>July 2021 - January 2023</Paragraph>
      <Paragraph>In charge of automation projects with PLC, mechanical design, CAM programming, and customer service engineering tasks.</Paragraph>
      <Divider />
    </div>
    <div>
      <Title level={3}>Electromechanical Maintenance Engineer at Interceramic, Chihuahua</Title>
      <Row justify="center">
        <Col>
          <Image src={`${process.env.PUBLIC_URL}/images/Works/interceramic.webp`} width={imageSize} alt="Electromechanical Maintenance Engineer at Interceramic" />
        </Col>
      </Row>
      <Paragraph>January 2021 - July 2021</Paragraph>
      <Paragraph>Complete electromechanical maintenance of the plant.</Paragraph>
      <Divider />
    </div>
    <div>
      <Title level={3}>CNC Programmer, Chihuahua</Title>
      <Row justify="center">
        <Col>
          <Image src={`${process.env.PUBLIC_URL}/images/Works/Semain.png`} width={imageSize} alt="CNC Programmer" />
        </Col>
      </Row>
      <Paragraph>August 2020 - January 2021</Paragraph>
      <Paragraph>CNC lathe and mill programming with CAMWorks and BobCam.</Paragraph>
      <Divider />
    </div>
    <div>
      <Title level={3}>Electric Supervisor at Electric Installations Delicias, Delicias</Title>
      <Row justify="center">
        <Col>
          <Image src={`${process.env.PUBLIC_URL}/images/Works/Electrical4.jpg`} width={imageSize} alt="Electric Supervisor" />
        </Col>
      </Row>
      <Paragraph>August 2018 - July 2020</Paragraph>
      <Paragraph>PLC programming and industrial automation.</Paragraph>
      <Divider />
    </div>
  </section>
);

export default Experience;

