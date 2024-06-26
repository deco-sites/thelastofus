import { clx } from "../../sdk/clx.ts";

export interface Props {
  title?: string;
  fontSize?: "Small" | "Normal" | "Large";
  description?: string;
  alignment?: "center" | "left";
  colorReverse?: boolean;
}

const fontSizeClasses = {
  "Small": "lg:text-2xl",
  "Normal": "lg:text-4xl",
  "Large": "lg:text-4xl",
};

function Header(props: Props) {
  return (
    <>
      {props.title || props.description
        ? (
          <div
            class={`flex flex-col gap-2 ${
              props.alignment === "left" ? "text-left" : "text-center"
            }`}
          >
            {props.title &&
              (
                <h1
                  class={clx(
                    "text-xl lg:text-5xl leading-8 lg:leading-10 font-bold ",
                    props.colorReverse
                      ? "text-primary-content"
                      : "text-base-content",
                    fontSizeClasses[props.fontSize || "Normal"],
                  )}
                >
                  {props.title}
                </h1>
              )}
            {props.description &&
              (
                <h2
                  class={clx(
                    "leading-6 lg:leading-8",
                    props.colorReverse
                      ? "text-primary-content"
                      : "text-base-content",
                    "text-xl mt-4 w-5/6 lg:w-1/2 mx-auto",
                  )}
                >
                  {props.description}
                </h2>
              )}
          </div>
        )
        : null}
    </>
  );
}

export default Header;
