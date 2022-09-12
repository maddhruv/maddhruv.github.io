import { Github, LinkedIn, Twitter } from "../components/icons";

const socials = [
  {
    icon: () => <Github />,
    link: "https://github.com/maddhruv",
  },
  {
    icon: () => <LinkedIn />,
    link: "https://www.linkedin.com/in/midhruvjaink/",
  },
  {
    icon: () => <Twitter />,
    link: "https://twitter.com/maddhruv",
  },
];

export const Socials = () => {
  return (
    <ul id="🌐">
      {socials.map((social) => {
        return (
          <li>
            <a href={social.link} target="_blank">
              {social.icon()}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
