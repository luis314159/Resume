import React from 'react';
import { Typography, Button } from 'antd';

const { Title } = Typography;

const sectionStyle = { textAlign: 'center', padding: '20px' }; // Estilo para centrar contenido

const Blog = () => (
  <section id="blog" style={sectionStyle}>
    <Title level={2}>Blog</Title>
    <Button type="primary" href="https://veil-melody-12f.notion.site/Blog-Luis-ngel-Almaz-n-L-pez-8e783dbe033f40cb967d90ee295129d7?pvs=4" target="_blank">
      Visit my Blog
    </Button>
  </section>
);

export default Blog;
