import JobItem from "./History/jobItem";

type JobHistoryType = {
  company: string;
  role: string;
  duration: string;
  description: string;
  bulletPoints: string[];
  url: string;
};

const jobHistoryData: JobHistoryType[] = [
  {
    company: "Ikiru People",
    role: "Senior React Engineer",
    duration: "December 2021 - Present",
    description:
      "Recruitment and HR platforms including web applications, Office 365 add-ins, and internal tooling for enterprise clients. Core team of 6 engineers + 1 QA, working closely with designers, product managers, and stakeholders.",
    bulletPoints: [
      "Contributed to the development and ongoing improvement of 5 production applications, including recruitment and HR platforms, Office 365 add-ins, and internal enterprise tooling.",
      "Led modernisation efforts across existing React codebases, including refactoring legacy systems, resolving complex production issues, and improving overall maintainability and performance.",
      "Built 2 applications from the ground up, taking responsibility for architecture, core feature development, and early technical direction.",
      "Owned features end-to-end, collaborating closely with designers and product managers, and incorporating direct user feedback to improve product usability and reliability.",
      "Led MVP research and technical exploration, evaluating new tools and approaches (e.g. Office.js-based solutions) to support evolving product and business requirements.",
    ],
    url: "https://www.ikirupeople.com",
  },
  {
    company: "MyLabourer",
    role: "Co-Founder & Lead Engineer",
    duration: "December 2024 - Present",
    description:
      "A production mobile marketplace enabling employers to discover, message, and hire nearby labourers for short-notice and temporary jobs.",
    bulletPoints: [
      "Co-founded and built a production mobile marketplace application connecting employers with available labourers for short-notice and local work.",
      "Sole engineer responsible for end-to-end architecture and development, building the app using React Native (Expo) and delivering both iOS and Android platforms.",
      "Implemented core product features including role-based access (employer / labourer), job posting and matching, availability tracking, real-time messaging, and maps & geolocation.",
      "Designed and integrated authentication, payments, and cloud backend services, managing deployment and ongoing development of a publicly available, live product.",
    ],
    url: "https://www.mylabourer.com",
  },
  {
    company: "Outfit AI",
    role: "Founder & Engineer",
    duration: "November 2025 - Present",
    description:
      "An AI-powered web application that provides personalised outfit recommendations based on user preferences and images.",
    bulletPoints: [
      "Building an AI-powered fashion recommendation web application that analyses user preferences and images to suggest complete outfits and styling improvements.",
      "Designed and developed the application end-to-end using React for the frontend, Convex for backend logic and real-time data, and Clerk for authentication, alongside AI-driven recommendation workflows.",
      "Integrated image analysis and LLM-based prompting to generate personalised outfit suggestions, with the product publicly accessible and under active development.",
    ],
    url: "https://www.o-ai.app",
  },
];
const ReleventJobHistory = () => {
  return (
    <div className="flex-1 flex flex-col gap-4 mb-10">
      {jobHistoryData.map((job) => {
        return <JobItem job={job} key={job.company} />;
      })}
    </div>
  );
};

export default ReleventJobHistory;
