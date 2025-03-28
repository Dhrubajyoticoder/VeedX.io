// import { useEffect, useState } from "react";

// const VideoControls = ({ videoRef }) => {
//   const [isPlaying, setIsPlaying] = useState(false);

//   useEffect(() => {
//     if (!videoRef || !videoRef.current) return; // Prevent null access

//     const video = videoRef.current;

//     const updateState = () => setIsPlaying(!video.paused);

//     video.addEventListener("play", updateState);
//     video.addEventListener("pause", updateState);

//     return () => {
//       video.removeEventListener("play", updateState);
//       video.removeEventListener("pause", updateState);
//     };
//   }, [videoRef]);

//   const handlePlayPause = () => {
//     if (videoRef?.current) {
//       if (videoRef.current.paused) {
//         videoRef.current.play();
//       } else {
//         videoRef.current.pause();
//       }
//     }
//   };

//   return (
//     <div className="flex space-x-2 p-2 bg-gray-100 rounded">
//       <button
//         onClick={handlePlayPause}
//         className="px-4 py-2 bg-blue-500 text-white rounded"
//       >
//         {isPlaying ? "Pause" : "Play"}
//       </button>
//     </div>
//   );
// };

// export default VideoControls;
