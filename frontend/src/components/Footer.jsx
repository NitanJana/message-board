const Footer = () => {
  return (
    <footer className="text-primary-cream my-4 flex items-center gap-2 font-medium">
      Copyright &copy; {new Date().getFullYear()} Nitan Jana
      <a target="_blank" href="https://github.com/NitanJana" rel="noreferrer">
        <img src="/github-mark-white.png" alt="Github logo" width="25px" height="25px" className="hover:animate-spin" />
      </a>
    </footer>
  );
};

export default Footer;
