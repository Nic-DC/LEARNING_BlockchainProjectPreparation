import { FaFacebookF } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

const Social = () => {
  return (
    <div>
      <div className="mt-2">
        <BsWhatsapp className="social-icons" />
      </div>
      <div className="mt-2">
        <FaFacebookF className="social-icons" />
      </div>
      <div className="mt-2">
        <FaFacebookMessenger className="social-icons" />
      </div>
      <div className="mt-2">
        <AiFillGithub className="social-icons" />
      </div>
      <div className="mt-2">
        <FaYoutube className="social-icons" />
      </div>
      <div className="mt-2">
        <AiOutlineLinkedin className="social-icons" />
      </div>
    </div>
  );
};
export default Social;
