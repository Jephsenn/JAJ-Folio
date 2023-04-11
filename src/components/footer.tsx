import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
    return (
      <div className="h-16 bg-primary w-full flex items-center">
        <p className="text-md text-white mx-4">Designed by JAJ</p>
        <ul className="flex w-1/6 flex-row items-center justify-around">
              <li>
                <FontAwesomeIcon className="text-secondary w-6" icon={faInstagram}/>
              </li>
              <li>
                <FontAwesomeIcon className="text-secondary w-6" icon={faFacebook}/>
              </li>
              <li>
                <FontAwesomeIcon className="text-secondary w-6" icon={faLinkedin}/>
              </li>
              <li>
                <FontAwesomeIcon className="text-secondary w-6" icon={faGithub}/>
              </li>
            </ul>
      </div>
    )
  }