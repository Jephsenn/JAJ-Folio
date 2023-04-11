import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faFacebook, faLinkedin, faJava, faJs, faNode, faReact, faTypo3, faHtml5, faCss3, faMdb } from "@fortawesome/free-brands-svg-icons"

type Props = {
    faIcon: IconProp;
    name: string;
};

export default function Skills( props: Props ) {
    return (
      <li className="flex flex-col items-center mx-4 my-4">
        <FontAwesomeIcon className="text-white w-20 h-20" icon={props.faIcon}/>
        <p className="text-center text-white my-2 text-2xl">{props.name}</p>
      </li>
    )
  }