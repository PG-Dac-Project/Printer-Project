
import React from 'react';

function About() {
  const containerStyle = {
    backgroundColor: '#f4f4f4',
  };

  const contentStyle = {
    textAlign: 'center',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
    maxWidth: '1500px',
    margin: 'auto',
  };

  const headerStyle = {
    marginBottom: '1.5rem',
  };

  const headingStyle = {
    color: '#ffffff',
    fontSize: '2.5rem',
  };

  const textStyle = {
    color: '#666',
    fontSize: '1.1rem',
    lineHeight: '1.6',
  };




    const highlightStyle = {
      backgroundColor: '',
      padding: '0.2rem',
      borderRadius: '4px',
    };

  return (
    <div className="container-fluid" style={containerStyle}>
      <div className="about-us" style={contentStyle}>
        <div className="about-header" style={headerStyle}>
          <h1 style={headingStyle}>About Us</h1>
        </div>
        <div className="about-text" style={textStyle}>
          <p style={{color:"#ffffff"}}>
          <span style={highlightStyle}>
            Welcome to our Printer Support Service! We are dedicated to providing top-notch printer
            troubleshooting and maintenance solutions to ensure your printing experience is seamless.
            Our team of experts is here to assist you with any printer-related issues you may encounter.
            At PrinterSupportPro, we specialize in providing comprehensive printer support services to ensure
            your printing tasks run smoothly. With a passion for technology and a commitment to excellence, we
            are your trusted partners in resolving printer-related issues and maximizing your printing experience.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
