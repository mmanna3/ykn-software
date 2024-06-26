import Contacto from './assets/contacto.png';
import Linkedin from './assets/linkedin.png';

export default function Footer() {
    return (
        <div className="flex h-20 items-center justify-center">
            <a href="https://www.linkedin.com/company/ykn-software">
                <img width="36" height="36" src={Linkedin} className="mr-2" />
            </a>
            <a href="mailto:ykn.software.com@gmail.com">
                <img width="32" height="32" src={Contacto} className="ml-2" />
            </a>
        </div>
    );
}
