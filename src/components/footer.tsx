import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
    return (
      <footer className="h-16 bg-primary w-full flex items-center">
        <p className="text-md text-white ml-4 md:ml-12 mr-2 md:mr-4">Designed by JAJ</p>
        <ul className="flex w-1/3 md:w-1/6 flex-row items-center justify-around">
            <li>
                <a href="https://www.instagram.com/johnjosephsen/" target="_blank">
                    <FontAwesomeIcon className="text-secondary w-6 ease-in-out duration-300 hover:text-white hover:-translate-y-0.5" icon={faInstagram}/>
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com/john.josephsen.9" target="_blank">
                    <FontAwesomeIcon className="text-secondary w-6 ease-in-out duration-300 hover:text-white hover:-translate-y-0.5" icon={faFacebook}/>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/john-josephsen/" target="_blank">
                  <FontAwesomeIcon className="text-secondary w-6 ease-in-out duration-300 hover:text-white hover:-translate-y-0.5" icon={faLinkedin}/>
                </a>
            </li>
            <li>
                <a href="https://github.com/Jephsenn" target="_blank">
                <FontAwesomeIcon className="text-secondary w-6 ease-in-out duration-300 hover:text-white hover:-translate-y-0.5" icon={faGithub}/>
                </a>
            </li>
        </ul>
      </footer>
    )
  }