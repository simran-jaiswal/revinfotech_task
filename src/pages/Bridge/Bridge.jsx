import './Bridge.scss';
import warningImg from '../../assets/bridge/warning.svg';
import gasFee from '../../assets/bridge/gasFee.svg';
import gasFee2 from '../../assets/bridge/gas-fee2.svg';
import appsIcon from '../../assets/icons/Apps.png';
import downArrow from '../../assets/icons/downArrow.svg';
import MetaMask_Fox from '../../assets/MetaMask_Fox.png';
import shib24 from '../../assets/bridge/shib-24.svg';
import eth24 from '../../assets/bridge/eth-24.svg';
import eth18 from '../../assets/bridge/eth-18.svg';
import dropdown2 from '../../assets/bridge/dropdown-2.svg';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

/* eslint-disable react/prop-types */
const depositContentList = [
  {
    title: 'Transfer Overview',
    subheading: 'The deposit process consists of a single transaction',
    warning: false,
    subheading2: '',
    hyperlinkText: '',
    link: '',
  },
  {
    title: 'Transfer Time',
    subheading:
      'Moving your funds from Ethereum to Polygon take up to 10 - 15 Minutes',
    warning: false,
    subheading2: '',
    hyperlinkText: '',
    link: '',
  },
  {
    title: 'Delegation/Staking Advice:',
    subheading:
      'Delegation/Staking takes place on Ethereum. Do not deposit funds to Shibarium for this purpose.',
    subheading2: 'To delegate or stake please visit the',
    hyperlinkText: 'Staking UI',
    link: '',
    warning: true,
  },
];


/* eslint-disable react/prop-types */
const withdrawContentList = [
  {
    title: 'Withdraw Overview',
    subheading: 'The deposit process consists of three transactions',
    warning: false,
    subheading2: '',
    hyperlinkText: '',
    link: '',
  },
  {
    title: 'Withdraw Time:',
    subheading:
      'Moving your funds from Shibarium to Ethereum take up to 60 mins to 3 hours',
    warning: false,
    subheading2: '',
    hyperlinkText: '',
    link: '',
  }
];
const TextView = ({
  title,
  subheading,
  subheading2,
  hyperlinkText,
  warning,
}) => (
  <div className='text-view'>
    <div className='text-title'>
      {warning && <img src={warningImg} alt='warning' className='warning' />}{' '}
      {title}
    </div>
    <div className='text-subheading'>{subheading}</div>
    {subheading2 && (
      <div className='text-subheading'>
        {subheading2}{' '}
        {hyperlinkText && <span className='hyperlink'>{hyperlinkText}</span>}.
      </div>
    )}
  </div>
);

const Bridge = () => {
  const [selectedTab, setSelectedTab] = useState('deposit');

  const changeSelectedTabBridge = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <Container className='bridge-container'>
      <Buttons />
      <Row className='bridge-inner-container'>
        <Col className='overview' md={5} sm={12}>
          <div>
            <div className='bridge-heading'>Shibarium Bridge</div>
            {selectedTab === 'deposit' && depositContentList.map((content, i) => (
              <TextView key={i} {...content} />
            ))}
            {selectedTab === 'withdraw' && withdrawContentList.map((content, i) => (
              <TextView key={i} {...content} />
            ))}
          </div>
          <div>
            {selectedTab === 'withdraw' && <div className='gas-fee'>
              <div className='text'>
                <img src={gasFee2} className='me-2' alt='' /> Estimation of GAS
                fee required
              </div>
              <div className='fee'>$10.00</div>
            </div>}
            <div className='gas-fee'>
              <div className='text'>
                <img src={gasFee} className='me-2' alt='' /> Estimation of GAS
                fee required
              </div>
              <div className='fee'>$10.00</div>
            </div>
            <div className='bridge-button-group'>
              <div>How Shibarium works</div>
              <div>FAQs</div>
            </div>
          </div>
        </Col>
        <Col className='transaction' md={6} sm={12}>
          <div className='to-box'>
            <div
              className={selectedTab === 'deposit' ? 'active' : 'tab'}
              onClick={() => changeSelectedTabBridge('deposit')}
            >
              Deposit
            </div>
            <div
              className={selectedTab === 'withdraw' ? 'active' : 'tab'}
              onClick={() =>changeSelectedTabBridge('withdraw')}
            >
              Withdraw
            </div>
          </div>
          <div>
            <div className='to-heading'>From</div>
            <div className='to-box'>
              <div className='name'>
                
                {selectedTab ==='deposit' ? <img src={eth24} /> : <img src={shib24} />}
                {selectedTab ==='deposit' ? 'Ethereum Chain' : 'Shibarium Mainnet'}
              </div>
              <div className='balance-amount'>
                Balance: <b>{selectedTab ==='deposit' ? '100.00ETH' : '100 BONE'}</b>
              </div>
            </div>
            <div className='dropdown-box'>
              <div className='dropdown-eth'>
                {selectedTab ==='deposit' ? <img src={eth18} /> : <img src={gasFee2} />}
                {selectedTab ==='deposit' ? 'ETH' : 'BONE'}
                <img src={dropdown2} />
              </div>
              <div className='to-box-2'>
                <div className='name'>0.00</div>
                <div className='max'>MAX</div>
              </div>
            </div>
          </div>
          <div>
            <div className='to-heading'>To</div>
            <div className='to-box'>
              <div className='name'>
                {selectedTab !=='deposit' ? <img src={eth24} /> : <img src={shib24} />}
                {selectedTab !=='deposit' ? 'Ethereum Chain' : 'Shibarium Mainnet'}
              </div>
              <div className='balance-amount'>
                Balance: <b>0ETH</b>
              </div>
            </div>
          </div>
          <div className='transfer-button'>Transfer</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Bridge;

function Buttons() {
  return (
    <div className='d-flex gap-4 justify-content-end'>
      <button type='button' className='appButton'>
        <i>
          <img src={appsIcon} alt='apps' />
        </i>
        Apps
      </button>{' '}
      <button type='button' className='appButton ethButton'>
        Switch to Ethereum
      </button>{' '}
      <button type='button' className='appButton profileButton'>
        <i style={{ background: 'white' }} className='rounded-pill p-2'>
          <img src={MetaMask_Fox} alt='apps' />
        </i>
        0x21A...48A5
        <i>
          <img src={downArrow} alt='apps' />
        </i>
      </button>
    </div>
  );
}
