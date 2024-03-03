import { component$, useSignal } from "@builder.io/qwik";
import { LuChevronLeft, LuChevronRight } from "@qwikest/icons/lucide";

interface CarouselProps {
  imagesSet: string[];
}

export default component$<CarouselProps>(({ imagesSet }) => {
  const currentStep = useSignal<number>(0);

  return (
    <div class="relative">
      {/* Carousel items */}
      <div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        {imagesSet.map((imageSrc, ind) => (
          <div
            key={`carousel_image_${ind}`}
            class={`relative float-left -mr-[100%] ${ind !== currentStep.value && "hidden"} w-full transition-transform duration-500 ease-in-out motion-reduce:transition-none`}
          >
            <img
              class="block w-full h-auto"
              src={imageSrc}
              alt={`Example page ${ind}`}
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
      {/* Carousel controls */}
      <button class="carousel-btn left">
        <LuChevronLeft class="inline-block h-8 w-8" />
      </button>
      <button class="carousel-btn right">
        <LuChevronRight class="inline-block h-8 w-8" />
      </button>
    </div>
  );
});
