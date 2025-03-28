import { useState } from "react";
import { FaSearch, FaSlidersH, FaPalette } from "react-icons/fa";

const Sidebar = ({ dimensions, setDimensions, timing, setTiming, setMedia }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBrandKitsOpen, setIsBrandKitsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [dragging, setDragging] = useState(false);

  const handleDimensionChange = (e, key) => {
    const value = Math.max(0, +e.target.value);
    setDimensions((prev) => ({ ...prev, [key]: value }));
  };

  const handleTimingChange = (e, key) => {
    let value = Math.max(0, +e.target.value);
    if (key === "end" && value < timing.start) {
      value = timing.start;
    } else if (key === "start" && value > timing.end) {
      setTiming((prev) => ({ ...prev, end: value }));
    }
    setTiming((prev) => ({ ...prev, [key]: value }));
  };

  const handleFileUpload = (file) => {
    if (file && (file.type.startsWith("video/") || file.type.startsWith("image/"))) {
      const fileUrl = URL.createObjectURL(file);
      setMedia({ url: fileUrl, type: file.type });
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    handleFileUpload(file);
  };

  return (
    <div className="w-full sm:w-80 bg-white shadow-xl p-6 space-y-6 rounded-lg border border-gray-200">
      {/* Upload Section with Drag and Drop */}
      <div
        className={`flex flex-col items-center space-y-4 p-6 border-2 border-dashed rounded-lg cursor-pointer transition-all duration-300 ${dragging ? "border-blue-600 bg-blue-100" : "border-gray-300"}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <label className="cursor-pointer bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300">
          Upload Video/Image
          <input type="file" accept="video/*,image/*" className="hidden" onChange={(e) => handleFileUpload(e.target.files[0])} />
        </label>
        <p className="text-gray-500 text-sm">Drag & Drop media files here</p>
      </div>

      {/* Media Properties Section */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-800">Media Properties</h2>

        {/* Dimensions */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-600">Dimensions</h3>
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <div className="w-full sm:w-1/2">
              <label className="block text-xs text-gray-500">Width</label>
              <input
                type="number"
                value={dimensions.width}
                onChange={(e) => handleDimensionChange(e, "width")}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label className="block text-xs text-gray-500">Height</label>
              <input
                type="number"
                value={dimensions.height}
                onChange={(e) => handleDimensionChange(e, "height")}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-600">Timeline</h3>
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <div className="w-full sm:w-1/2">
              <label className="block text-xs text-gray-500">Start Time (s)</label>
              <input
                type="number"
                value={timing.start}
                onChange={(e) => handleTimingChange(e, "start")}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label className="block text-xs text-gray-500">End Time (s)</label>
              <input
                type="number"
                value={timing.end}
                onChange={(e) => handleTimingChange(e, "end")}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Optional Features: Search, Brand Kits, Settings */}
        <div className="space-y-4 mt-8">
          <div>
            <button
              className="w-full flex items-center justify-between p-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition-all duration-300"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <span className="text-sm font-medium text-gray-700">Search</span>
              <FaSearch />
            </button>
            {isSearchOpen && <input className="mt-2 w-full p-2 border border-gray-300 rounded-lg" placeholder="Search..." />}
          </div>

          <div>
            <button
              className="w-full flex items-center justify-between p-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition-all duration-300"
              onClick={() => setIsBrandKitsOpen(!isBrandKitsOpen)}
            >
              <span className="text-sm font-medium text-gray-700">Brand Kits</span>
              <FaPalette />
            </button>
            {isBrandKitsOpen && <div className="mt-2 text-gray-600">Add your brand kit items here.</div>}
          </div>

          <div>
            <button
              className="w-full flex items-center justify-between p-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition-all duration-300"
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
            >
              <span className="text-sm font-medium text-gray-700">Settings</span>
              <FaSlidersH />
            </button>
            {isSettingsOpen && <div className="mt-2 text-gray-600">Customize your settings here.</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
