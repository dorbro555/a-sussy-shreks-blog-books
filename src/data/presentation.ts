type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "shrek@example.com",
  title: "Hi, I’m Shrek 👋",
  description:
    "Gummi bears soufflé fruitcake sesame snaps toffee pie fruitcake bear claw. Cotton candy chocolate bonbon chocolate bar tiramisu oat cake.",
  socials: [
    {
      label: "Twitter",
      link: "https://twitter.com/example",
    },
    {
      label: "Bento",
      link: "https://bento.me/example",
    }
  ],
};

export default presentation;
