export interface ArticleProps {
  title: string;
  author: string;
  link: string;
}

export default function Article(props: ArticleProps) {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:bg-gray-800 transition-colors duration-100"
    >
      <div className=" border-b-1 border-gray-500 p-4">
        <p>{props.title}</p>
        <p className="text-sm text-gray-400 mt-1">{props.author}</p>
      </div>
    </a>
  );
}
