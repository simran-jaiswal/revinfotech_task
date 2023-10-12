import { Outlet } from 'react-router-dom';
import SideNav from './components/sidenav/SideNav';
import { Col, Container, Row } from 'react-bootstrap';
import { SidebarContext } from './context/sideBarContext';
import { useState } from 'react';
import logo from './assets/hamburger.svg';
// import logo from './assets/icons/SHIB_Logo.svg';

const MasterPage = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleSideBarVisibility = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      <Container fluid>
        <Row>
          {isOpen && (
            <Col sm={0} md={2}>
              <SideNav />
            </Col>
          )}

          {/* main */}
          <Col as='main' className='content' sm={12} md={isOpen ? 10 : 12}>
            {/* Content */}
            <div className='mobileLogo' onClick={handleSideBarVisibility}>
              <img src={logo} className='me-3' alt='Shibarium' />
            </div>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </SidebarContext.Provider>
  );
};

export default MasterPage;
