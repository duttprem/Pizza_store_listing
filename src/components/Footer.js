import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: brown;
  color: white;
  display: flex;
  font-size: 18px;
  justify-content: center;
  padding: 25px 0;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>You can Order a Pizza and enjoy every bite Pizza</p>
    </FooterWrapper>
  );
};

export default Footer;
