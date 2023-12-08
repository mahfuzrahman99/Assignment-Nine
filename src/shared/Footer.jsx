import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Footer = () => {

  return (
    <div>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <nav className="grid grid-flow-col gap-4">
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link to={`/blogPage`} className="link link-hover">Blog</Link>
          <Link to={`/donationPage`} className="link link-hover">Donation</Link>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4 text-4xl">
            <Link className="">
              <FaGithub/>
            </Link>
            <Link className="">
              <FaGoogle/>
            </Link>
            <Link className="">
              <SiGmail/>
            </Link>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2023 - All right reserved by Md : Mahfuzur Rahman Shabbir</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
