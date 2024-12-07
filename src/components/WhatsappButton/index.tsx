import { WhatsappWrapper } from "./styles";
import WhatsAppIcon from '../../assets/images/whatsapp.png';

const WhatsappButton = () => {


    return(
        <WhatsappWrapper href="https://api.whatsapp.com/send?phone=5545988348165">
                <img src={WhatsAppIcon} alt="" className="whatsapp-icon"/>
                <span className="whatsapp-text">Whatsapp</span>
                <span className="whatsapp-number">(45) 98834-8165</span>
            </WhatsappWrapper>
    )

}

export default WhatsappButton;


