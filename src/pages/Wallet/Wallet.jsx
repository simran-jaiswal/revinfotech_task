import './Wallet.scss';
import receive from '../../assets/icons/receive.svg';
import send from '../../assets/icons/send.svg';
import eth from '../../assets/table-icons/eth.svg';
import shib from '../../assets/table-icons/shib.svg';
import usdc from '../../assets/table-icons/usdc.svg';
import bnb from '../../assets/table-icons/bnb.svg';
import matic from '../../assets/table-icons/matic.svg';
import { Col, Container, Row } from 'react-bootstrap';
import appsIcon from '../../assets/icons/Apps.png';
import downArrow from '../../assets/icons/downArrow.svg';
import MetaMask_Fox from '../../assets/MetaMask_Fox.png';

const assetsData = [
  {
    code: 'SHIB',
    name: 'Shibatoken',
    balance: '0.0000 - 0.00S',
    image: shib,
  },
  {
    code: 'MATIC',
    name: 'Polygon',
    balance: '0.0000 - 0.00S',
    image: matic,
  },
  {
    code: 'BNB',
    name: 'BNB',
    balance: '0.0000 - 0.00S',
    image: bnb,
  },
  {
    code: 'USDC',
    name: 'USD Circle',
    balance: '0.0000 - 0.00S',
    image: usdc,
  },
  {
    code: 'ETH',
    name: 'Etherium',
    balance: '0.0000 - 0.00S',
    image: eth,
  },
];

// eslint-disable-next-line react/prop-types
const AssetItem = ({ image, code }) => (
  <div className='row table-data'>
    <div className='col-4 heading-text'>
      <img src={image} width={'32px'}></img>
      <b>{code}</b>&nbsp;- Etherium
    </div>
    <div className='col-3 heading-text'>0.0000 - 0.00$</div>
    <div className='col-5 action-content'>
      <span>Deposit</span> <span>Withdraw</span> <span>Send</span>
    </div>
  </div>
);

const Wallet = () => {
  return (
    <Container className='wallet-container'>
      <Buttons />
      <div className='heading'>My Balance</div>
      <Row className='wallet-balance'>
        <Col className='mainnet' md={3}>
          <span className='balance'>20.000$</span>
          <span className='sub-text'>SHIBARIUM MAINNET</span>
        </Col>
        <Col className='button-group' md={3}>
          <div className='receive'>
            <img src={receive} alt='' />
            <span className='receive-text'>Receive</span>
          </div>
          <div className='send'>
            <img src={send} alt='' />
            <span className='send-text'>Send</span>
          </div>
        </Col>
        <Col className='action' md={6}>
          <div className='move-funds'>
            Move funds from Ethereum to Shibarium
          </div>
          <div className='work-flow'>How Shibarium works</div>
        </Col>
      </Row>
      <div className='heading'>Assets on Shibarium</div>

      <TableContainer />
    </Container>
  );
};

export default Wallet;

function TableContainer() {
  return (
    <div className='table-responsive'>
      <div className='asset-table'>
        <div className='row table-heading'>
          <div className='col-4 heading-text'>Name</div>
          <div className='col-3 heading-text'>Balance</div>
          <div className='col-5 heading-text'>
            Actions
            <input type='text' placeholder='Search' className='search-box' />
          </div>
        </div>
        {assetsData.map((asset, i) => (
          <AssetItem {...asset} key={i} />
        ))}
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className='d-flex gap-4 justify-content-end'>
      <button type='button' className='appButton'>
        <i>
          <img src={appsIcon} alt='apps' />
        </i>
        Apps
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
