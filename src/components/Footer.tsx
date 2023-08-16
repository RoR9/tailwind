import { socialMedia, footerLinks } from "../constants";
import { logo } from "../assets";

const Footer = () => {
  return (
    <footer className="mt-[154px]">
      <div className="flex md:flex-row flex-col gap-5 justify-between">
        <div>
          <img src={logo} className="w-[266px] h-[72px] object-contain" />
          <p className="text-white text-opacity-70 text-[18px] leading-[32px] max-w-[312px] mt-[30px]">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        {footerLinks.map((footerLink) => (
          <div key={footerLink.title}>
            <h4 className="text-[18px] leading-[27px] text-white">
              {footerLink.title}
            </h4>
            <ul className="list-none flex flex-col gap-3 mt-6">
              {footerLink.links.map((link) => (
                <li
                  className="text-white text-opacity-70 text-[16px] leading-[24px] cursor-pointer hover:text-secondary "
                  key={link.name}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 py-8 flex md:flex-row flex-col justify-between items-center border-t-[1px] border-t-[#3F3E45]   ">
        <div className="flex md:flex-row flex-col gap-4 text-[18px] leading-[27px] text-white text-opacity-60">
          <div className="flex gap-4">
            <span>Copyright</span>
            <span>©</span>
          </div>

          <p>2021 HooBank. All Rights Reserved.</p>
        </div>
        <div className="flex gap-9 md:mt-0 mt-5">
          {socialMedia.map((media) => (
            <img
              key={media.id}
              src={media.icon}
              alt={media.link}
              className="w-[21px] h-[21px] object-contain cursor-pointer"
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
