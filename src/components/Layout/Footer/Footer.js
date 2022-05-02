import classes from "./Footer.module.css";
import gitHubLogo from "../../../assets/img/github-logo.png";

const Footer = (props) => {
  return (
    <footer className={classes.footer}>
      <p className={classes['footer__author']}>created by Damian Kuchta</p>
      <a className={classes['footer__github-link']} href='https://github.com/damian-kuchta/'>
        <img className={classes['footer__github-logo']} src={gitHubLogo} alt='Github Logo' />
      </a>
    </footer>
  );
};

export default Footer;