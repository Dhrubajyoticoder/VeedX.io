// import { useEffect, useState } from "react";

// const ProgressBar = ({ videoRef }) => {
//   const [progress, setProgress] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [hoverTime, setHoverTime] = useState(null);

//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     const updateProgress = () => {
//       setProgress((video.currentTime / video.duration) * 100 || 0);
//     };

//     const updateDuration = () => setDuration(video.duration);

//     video.addEventListener("timeupdate", updateProgress);
//     video.addEventListener("loadedmetadata", updateDuration);

//     return () => {
//       video.removeEventListener("timeupdate", updateProgress);
//       video.removeEventListener("loadedmetadata", updateDuration);
//     };
//   }, [videoRef]);

//   const handleProgressBarClick = (event) => {
//     if (!videoRef?.current) return;

//     const rect = event.currentTarget.getBoundingClientRect();
//     const clickX = event.clientX - rect.left;
//     const newTime = (clickX / rect.width) * videoRef.current.duration;
//     videoRef.current.currentTime = newTime;
//   };

//   const handleMouseMove = (event) => {
//     if (!videoRef?.current) return;

//     const rect = event.currentTarget.getBoundingClientRect();
//     const hoverX = event.clientX - rect.left;
//     const hoverTime = (hoverX / rect.width) * videoRef.current.duration;
//     setHoverTime(hoverTime);
//   };

//   const handleMouseLeave = () => {
//     setHoverTime(null);
//   };

//   return (
//     <div
//       className="w-full h-2 bg-gray-700 rounded cursor-pointer relative"
//       onClick={handleProgressBarClick}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       aria-label="Video progress bar"
//     >
//       {/* Progress Indicator */}
//       <div
//         className="h-full bg-blue-500 rounded transition-all"
//         style={{ width: `${progress}%` }}
//       ></div>

//       {/* Time Stamps (Dynamic based on duration) */}
//       {duration > 0 && (
//         <div className="absolute top-[-20px] w-full flex justify-between text-xs text-white">
//           {Array.from({ length: 11 }).map((_, i) => (
//             <span key={i}>{Math.round((i / 10) * duration)}s</span>
//           ))}
//         </div>
//       )}

//       {/* Hover Time Preview */}
//       {hoverTime !== null && (
//         <div
//           className="absolute -top-8 left-0 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded"
//           style={{ left: `${(hoverTime / duration) * 100}%` }}
//         >
//           {Math.round(hoverTime)}s
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProgressBar;

