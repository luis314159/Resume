import React from 'react';
import { Layout, Menu, Button, Typography, Divider } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import Scrollspy from 'react-scrollspy';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Courses from './components/Courses';
import Hobbies from './components/Hobbies';
import Blog from './components/Blog';
import './App.css';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;
const sectionStyle = { textAlign: 'center', padding: '20px' };

function App() {
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Scrollspy 
          items={['home', 'about', 'skills', 'experience', 'education', 'courses', 'resume', 'hobbies', 'blog']} 
          currentClassName="active"
          style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
        >
          <Menu 
            theme="dark" 
            mode="horizontal" 
            style={{ display: 'flex', justifyContent: 'center', flex: 1 }}
          >
            <Menu.Item key="home"><a href="#home">Home</a></Menu.Item>
            <Menu.Item key="about"><a href="#about">About</a></Menu.Item>
            <Menu.Item key="skills"><a href="#skills">My Skills</a></Menu.Item>
            <Menu.Item key="experience"><a href="#experience">Experience</a></Menu.Item>
            <Menu.Item key="education"><a href="#education">Education</a></Menu.Item>
            <Menu.Item key="courses"><a href="#courses">Courses</a></Menu.Item>
            <Menu.Item key="resume"><a href="#resume">Resume</a></Menu.Item>
            <Menu.Item key="hobbies"><a href="#hobbies">Hobbies</a></Menu.Item>
            <Menu.Item key="blog"><a href="#blog">Blog</a></Menu.Item>
          </Menu>
        </Scrollspy>
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <div className="site-layout-content">
          <Home />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Courses />
          <Hobbies />
          <section id="resume" style={sectionStyle}>
            <Divider />
            <Title level={2}>Resume</Title>
            <Button type="primary" icon={<DownloadOutlined />} size="large" href="https://drive.google.com/file/d/1uVW75Q8glvQOd_-E08MHc2JPk22SBZHe/view?usp=sharing" target="_blank">
              Download my Resume
            </Button>
          </section>
          <Blog />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        &copy; 2024 Luis Ángel Almazán López. All Rights Reserved.
      </Footer>
    </Layout>
  );
}

export default App;
