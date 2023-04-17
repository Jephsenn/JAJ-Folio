import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
    return (
      <footer className="h-16 bg-primary w-full flex items-center">
        <p className="text-md text-white ml-4 md:ml-12 mr-4 md:mr-4">Designed by JAJ</p>
        <ul className="flex w-fit flex-row items-center justify-around">
            <li className="mr-4">
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