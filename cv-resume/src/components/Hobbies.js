import React from 'react';
import { Typography, Image, Carousel } from 'antd';

const { Title, Paragraph } = Typography;

const imageSize = 300; // Constante para el tamaño de las imágenes
const sectionStyle = { textAlign: 'center', padding: '20px' }; // Estilo para centrar contenido
const listItemStyle = { listStyleType: 'none', marginBottom: '20px', padding: '10px 0' }; // Estilo para cada elemento de la lista

const Hobbies = () => (
  <section id="hobbies" style={sectionStyle}>
    <Title level={2}>Hobbies</Title>
    <ul style={{ padding: 0 }}>
      <li style={listItemStyle}>
        <Carousel autoplay>
          <Image src={`${process.env.PUBLIC_URL}/images/Hobbies/hobbies2.jpeg`} width={imageSize} alt="Music" />
          {/* Agrega más imágenes aquí si es necesario */}
        </Carousel>
        <Paragraph><strong>Music:</strong> I love music and playing the guitar.</Paragraph>
      </li>
      <li style={listItemStyle}>
        <Carousel autoplay>
          <Image src={`${process.env.PUBLIC_URL}/images/Hobbies/cerro2.jpg`} width={imageSize} alt="Hiking" />
          {/* Agrega más imágenes aquí si es necesario */}
        </Carousel>
        <Paragraph><strong>Hiking:</strong> I really like hiking and outdoor activities.</Paragraph>
      </li>
      <li style={listItemStyle}>
        <Carousel autoplay>
          <Image src={`${process.env.PUBLIC_URL}/images/Hobbies/gym2.jpg`} width={imageSize} alt="Gym" />
          {/* Agrega más imágenes aquí si es necesario */}
        </Carousel>
        <Paragraph><strong>Gym:</strong> I love fitness and bodybuilding, I have competed several times in amateur competitions.</Paragraph>
      </li>
      <li style={listItemStyle}>
        <Carousel autoplay>
          <Image src="https://m.media-amazon.com/images/I/61BRxtp9qtL._AC_UF1000,1000_QL80_.jpg" width={imageSize} alt="12RULES" />
          <Image src="https://m.media-amazon.com/images/I/81oCjqak41L._AC_UF1000,1000_QL80_.jpg" width={imageSize} alt="FRANK" />
          <Image src="https://m.media-amazon.com/images/I/81YkqyaFVEL._AC_UF1000,1000_QL80_.jpg" width={imageSize} alt="ATOMIC" />
          <Image src="https://m.media-amazon.com/images/I/81Y8RNMFWZL._AC_UF1000,1000_QL80_.jpg" width={imageSize} alt="GEN" />
          {/* Agrega más imágenes aquí si es necesario */}
        </Carousel>
        <Paragraph><strong>Reading:</strong> Reading is one of my favorite activities, it's like having a conversation with experts in their fields.</Paragraph>
      </li>
      <li style={listItemStyle}>
        <Carousel autoplay>
          <Image src="https://i.kinja-img.com/image/upload/c_fit,q_60,w_645/9a4de6bc8c9dc73419db604e4488b791.jpg" width={imageSize} alt="Video Games" />
          {/* Agrega más imágenes aquí si es necesario */}
        </Carousel>
        <Paragraph><strong>Video Games:</strong> Though I don't play often nowadays, I enjoy playing a great video game when I have the time.</Paragraph>
      </li>
    </ul>
  </section>
);

export default Hobbies;
