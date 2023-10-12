import { NavLink } from 'react-router-dom';
import walletIcon from '../../assets/icons/wallet.svg';
import swapToken from '../../assets/icons/swapToken.svg';
import gasToken from '../../assets/icons/gasToken.svg';
import transaction from '../../assets/icons/transaction.svg';
import bridge from '../../assets/icons/bridge.svg';
import logo from '../../assets/icons/SHIB_Logo.svg';
import faq from '../../assets/icons/faq.svg';
import developerTools from '../../assets/icons/developer-tools.svg';
import support from '../../assets/icons/support.svg';
import './sideNav.scss';

const sidebarItems = [
  {
    text: 'Wallet',
    icon: <img src={walletIcon} alt='' />,
    to: '/',
  },
  {
    text: 'Transactions',
    icon: <img src={transaction} alt='' />,
    to: '/transaction',
  },
  {
    text: 'Bridge',
    icon: <img src={bridge} alt='' />,
    to: '/bridge',
  },
  {
    text: 'Swap token',
    icon: <img src={swapToken} alt='' />,
    to: '/swapToken',
  },
  {
    text: 'Gas token',
    icon: <img src={gasToken} alt='' />,
    to: '/gasToken',
  },
];

const supportItems = [
  {
    text: 'FAQs',
    icon: <img src={faq} alt='' />,
    to: '/faq',
  },
  {
    text: 'Developer Tools',
    icon: <img src={developerTools} alt='' />,
    to: '/developerTools',
  },
  {
    text: 'Support',
    icon: <img src={support} alt='' />,
    to: '/support',
  },
];

// eslint-disable-next-line react/prop-types
const SidebarItem = ({ to, text, icon }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? 'active' : 'sidebar-item')}
      >
        <span className='nav-icon'> {icon}</span>
        <span className='text'>{text}</span>
      </NavLink>
    </li>
  );
};

export default function SideNav() {
  return (
    <div className='sideNav'>
      <div className='logo'>
        <img src={logo} className='me-3' alt='Shibarium' />
        Shibarium
      </div>
      <div className='navigation'>
        <div className='nav-items'>
          {sidebarItems.map((item, i) => (
            <SidebarItem {...item} key={i} />
          ))}
        </div>
        <div className='nav-items'>
          {supportItems.map((item, i) => (
            <SidebarItem {...item} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
