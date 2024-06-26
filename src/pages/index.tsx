import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/layout'
import Header from "@/components/header"
import Skill from "@/components/skills"
import ProfilePic from '../../public/images/profilepic.jpg'
import JEAuto from '../../public/images/JEAuto.png'
import JAJApparel from '../../public/images/JAJApparel.png'
import MKJJ from '../../public/images/MKJJBanking.png'
import QualisEvents from '../../public/images/QualisEvents.png'
import Sintennial from '../../public/images/Sintennial.png'
import USA_ICKF from '../../public/images/USA-ICKF.png'
import nextJS from "../../public/images/nextjs.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faFacebook, faLinkedin, faJava, faJs, faNode, faReact, faTypo3, faHtml5, faCss3} from "@fortawesome/free-brands-svg-icons"
import { faDatabase, faTerminal } from "@fortawesome/free-solid-svg-icons"
import ExperienceCard from '@/components/experiencecard'
import GitHubProject from '@/components/githubproject'
import styles from "../styles/index.module.scss"
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();

  return (
    <Layout page="home">
      <main className="flex flex-col justify-center">
        <section className="sm:h-full flex items-center flex-col h-screen md:h-screen relative bg-[url('../../public/images/webdev.jpg')] bg-cover bg-center bg-no-repeat before:bg-black/25 md:bg-fixed before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="z-10 flex bg-secondary mt-20 md:mt-20 lg:mt-30 w-44 h-44 md:h-56 md:w-56 lg:w-64 lg:h-64 rounded-full items-center justify-center">
              <Image src={ProfilePic} alt="Picture of John A. Josephsen" className="p-3 w-full h-full rounded-full object-cover object-top"></Image>
            </div>
            <div className="flex flex-col font-inter z-10">
              <h1 className="my-6 lg:my-6 mx-auto text-white md:text-3xl lg:text-4xl font-bold">John A. Josephsen</h1>
              <h2 className="px-6 md:px-12 my-6 lg:my-6 md:my-3 text-center mx-auto text-white md:text-xl lg:text-3xl">An aspiring Full Stack Web Developer and Software Engineer with a passion for innovation</h2>
              <ul className="w-1/3 my-6 lg:my-6 md:my-3 mx-auto md:w-1/4 flex flex-row items-center justify-around">
                <li>
                  <a href="https://www.linkedin.com/in/john-josephsen/" target="_blank">
                    <FontAwesomeIcon className="text-secondary w-10 lg:w-12 ease-in-out duration-300 hover:text-white hover:-translate-y-1" icon={faLinkedin}/>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Jephsenn" target="_blank">
                  <FontAwesomeIcon className="text-secondary w-10 lg:w-12 ease-in-out duration-300 hover:text-white hover:-translate-y-1" icon={faGithub}/>
                  </a>
                </li>
              </ul>
              <button type="button" onClick={() => router.push('mailto:jjosephsenyt@gmail.com')} className="mt-4 mb-12 rounded-full bg-white font-bold md:text-lg lg:text-xl text-black mx-auto py-3 px-5 ease-in-out duration-200 hover:bg-gray-800 hover:text-white">Get In Touch</button>
            </div>
          </div>
        </section>
        <section className="bg-secondary h-fit">
          <Header title="Skills"/>
          <ul className="my-12 mx-auto w-2/3 flex flex-row items-center justify-center flex-wrap">
              <Skill faIcon={faJava} name="Java"/>
              <Skill faIcon={faJs} name="JavaScript"/>
              <Skill faIcon={faTerminal} name="Bash"/>
              <Skill faIcon={faNode} name="NodeJS"/>
              <Skill faIcon={faReact} name="React"/>
              <Skill faIcon={faTypo3} altIcon={nextJS} name="NextJS"/>
              <Skill faIcon={faHtml5} name="HTML5"/>
              <Skill faIcon={faCss3} name="CSS3"/>
              <Skill faIcon={faDatabase} name="SQL"/>
            </ul>
        </section>
        <section className="h-fit bg-primary">
         <Header title="Web Experience"/>
         <ul className="my-12 flex flex-row flex-wrap justify-center">
           <ExperienceCard src={QualisEvents} alt="Qualis Events" link="https://qualisevents.vercel.app"/>
           <ExperienceCard src={USA_ICKF} alt="USA-ICKF" link="https://usa-ickf.com"/>
           <ExperienceCard src={Sintennial} alt="Sintennial RSPS" link="#"/>
           <ExperienceCard src={JEAuto} alt="Jersey Exotic Auto" link="#"/>
           <ExperienceCard src={JAJApparel} alt="JAJ Apparel" link="#"/>
           <ExperienceCard src={MKJJ} alt="MKJJ Online Bank" link="#"/>
         </ul>
         <hr className="w-[80%] m-auto"></hr>
         <Header title="Programming Experience"/>
         <ul className="my-12 flex flex-row flex-wrap justify-center text-white w-[80%] mx-auto">
            <GitHubProject name="UserMigrationV4" lang="Shell" link="https://github.com/Jephsenn/UserMigrationV4" desc="This is an IT MacOS user transfer script to backup and/or restore data from a client's old machine to an external drive, and/or restore the data from the backups to their new machine."/>
            <GitHubProject name="Pre-Deployment_User_Transfer" lang="Shell" link="https://github.com/Jephsenn/Pre-Deployment_User_Transfer" desc="This is an IT pre-deployment user transfer script to pre-load data onto a client's new machine from their old machine. Can either run this Mac -&gt; Mac, or using a host machine to restore data from a drive to the new device."/>
            <GitHubProject name="AppleChecklist" lang="Shell" link="https://github.com/Jephsenn/AppleChecklist" desc="This is an IT Checklist script for new/already deployed machines to ensure everything is installed/configured correctly."/>
         </ul>
        </section>
        <section className="bg-secondary h-fit">
         <Header title="Education"/>
         <p className="mt-12 mb-4 mx-auto text-white text-2xl text-center">Recent Montclair State University Graduate</p>
         <p className="my-4 mx-auto text-white text-2xl text-center">Major: Computer Science</p>
         <p className="my-4 mx-auto text-white text-2xl text-center mb-12">Average GPA: 3.4</p>
        </section>
      </main>
    </Layout>
    
  )
}