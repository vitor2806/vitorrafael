interface ProjectContainerProps {
  title: string;
  url: string | undefined | null;
  description: string | undefined | null;
  imgUrl?: string;
}

export function ProjectContainer({ title, url, description, imgUrl }: ProjectContainerProps) {
  return (
    <a href={url || '#'} target="_blank" rel="noreferrer" className="rounded-md overflow-hidden flex flex-col bg-zinc-800 relative group lg:hover:scale-125 hover:z-10 transition-all">
      <img src={imgUrl} className="object-cover h-60 w-96" />
      <div className="lg:hidden flex group-active:hidden absolute bg-black w-full h-full lg:group-hover:flex flex-col items-center justify-center bg-opacity-75 lg:bg-opacity-90 p-4 gap-2 text-primary-500 transition-all">
        <h2 className="text-lg lg:text-3xl font-semibold">{title}</h2>
        <small className="text-zinc-300 lg:font-thin">{description}</small>
      </div>
    </a>
  );
}
