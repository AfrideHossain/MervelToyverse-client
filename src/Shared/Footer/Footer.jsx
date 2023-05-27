import { Link } from "react-router-dom";
import avengers_logo from "../../assets/avengers_logo.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BiPhone, BiEnvelope, BiMap } from "react-icons/bi";
const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <img src={avengers_logo} className="w-14" alt="" />
        <p className="text-xl font-semibold">Marvel Toyverse</p>
        <p className="flex items-center gap-1">
          <BiMap className="w-6 h-6" /> Level 2, Afrede's House, Pangsha,
          Rajbari, 7720
        </p>
        <p className="flex items-center gap-1">
          <BiEnvelope className="w-6 h-6" />
          afredhossain@gmail.com
        </p>
        <p className="flex items-center gap-1">
          <BiPhone className="w-6 h-6" />
          +880 170 - 0000000
        </p>
        <p className="mt-3">Copyright © 2023 - All right reserved</p>
      </div>
      <div>
        <span className="footer-title">Useful Links</span>
        <Link className="link link-hover" to="/">
          Home
        </Link>
        <Link className="link link-hover" to="/toys">
          All Toys
        </Link>
        <Link className="link link-hover" to="/blog">
          Blogs
        </Link>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <Link className="link link-hover">Terms of use</Link>
        <Link className="link link-hover">Privacy policy</Link>
        <Link className="link link-hover">Cookie policy</Link>
      </div>
      <div>
        <span className="footer-title">Social</span>
        <div className="flex gap-4">
          <FaFacebook className="w-6 h-6" />
          <FaInstagram className="w-6 h-6" />
          <FaLinkedin className="w-6 h-6" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
