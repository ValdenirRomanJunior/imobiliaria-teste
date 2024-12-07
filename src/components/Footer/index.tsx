import { FooterContainer, LogoWrapper, SocialWrapper, TextWrapper } from "./styles";
import Logo from '../../assets/images/logo-teste.png';
import {SlSocialInstagram} from 'react-icons/sl';
import {FaFacebookF} from 'react-icons/fa';
import {MdWhatsapp} from 'react-icons/md'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const Footer = () => {
    return (
       <FooterContainer>
        <LogoWrapper>
        <LazyLoadImage effect="opacity" src={Logo} alt=""/>
        </LogoWrapper>
        <TextWrapper>
            <div className="copy-nameBusiness">
            <span> © 2024</span>
            <span> Imobiliária teste- Negócios imobiliários</span>
            </div>
            <span>CRECI 13694F</span>
        </TextWrapper>
        <SocialWrapper>
        <a href="https://www.facebook.com/profile.php?id=100075702506516" ><FaFacebookF className="icon-social-footer"/></a>
             <a href="https://www.instagram.com/meustandi/"><SlSocialInstagram className="icon-social-footer"/></a>
             <a href="https://api.whatsapp.com/send?phone=554588348165"> <MdWhatsapp className="icon-social-footer"/></a>
        </SocialWrapper>
       </FooterContainer>
    )
}

export default Footer;