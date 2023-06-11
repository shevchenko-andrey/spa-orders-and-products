import Image from "next/image";
import Link from "next/link";

interface GroupCardProps {
  id: number;
  title: string;
  photo: string;
}

export const GroupCard: React.FC<GroupCardProps> = ({ id, title, photo }) => {
  return (
    <article
      className="bg-white 
    p-4 cursor-pointer"
    >
      <h3 className="text-xl font-bold">{title}</h3>
      <div>
        <Image className="w-full h-full" src={photo} width={300} height={200} alt="group photo" />
      </div>
      <Link className="w-full h-full" href={`/group/${id}`}></Link>
      <p className="text-md hover:text-primary">See more</p>
    </article>
  );
};
