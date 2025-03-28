// import { useState, useEffect } from "react";

// const UploadSection = ({ setMedia }) => {
//   const [preview, setPreview] = useState(null);

//   const handleUpload = (event) => {
//     const file = event.target.files[0];
//     if (!file) return;

//     // ✅ Validate File Type (Image or Video Only)
//     if (!file.type.startsWith("image/") && !file.type.startsWith("video/")) {
//       alert("Only image and video files are allowed.");
//       return;
//     }

//     const newMedia = {
//       url: URL.createObjectURL(file),
//       type: file.type,
//     };

//     console.log("Uploaded Media:", newMedia); // Debugging log
//     setMedia(newMedia);
//     setPreview(newMedia);
//   };

//   // ✅ Cleanup Object URL to prevent memory leaks
//   useEffect(() => {
//     return () => {
//       if (preview) URL.revokeObjectURL(preview.url);
//     };
//   }, [preview]);

//   return (
//     <div className="p-4 bg-white border rounded flex flex-col items-center">
//       <input
//         type="file"
//         accept="image/*,video/*"
//         onChange={handleUpload}
//         className="hidden"
//         id="file-upload"
//       />
//       <label
//         htmlFor="file-upload"
//         className="cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded"
//       >
//         Upload File
//       </label>

//       {/* ✅ Preview Uploaded Media */}
//       {preview && (
//         <div className="mt-4 w-full max-w-md">
//           {preview.type.startsWith("image/") ? (
//             <img
//               src={preview.url}
//               alt="Preview"
//               className="w-full h-auto rounded shadow"
//             />
//           ) : (
//             <video
//               src={preview.url}
//               controls
//               className="w-full rounded shadow"
//             />
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default UploadSection;
