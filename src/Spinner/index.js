import Smoke from './Smoke';
import LogoSpinner from '../images/Logo_F.png';

import './styles.css';

const Spinner = () => {
return (

  <div className="spinner">
  <img src={LogoSpinner} width="200px" className="logoSpinner" alt="logo"/>
    <Smoke />
  </div>
);
};

export default Spinner;
