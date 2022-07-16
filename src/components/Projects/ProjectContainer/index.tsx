interface ProjectContainerProps {
  title: string;
  url: string | undefined | null;
  description: string | undefined | null;
  imgUrl?: string;
}

export function ProjectContainer({ title, url, description, imgUrl }: ProjectContainerProps) {
  return (
    <a href={url || '#'} target="_blank" rel="noreferrer" className="rounded-md overflow-hidden flex flex-col bg-zinc-800 relative group hover:scale-125 hover:z-10 transition-all">
      <img src={imgUrl} alt={title + 'captura de tela'} className="w-96 h-60" />
      <div className="hidden absolute bg-black w-full h-full group-hover:flex flex-col items-center justify-center bg-opacity-90 p-4 gap-2 text-primary-500 transition-all">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <small className="text-zinc-300 font-thin">{description}</small>
      </div>
    </a>
  );
}
