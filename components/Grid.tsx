import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about" className="scroll-mt-20">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={`${item.className} relative min-h-full`}
            img={item.img}
            imgClassName={`${item.imgClassName} absolute inset-0`}
            titleClassName={`${item.titleClassName} absolute top-0 left-0 right-0 bottom-0 flex items-start p-8 text-white text-xl bg-black/50 min-h-full w-full`}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
