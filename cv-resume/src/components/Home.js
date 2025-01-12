import React from 'react';
import { Row, Col, Image, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const Home = () => (
  <section id="home" style={{ textAlign: 'center' }}>
    <Image
      width={150}
      height={150}
      src={`${process.env.PUBLIC_URL}/images/ProfileLI/Profile.jpg`}
      //https://media.licdn.com/dms/image/C4E03AQFgMGEPDo-yTA/profile-displayphoto-shrink_400_400/0/1625102552783?e=1722470400&v=beta&t=jYMSe9xqwssIGv9JBZN2jOd-Oww10Gtv2-YUBM0r-E0
      //src="https://via.placeholder.com/150"
      alt="Luis Ángel Almazán López"
      style={{ borderRadius: '50%', marginTop: '20px' }}
    />
    <Title level={1}>Luis Ángel Almazán López</Title>
    <Paragraph>Electromechanical Engineer and FullStack Developer</Paragraph>
  </section>
);

export default Home;
