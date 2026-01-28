import React from "react";
import LinkedInIcon from "../../../assets/linkIcons/linkedinIcon.svg?react";
import GitHubIcon from "../../../assets/linkIcons/githubIcon.svg?react";
import CodePenIcon from "../../../assets/linkIcons/codePenIcon.svg?react";
import YoutubeIcon from "../../../assets/linkIcons/youtubeIcon.svg?react";
import ChessPlayer from "./ChessPlayer";
import { useWindowSize } from "../../../hooks/useWindowSize";

const LeftSideSection = () => {
  const { width, height } = useWindowSize();
  const linkIcons = [
    {
      href: "https://www.linkedin.com/in/tebogo-dube",
      icon: <LinkedInIcon />,
    },
    {
      href: "https://github.com/Tebogo11",
      icon: <GitHubIcon style={{ marginTop: "5px" }} />,
    },
    {
      href: "https://codepen.io/Tebogo11",
      icon: <CodePenIcon style={{ marginLeft: "-8px" }} />,
    },
    {
      href: "https://www.youtube.com/@SYNTHv3",
      icon: <YoutubeIcon />,
    },
  ];

  return (
    <div className="md:w-1/2  min-h-50 flex justify-start items-start pr-10">
      <div className="fixed top-12 md:top-18 md:min-h-[calc(100vh-12rem)] flex flex-col justify-between">
        <div>
          <h1 className="">Tebogo Dube</h1>
          <h2 className="text-4x2 ">Senior React / React Native Engineer</h2>
          <p className="text-left text-[0.9rem] font-extralight mt-2 w-3/5">
            I build accessible, well-structured web experiences with a focus on
            quality and detail.
          </p>
        </div>

        <div>
          {width > 770 && (
            <div className="">
              <p
                className="
              text-xs
              w-2/4
              "
              >
                Every move tells a story — these are mine.
              </p>
              <ChessPlayer />
            </div>
          )}
          <div className="flex flex-row justify-start gap-1 ml-[-5px] mt-4">
            {linkIcons.map((link) => (
              <a
                href={link.href}
                key={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity w-8 h-8 flex items-center justify-center"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideSection;
