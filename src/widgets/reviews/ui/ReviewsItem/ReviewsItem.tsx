export type ReviewsItemProps = {
  text: string;
  name: string;
};

export const ReviewsItem = ({ text, name }: ReviewsItemProps) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-between gap-5 px-6 py-8 text-center text-[16px]">
      <p className="leading-relaxed">{text}</p>
      <span className="tracking-widest uppercase">{name}</span>
    </div>
  );
};