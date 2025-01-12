import React from 'react';
import { Typography, Row, Col, Image, Divider } from 'antd';

const { Title, Paragraph } = Typography;

const ProgWidth = 120; // Variable para el tamaño de las imágenes
const PyWidth = 150; // Variable para el tamaño de las imágenes
const GitWidth = 150; // Variable para el tamaño de las imágenes
const DBWidth = 150; // Variable para el tamaño de las imágenes
const PLCWidth = 160; // Variable para el tamaño de las imágenes
const MDBheight = 100;
const sectionStyle = { textAlign: 'center', padding: '20px' }; // Estilo para centrar contenido
const titleStyle = { marginBottom: '20px' }; // Estilo para agregar sangría

const Skills = () => (
  <section id="skills" style={sectionStyle}>
    <Title level={2} style={titleStyle}>My Skills</Title>
    <Title level={3} style={titleStyle}>Leadership</Title>
    <Paragraph>With all my experience over the years, I have worked in many teams with people from different areas...</Paragraph>
    <Divider />
    <Title level={3} style={titleStyle}>Programming Languages</Title>
    <Row justify="center" gutter={[32, 32]}>
      <Col><Image src={`${process.env.PUBLIC_URL}/images/programming/python.webp`} width={ProgWidth} alt="Python" /></Col>
      <Col><Image src={`${process.env.PUBLIC_URL}/images/programming/C.png`} width={ProgWidth} alt="C" /></Col>
      <Col><Image src={`${process.env.PUBLIC_URL}/images/programming/JS.png`} width={ProgWidth} alt="JS" /></Col>
      <Col><Image src={`${process.env.PUBLIC_URL}/images/programming/c-2.png`} width={ProgWidth} alt="C#" /></Col>
    </Row>
    <Paragraph style={{ textAlign: 'center' }}>I am proficient in the following programming languages: C, C++, Python, C# (.NET Framework), and JavaScript.</Paragraph>
    <Divider />
    <Title level={3} style={titleStyle}>Advanced Python, Frameworks, and Libraries</Title>
    <Row justify="center" gutter={[32, 32]}>
      <Col><Image src={`${process.env.PUBLIC_URL}/images/python/TF.jpg`} width={PyWidth} alt="tf" /></Col>
      <Col><Image src={`${process.env.PUBLIC_URL}/images/python/pythorch.jpg`} width={PyWidth} alt="pytorch" /></Col>
      <Col><Image src={`${process.env.PUBLIC_URL}/images/python/Scrapy.png`} width={PyWidth} alt="Scrapy" /></Col>
      <Col><Image src={`${process.env.PUBLIC_URL}/images/python/TF.jpg`} width={PyWidth} alt="TF" /></Col>
      <Col><Image src={`${process.env.PUBLIC_URL}/images/python/flask.png`} width={PyWidth} alt="TF" /></Col>
    </Row>
    <Paragraph style={{ textAlign: 'center' }}>TensorFlow, PyTorch, Scikit-learn, NumPy, Scrapy, Django, Flask, BeautifulSoup, Seaborn, Matplotlib, and Pandas.</Paragraph>
    <Divider />
    <Title level={3} style={titleStyle}>Git & GitHub</Title>
    <Row justify="center" gutter={[32, 32]}>
      <Col><Image src={`${process.env.PUBLIC_URL}/images/GitHub/github.webp`} width={GitWidth} alt="Git & GitHub" /></Col>
    </Row>
    <Paragraph style={{ textAlign: 'center' }}>I have been using Git and GitHub for version control and collaboration for the past 7 years.</Paragraph>
    <Divider />
    <Title level={3} style={titleStyle}>Databases</Title>
    <Row justify="center" gutter={[32, 32]}>
      <Col><Image src={`${process.env.PUBLIC_URL}/images/databases/MySQL.png`} width={DBWidth } alt="MySQL" /></Col>
      <Col><Image src={`${process.env.PUBLIC_URL}/images/databases/postgreSQL.jpg`} width={DBWidth } alt="PostgreSQL" /></Col>
      <Col><Image src={`${process.env.PUBLIC_URL}/images/databases/Oracle.png`} width={DBWidth } alt="Oracle" /></Col>
      <Col><Image src={`${process.env.PUBLIC_URL}/images/databases/mongoDB.png`} width={DBWidth } height={MDBheight} alt="MongoDB" /></Col>
    </Row>
    <Paragraph style={{ textAlign: 'center' }}>MySQL, PostgreSQL, Oracle, and MongoDB</Paragraph>
    <Divider />
    <Title level={3} style={titleStyle}>PLC Programming</Title>
    <Row justify="center" gutter={[32, 32]}>
      <Col><Image src={`${process.env.PUBLIC_URL}/images/PLC/siemens.png`} width={PLCWidth} alt="Siemens" /></Col>
      <Col><Image src={`${process.env.PUBLIC_URL}/images/PLC/Schneider-Electric.jpg`} width={PLCWidth} alt="Schneider" /></Col>
      <Col><Image src={`${process.env.PUBLIC_URL}/images/PLC/Delta-logo.png`} width={PLCWidth} alt="Delta" /></Col>
    </Row>
    <Paragraph style={{ textAlign: 'center' }}>Siemens, Schneider, and Delta</Paragraph>
  </section>
);

export default Skills;
