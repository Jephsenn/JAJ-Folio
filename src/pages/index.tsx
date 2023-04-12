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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faFacebook, faLinkedin, faJava, faJs, faNode, faReact, faTypo3, faHtml5, faCss3, faMdb } from "@fortawesome/free-brands-svg-icons"
import ExperienceCard from '@/components/experiencecard'
import styles from "../styles/index.module.scss"
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();

  return (
    <Layout page="home">
      <main className="flex flex-col justify-center">
        <section className="flex items-center flex-col h-screen relative bg-[url('../../public/images/webdev.jpg')] bg-cover bg-center bg-no-repeat before:bg-black/25 md:bg-fixed before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="z-10 flex bg-secondary mt-20 md:mt-20 lg:mt-30 w-64 h-64 md:h-64 md:w-64 lg:w-80 lg:h-80 rounded-full items-center justify-center">
              <Image src={ProfilePic} alt="Picture of John A. Josephsen" className="p-3 w-full h-full rounded-full object-cover object-top"></Image>
            </div>
            <div className="flex flex-col font-inter z-10">
              <h1 className="my-6 lg:my-6 mx-auto text-white md:text-3xl lg:text-4xl font-bold">John A. Josephsen</h1>
              <h2 className="px-6 md:px-12 my-6 lg:my-6 md:my-3 text-center mx-auto text-white md:text-xl lg:text-3xl">An aspiring Full Stack Web Developer with a passion for creating new things</h2>
              <ul className="w-3/4 my-6 lg:my-6 md:my-3 mx-auto md:w-1/2 flex flex-row items-center justify-around">
                <li>
                  <a href="https://www.instagram.com/johnjosephsen/" target="_blank">
                    <FontAwesomeIcon className="text-secondary w-10 lg:w-12 ease-in-out duration-300 hover:text-white hover:-translate-y-1" icon={faInstagram}/>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/john.josephsen.9" target="_blank">
                    <FontAwesomeIcon className="text-secondary w-10 lg:w-12 ease-in-out duration-300 hover:text-white hover:-translate-y-1" icon={faFacebook}/>
                  </a>
                </li>
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
          <ul className="my-12 mx-auto w-1/2 flex flex-row items-center justify-center flex-wrap">
              <Skill faIcon={faJava} name="Java"/>
              <Skill faIcon={faJs} name="JavaScript"/>
              <Skill faIcon={faNode} name="NodeJS"/>
              <Skill faIcon={faReact} name="React"/>
              <Skill faIcon={faTypo3} name="NextJS"/>
              <Skill faIcon={faHtml5} name="HTML5"/>
              <Skill faIcon={faCss3} name="CSS3"/>
              <Skill faIcon={faMdb} name="SQL"/>
            </ul>
        </section>
        <section className="h-fit bg-primary">
         <Header title="Experience"/>
         <ul className="my-12 flex flex-row flex-wrap justify-center">
           <ExperienceCard src={Sintennial} alt="Sintennial RSPS" link="#"/>
           <ExperienceCard src={QualisEvents} alt="Qualis Events" link="https://qualisevents.vercel.app"/>
           <ExperienceCard src={JEAuto} alt="Jersey Exotic Auto" link="https://jerseyexoticauto.com"/>
           <ExperienceCard src={JAJApparel} alt="JAJ Apparel" link="#"/>
           <ExperienceCard src={MKJJ} alt="MKJJ Online Bank" link="#"/>
         </ul>
        </section>
        <section className="bg-secondary h-fit">
         <Header title="Education"/>
         <p className="mt-12 mb-4 mx-auto text-white text-2xl text-center">Recent Montclair State University Graduate</p>
         <p className="my-4 mx-auto text-white text-2xl text-center">Major: Computer Science</p>
         <p className="my-4 mx-auto text-white text-2xl text-center mb-12">Average GPA: 3.6</p>
        </section>
      </main>
    </Layout>
    
  )
}