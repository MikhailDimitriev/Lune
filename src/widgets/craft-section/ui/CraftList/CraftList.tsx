import { craftItems } from "~/widgets/craft-section/model/craftData";
import { CraftItem } from "~/widgets/craft-section/ui/CraftItem";

const CraftList = () => {
  return (
    <div className="flex w-full flex-col divide-y divide-[custom-text-gold] lg:flex-row lg:divide-x-2 lg:divide-y-0">
      {craftItems.map((item) => (
        <CraftItem key={item.title} {...item} />
      ))}
    </div>
  );
};

export default CraftList;
