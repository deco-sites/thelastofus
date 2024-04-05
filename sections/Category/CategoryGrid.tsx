import Header from "../../components/ui/SectionHeader.tsx";
import { useId } from "../../sdk/useId.ts";
import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Button from "../../components/ui/Button.tsx";

export interface CategoryGridProps {
  href?: string;
  image?: ImageWidget;
  /** @description Alternative text */
  label?: string;
  buttonText?: string;
}

export interface Props {
  header?: {
    /**
     * @default Explore Our Categories
     */
    title?: string;
    /**
     * @default Your description here
     */
    description?: string;
  };
  list?: CategoryGridProps[];
  layout?: {
    headerAlignment?: "center" | "left";
    categoryCard?: {
      textPosition?: "top" | "bottom";
      textAlignment?: "center" | "left";
    };
  };
}

const DEFAULT_LIST = [
  {
    href: "/category",
    image:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2753/b2278d2d-2270-482b-98d4-f09d5f05ba97",
    label: "category",
    buttonText: "Explore collection",
  },
  {
    href: "/category",
    image:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2753/b2278d2d-2270-482b-98d4-f09d5f05ba97",
    label: "category",
    buttonText: "Explore collection",
  },
  {
    href: "/category",
    image:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2753/b2278d2d-2270-482b-98d4-f09d5f05ba97",
    label: "category",
    buttonText: "Explore collection",
  },
  {
    href: "/category",
    image:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2753/b2278d2d-2270-482b-98d4-f09d5f05ba97",
    label: "category",
    buttonText: "Explore collection",
  },
];

function CategoryGrid(props: Props) {
  const id = useId();
  const {
    header = {
      title: "Explore Our Categories",
      description: "Your description",
    },
    list = DEFAULT_LIST,
    layout = {
      headerAlignment: "center",
      categoryCard: {
        textPosition: "bottom",
        textAlignment: "left",
      },
    },
  } = props;

  return (
    <div class="relative">
      <div
        id={id}
        class=" absolute top-[-200px] bg-[#060505]"
        style="box-shadow: 0 0 500px 300px #060505; z-index: 3; width:98vw"
      >
        <Header
          title={header.title}
          description={header.description || ""}
          alignment={"center"}
        />

        <div class="grid md:grid-cols-2 grid-cols-1 mt-6">
          {list.map((
            { href, image, label, buttonText },
          ) => (
            <div>
              <a
                href={href}
                class={`relative flex ${
                  layout.categoryCard?.textAlignment === "left"
                    ? "justify-start"
                    : "justify-start items-center"
                } ${
                  layout.categoryCard?.textPosition === "bottom"
                    ? "flex-col-reverse"
                    : "flex-col"
                }`}
              >
                {image &&
                  (
                    <figure>
                      <Image
                        class="w-full"
                        src={image}
                        alt={label}
                        width={720}
                        height={480}
                        loading="lazy"
                      />
                    </figure>
                  )}
                <Button
                  class="font-light text-base-content bg-base-100 py-4 px-6 absolute m-6"
                  aria-label={label}
                >
                  {buttonText}
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryGrid;
