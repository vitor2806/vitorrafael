interface ExperienceContainerProps {
  title: string;
  date: string;
  desc: string;
}

export function ExperienceContainer({ title, date, desc }: ExperienceContainerProps) {
  return (
    <div className="lg:w-[480px] gap-1 flex flex-col flex-shrink-0 bg-secondary-500 p-4 rounded-md leading-relaxed">
      <h2 className="font-bold lg:text-lg text-primary-500">{title}</h2>
      <h3 className="text-sm text-zinc-400">{date}</h3>
      <p className="font-regular text-zinc-200">{desc}</p>
    </div>
  );
}
