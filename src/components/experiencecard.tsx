import Image, { StaticImageData } from 'next/image'

type Props = {
    src: StaticImageData;
    alt: string;
    link: string;
};

export default function ExperienceCard( props: Props ) {
    return (
      <a href={props.link==="#"?"#!":props.link} target={props.link==="#"?"_self":"_blank"} className="group m-4 md:w-1/4 h-44 md:h-52 relative bg-white">
        <Image className="h-full object-cover ease-in-out duration-300 group-hover:cursor-pointer group-hover:opacity-20" src={props.src} alt={props.alt}/>
        <div className="text-center opacity-0 absolute ease-in-out duration-300 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100">
            <p className="text-black text-lg">{props.alt}</p>
            {props.link==="#"?<p className="text-red-600 text-lg">*No Longer Live*</p>:""}
        </div>
      </a>
    )
  }