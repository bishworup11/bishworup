import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;

  .container {
    display: flex;
    gap: 3rem;
    justify-content: space-between;
  }

  .footer__col1 {
    flex: 2;
  }

  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }

  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }

  .copyright {
    background-color: var(--dark-bg);
   
    text-align: center;
    padding: 1rem 0;
    margin-top: 5rem;

    .container {
      display: flex;
      justify-content: center;
      width: 100%;
      height: 5%;
    }

    .para {
      margin: 0;
    }
  }

  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 2rem; /* Adjust gap for better spacing on smaller screens */
    }

    .footer__col1 .para {
      max-width: 100%;
    }

    .copyright {
      .container {
        flex-direction: column;
        align-items: center;
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Bishworup Mollik</h1>
          <PText>
          A web designer and developer from Sylhet, Bangladesh. I create websites with unique designs and optimized performance.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+88012312',
                path: 'tel:+88012312',
              },
              {
                title: 'bishworupmollik@gmail.com',
                path: 'mailto:bishworupmollik@gmail.com',
              },
              {
                title: 'Sylhet, Bangladesh',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'Facebook',
                path: 'http://facebook.com',
              },
              {
                title: 'Twitter',
                path: 'http://twitter.com',
              },
              {
                title: 'Instagram',
                path: 'http://instagram.com',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            Designed By - Bishworup Mollik - © 2024
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
