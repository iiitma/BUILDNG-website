import React from "react";
import logo from "../assets/svgs/logo-white.svg";
import {
  RiFacebookBoxFill,
  RiLinkedinBoxFill,
  RiInstagramFill,
} from "react-icons/ri";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Footer = () => {
  const socials = [
    {
      name: "Facebook",
      icon: RiFacebookBoxFill,
      iconUrl: "https://www.facebook.com/BuildNigeriaINC",
    },
    {
      name: "LinkedIn",
      icon: RiLinkedinBoxFill,
      iconUrl: "https://www.linkedin.com/company/build-nigeria/",
    },
    {
      name: "Instagram",
      icon: RiInstagramFill,
      iconUrl: "https://instagram.com/buildnigeria_e",
    },
  ];

  const links1 = [
    { name: "About Us", link: "/about-us" },
    {
      name: "Our Founding Team",
      link: "/about-us#founding-team",
      anchor: true,
    },
    { name: "Our Advisors", link: "/about-us#advisory-board", anchor: true },
  ];

  const links2 = [
    {
      name: "Cohort Program",
      link: "/programs/cohort",
    },
    {
      name: "Summer Research Peer Mentorship (SRPM)",
      link: "/programs/srpm",
    },
    {
      name: "Think Tank ",
      link: "/programs",
      soon: true,
    },
    {
      name: "Resource Bank ",
      link: "/programs",
      soon: true,
    },
  ];

  const links3 = [
    { name: "Blog", link: "/coming-soon" },
    { name: "Contact Us", link: "/contact-us" },
    { name: "Donate", link: "/donate" },
  ];

  return (
    <footer className="bg-alt text-white ">
      <section className="mx-auto pt-20 pb-40 mb-0">
        <div className="flex justify-center items-start flex-col md:justify-between md:flex-row gap-8 lg:px-16">
          <div className="">
            <img src={logo} alt="BUILD Nigeria" className=" h-8 mb-6" />
            <div>
              <h6 className="font-serif font-semibold text-lg mb-2">
                Connect with us
              </h6>
              <div className="flex gap-4 text-lg">
                {socials.map((s) => {
                  return (
                    <Link
                      target="_blank"
                      key={s.anme}
                      to={s.iconUrl}
                      className="text-white"
                    >
                      <s.icon size={32} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="">
            <hi className="font-bold text-md font-serif tracking-wide">
              Organisation
            </hi>
            <ul className="">
              {links1.map((link, i) => {
                return (
                  <li
                    key={i}
                    className="text-sm text-secondary font-medium mt-3"
                  >
                    {link.anchor ? (
                      <AnchorLink
                        to={link.link}
                        title={link.name}
                        // stripHash
                      />
                    ) : (
                      <Link to={link.link} className="">
                        {link.name}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="">
            <hi className="font-bold text-md font-serif tracking-wide">
              Our Programs
            </hi>
            <ul className="">
              {links2.map((link, i) => {
                return (
                  <li
                    key={i}
                    className="text-sm text-secondary font-medium mt-3"
                  >
                    <Link to={link.link} className="">
                      {link.name}{" "}
                      {link.soon && (
                        <span className="py-1 px-2 rounded-full mx-2 bg-secondary text-primary text-xs">
                          Coming Soon
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="">
            <hi className="font-bold text-md font-serif tracking-wide">
              Resources
            </hi>
            <ul className="">
              {links3.map((link, i) => {
                return (
                  <li
                    key={i}
                    className="text-sm text-secondary font-medium mt-3"
                  >
                    <Link to={link.link} className="">
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <hr className="my-10 opacity-20" />
        <div className="lg:px-16">
          <p className="font-serif tracking-wider text-justify text-secondary/50">
            &copy; {new Date().getFullYear()}.{" "}
            <Link to="./" target="_blank">
              BUILD Nigeria
            </Link>
            . All Rights Reserved. BUILD Nigeria INC is an exempt organization
            as described in Section 501(c)(3) of the Internal Revenue Code. Our
            EIN is 86-1853644
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
