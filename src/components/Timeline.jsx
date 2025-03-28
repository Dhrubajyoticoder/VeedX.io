// import { useEffect } from "react";

// const Timeline = ({ media, timing, setTiming, videoRef }) => {
//   useEffect(() => {
//     if (videoRef?.current && timing?.start !== undefined) {
//       videoRef.current.currentTime = timing.start;
//     }
//   }, [timing?.start, videoRef]);

//   const handleProgressClick = (event) => {
//     if (!videoRef?.current) return;

//     const rect = event.currentTarget.getBoundingClientRect();
//     const clickX = event.clientX - rect.left;
//     const newTime = (clickX / rect.width) * (videoRef.current?.duration || 1); // Avoid division by zero

//     setTiming((prev) => ({ ...prev, start: newTime }));
//     videoRef.current.currentTime = newTime;
//   };

//   return (
//     <div className="w-full p-4 bg-gray-200">
//       <div
//         className="relative w-full h-2 bg-gray-400 rounded cursor-pointer"
//         onClick={handleProgressClick}
//       >
//         <div
//           className="h-full bg-blue-500 rounded"
//           style={{
//             width: `${(timing?.start / (videoRef?.current?.duration || timing?.end || 1)) * 100}%`,
//           }}
//         ></div>
//       </div>

//       {/* Start and End Timing */}
//       <div className="flex justify-between mt-2 text-sm text-gray-800">
//         <span>{timing?.start.toFixed(2)}s</span>
//         <span>{videoRef?.current?.duration?.toFixed(2) || timing?.end}s</span>
//       </div>
//     </div>
//   );
// };

// export default Timeline;
