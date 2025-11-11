import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative overflow-hidden rounded-xl shadow-lg border border-[#2A0E61] bg-[#11001F] hover:scale-[1.02] transition-transform duration-300 w-full md:w-1/3"
    >
      {/* Image container with fixed aspect ratio */}
      <div className="relative w-full aspect-[16/9] bg-[#1a1035]">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="p-5">
        <h1 className="text-xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300 text-sm leading-relaxed">{description}</p>
      </div>
    </Link>
  );
};
