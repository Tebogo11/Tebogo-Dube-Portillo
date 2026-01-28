type JobHistoryType = {
  company: string;
  role: string;
  duration: string;
  description: string;
  bulletPoints: string[];
  url: string;
};
const JobItem = ({ job }: { job: JobHistoryType }) => {
  //   const preview = getLinkPreview(job.url);
  //   const [preview, setPreview] = useState<{
  //     title: string;
  //     description: string | undefined;
  //     image: string | undefined;
  //   }>();

  //   useEffect(() => {
  //     const fetchPreview = async () => {
  //       const data = await getLinkPreview(job.url);
  //       setPreview(data);
  //     };
  //     fetchPreview();
  //   }, [job.url]);

  return (
    <div
      onClick={() => {
        window.open(job.url, "_blank");
      }}
      key={job.company}
      className="hover:bg-accent/5 z-10 border-white/20 p-4  cursor-pointer"
    >
      <p className="decoration-from-font font-extralight text-sm text-white hover:underline mb-1 block">
        {job.url}{" "}
      </p>
      <h2 className="font-semibold text-lg">
        {job.role} @ {job.company}
      </h2>
      <p className="text-sm  text-accent">{job.duration}</p>
      <p className="mt-2 font-extralight text-[0.9rem]">{job.description}</p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        {job.bulletPoints.map((point, index) => (
          <li
            key={index}
            className="font-extralight  text-base-content/60 text-[0.8rem]"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobItem;
