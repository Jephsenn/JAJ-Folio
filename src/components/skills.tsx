import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faFacebook, faLinkedin, faJava, faJs, faNode, faReact, faTypo3, faHtml5, faCss3, faMdb } from "@fortawesome/free-brands-svg-icons"
import Image, { StaticImageData } from 'next/image'

type Props = {
    faIcon: IconProp;
    altIcon?: StaticImageData;
    name: string;
};

export default function Skills( props: Props ) {
    return (
      <li className="flex flex-col items-center mx-2 md:mx-4 my-4">
        {props.altIcon==null?
        <FontAwesomeIcon className="text-white w-20 h-20" icon={props.faIcon}/>
        :
        <Image className="altIcon fill-white w-20 h-20" src={props.altIcon} alt={props.name}/>
        }
        <p className="text-center text-white my-2 md:text-2xl">{props.name}</p>
      </li>
    )
  }