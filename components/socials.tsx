import { Github, LinkedIn, Twitter } from "../components/icons";

const socials = [
  {
    icon: () => <Github />,
    link: "https://github.com/maddhruv",
    label: "GitHub",
  },
  {
    icon: () => <LinkedIn />,
    link: "https://www.linkedin.com/in/midhruvjaink/",
    label: "LinkedIn",
  },
  {
    icon: () => <Twitter />,
    link: "https://twitter.com/maddhruv",
    label: "Twitter",
  },
];

export const Socials = () => {
  return (
    <ul id="🌐">
      {socials.map((social) => {
        return (
          <li key={social.link}>
            <a
              aria-label={`${social.label} link`}
              href={social.link}
              target="_blank"
            >
              {social.icon()}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
