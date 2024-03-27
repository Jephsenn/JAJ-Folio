type Props = {
    name: string,
    desc: string,
    lang: string,
    link: string
};

export default function GitHubProject( props: Props ) {
    return (
        <li className="w-[400px] h-auto rounded-lg border-white border-2 p-3 m-4">
            <div className="flex flex-col w-full h-full">
                <div className='mt-2 flex flex-row items-center'>
                <svg fill="white" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="mr-2">
                    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                </svg>
                <a href={props.link} target="_blank" className="text-blue-400 text-underlined">{props.name}</a>
                </div>
                <p className="mt-2 text-white/[.66] flex-[1_0_auto]">{props.desc}</p>
                <div className='mt-2 flex flex-row items-center'>
                    <span className="mr-1 w-[12px] h-[12px] bg-[#89e051] rounded-full"></span>
                    <p className="text-white/[.66]">{props.lang}</p>
                </div>
            </div>
        </li>
    )
  }