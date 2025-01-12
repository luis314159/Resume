import React from 'react';
import { Typography, Row, Col, Image, Divider } from 'antd';

const { Title, Paragraph } = Typography;

const imageSize = 200; // Constante para el tamaño de las imágenes
const sectionStyle = { textAlign: 'center', padding: '20px' }; // Estilo para centrar contenido

const Education = () => (
  <section id="education" style={sectionStyle}>
    <Title level={2}>Education</Title>
    <div>
      <Title level={3}>Engineer, Instituto Tecnológico de Delicias, Delicias</Title>
      <Row justify="center">
        <Col>
          <Image src={`${process.env.PUBLIC_URL}/images/schools/itDelicias-mostrar.png`} width={imageSize*2} alt="Instituto Tecnológico de Delicias" />
        </Col>
      </Row>
      <Paragraph>August 2016 - January 2021</Paragraph>
      <Paragraph>Graduated in 9 semesters with the best average of the LVIII generation.</Paragraph>
      <Divider />
    </div>
    <div>
      <Title level={3}>Master in Computer Engineering, UACH, Chihuahua</Title>
      <Row justify="center">
        <Col>
          <Image src={`${process.env.PUBLIC_URL}/images/schools/UACH.png`} width={imageSize} alt="UACH" />
        </Col>
      </Row>
      <Paragraph>January 2022 - December 2023</Paragraph>
      <Paragraph>Thesis on machine learning in audio recognition (Few-shot learning).</Paragraph>
    </div>
  </section>
);

export default Education;
