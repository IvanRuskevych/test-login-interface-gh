import {AuthContainer, IconLogo, IconWrapper, Section} from "./Contact.styled.js";
import iconLogo from "../../assets/icons/VectorLogo.svg"

function Contact() {
    return (
        <AuthContainer>
            <Section>
                <IconWrapper>
                    <IconLogo src={iconLogo} alt="icon logo"/>
                </IconWrapper>
            </Section>
        </AuthContainer>
    )
}

export default Contact