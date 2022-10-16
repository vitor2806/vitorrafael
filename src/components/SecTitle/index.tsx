interface SecTitleProps {
  content: string;
}

export function SecTitle({ content }: SecTitleProps) {
  return <h1 className="my-6 text-3xl lg:text-4xl text-primary-500 underline underline-offset-8">{content}</h1>;
}
