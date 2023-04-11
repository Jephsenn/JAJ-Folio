type Props = {
    title: string;
};

export default function Header( props: Props ) {
    return (
      <div>
        <h1 className="my-6 text-5xl text-white text-center">{props.title}</h1>
      </div>
    )
  }