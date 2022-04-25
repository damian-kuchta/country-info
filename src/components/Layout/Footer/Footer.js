import gitHubLogo from "../../../assets/img/github-logo.png"

const Footer = (props) => {
    return ( 
        <footer >
            <p >created by Damian Kuchta</p>
            <a ><img src={gitHubLogo}/></a>
        </footer>
     );
}
 
export default Footer;

<footer class="footer">
<p class="footer__author">created by Damian Kuchta</p>
<a class="footer__github-link" href="https://github.com/damian-kuchta/"><img class="footer__github-logo" src={gitHubLogo} alt="Github logo"/></a>
</footer>