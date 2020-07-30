import React from "react";

type Props = {
  title?: string;
};

const Footer = ({ title = "I'm here to stay (Footer)" }: Props) => (
  <div>
    <footer>
      <hr />
      <span>{title}</span>
    </footer>
  </div>
);

export default Footer;
