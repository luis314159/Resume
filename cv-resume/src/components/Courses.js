import React from 'react';
import { Typography, Row, Col, Image } from 'antd';

const { Title, Paragraph } = Typography;

const imageSize = 300; // Constante para el tamaño de las imágenes
const sectionStyle = { textAlign: 'center', padding: '20px' }; // Estilo para centrar contenido
const listItemStyle = { listStyleType: 'none', marginBottom: '10px', padding: '5px 0' }; // Estilo para cada elemento de la lista

const Courses = () => (
  <section id="courses" style={sectionStyle}>
    <Title level={2}>Courses</Title>
    <ul style={{ padding: 0 }}>
      <li style={listItemStyle}>
        <Image src={`${process.env.PUBLIC_URL}/images/Certifications/festo.png`} width={imageSize} alt="Industrial Automation" />
        <Paragraph>Industrial Automation, Festo</Paragraph>
      </li>
      <li style={listItemStyle}>
        <Image src={`${process.env.PUBLIC_URL}/images/Certifications/festo2.png`} width={imageSize} alt="PLC Programming" />
        <Paragraph>PLC Programming, Festo</Paragraph>
      </li>
      <li style={listItemStyle}>
        <Image src={`${process.env.PUBLIC_URL}/images/Certifications/eplan.png`} width={imageSize} alt="Eplan Electric Design" />
        <Paragraph>Eplan Electric Design, Eplan</Paragraph>
      </li>
      <li style={listItemStyle}>
        <Image src={`${process.env.PUBLIC_URL}/images/Certifications/Solidworks.png`} width={imageSize} alt="SolidWorks Mechanical Design CSWA" />
        <Paragraph>SolidWorks Mechanical Design CSWA, Inteligy</Paragraph>
      </li>
      <li style={listItemStyle}>
        <Image src={`${process.env.PUBLIC_URL}/images/Certifications/Python.png`} width={imageSize} alt="Python Professional" />
        <Paragraph>Python Professional, Platzi</Paragraph>
      </li>
      <li style={listItemStyle}>
        <Image src={`${process.env.PUBLIC_URL}/images/Certifications/Git.jpg`} width={imageSize} alt="Git & GitHub" />
        <Paragraph>Git & GitHub, Platzi</Paragraph>
      </li>
      <li style={listItemStyle}>
        <Image src={`${process.env.PUBLIC_URL}/images/Certifications/Oratoria.jpg`} width={imageSize} alt="Oratory" />
        <Paragraph>Oratory, Platzi</Paragraph>
      </li>
      <li style={listItemStyle}>
        <Image src={`${process.env.PUBLIC_URL}/images/Certifications/OOP.png`} width={imageSize} alt="OOP with Java, Python, C# and JS" />
        <Paragraph>OOP with Java, Python, C# and JS, Platzi</Paragraph>
      </li>
      <li style={listItemStyle}>
        <Image src={`${process.env.PUBLIC_URL}/images/Certifications/Excel.jpg`} width={imageSize} alt="Excel" />
        <Paragraph>Excel</Paragraph>
      </li>
      <li style={listItemStyle}>
        <Image src={`${process.env.PUBLIC_URL}/images/Certifications/pytorch.png`} width={imageSize} alt="PyTorch" />
        <Paragraph>PyTorch</Paragraph>
      </li>
      <li style={listItemStyle}>
        <Image src={`${process.env.PUBLIC_URL}/images/Certifications/CNN.png`} width={imageSize} alt="TensorFlow" />
        <Paragraph>TensorFlow</Paragraph>
      </li>
      <li style={listItemStyle}>
        <Image src={`${process.env.PUBLIC_URL}/images/Certifications/scrapy.png`} width={imageSize} alt="ScraPy" />
        <Paragraph>ScraPy</Paragraph>
      </li>
    </ul>
  </section>
);

export default Courses;
