import { PortableTextReactComponents } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";
import { Code } from "@/components/code";

export const components: Partial<PortableTextReactComponents> = {
  types: {
    code: (props) => {
      return <Code {...props} />;
    },
    image: (props) => {
      return (
        <img
          src={urlForImage(props.value).url()}
          className="lg:max-w-screen-md my-2 mx-auto"
          alt={props.value.caption || ""}
        />
      );
    },
  },
  list: {
    bullet: ({ children }) => <ul className="mt-4 mb-4">{children}</ul>,
    number: ({ children }) => <ol className="mt-lg">{children}</ol>,
    checkmarks: ({ children }) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    checkmarks: ({ children }) => <li>✅ {children}</li>,
  },
};
