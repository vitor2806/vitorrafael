export function ProjectContainer() {
  return (
    <a href="#" className="rounded-md overflow-hidden flex flex-col bg-zinc-800 relative group hover:scale-125 hover:z-10 transition-all">
      <img src="https://source.unsplash.com/random" alt="" className="w-96 h-60" />
      <div className="hidden absolute bg-black w-full h-full group-hover:flex flex-col items-center justify-center bg-opacity-75 transition-all">
        <h2 className="text-3xl font-semibold">Nome do projeto</h2>
        <small className="text-zinc-300 font-thin">Projeto bla bla bla bla lorem</small>
      </div>
    </a>
  );
}
