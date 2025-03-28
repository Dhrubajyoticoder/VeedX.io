import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import MediaPreview from "./MediaPreview";
import { Button, Card, Text, Group } from "@mantine/core";
import { PanelRight, Settings, Download } from "lucide-react";

const CanvasArea = () => {
  const [media, setMedia] = useState(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 450, x: 0, y: 0 });
  const [timing, setTiming] = useState({ start: 0, end: 10 });

  return (
    <div className="min-h-screen w-full flex flex-col text-gray-900 bg-gray-100 overflow-hidden">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-1 w-full h-full overflow-hidden">
        <div className="flex w-full h-full gap-0">
          {/* Left Sidebar */}
          <Sidebar dimensions={dimensions} setDimensions={setDimensions} timing={timing} setTiming={setTiming} setMedia={setMedia} />

          {/* Main Canvas Area - Full Width and Height */}
          <div className="flex-1 flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-md relative w-full h-full">
            <MediaPreview media={media} dimensions={dimensions} setDimensions={setDimensions} timing={timing} />
          </div>
        </div>

        {/* Right Sidebar - Positioned Beside Canvas */}
        <div className="w-56 bg-white shadow-xl rounded-lg p-6 flex flex-col space-y-6 border border-gray-200">
          {/* Media Layers Card */}
          <Card shadow="xl" padding="lg" radius="lg" withBorder className="hover:scale-105 transform transition-all">
            <Group position="apart">
              <Text weight={600} size="lg" className="text-gray-900">Media Layers</Text>
              <PanelRight className="w-6 h-6 text-gray-600" />
            </Group>
          </Card>

          {/* Media Settings Card */}
          <Card shadow="xl" padding="lg" radius="lg" withBorder className="hover:scale-105 transform transition-all">
            <Group position="apart">
              <Text weight={600} size="lg" className="text-gray-900">Media Settings</Text>
              <Settings className="w-6 h-6 text-gray-600" />
            </Group>
          </Card>

          {/* Export Media Button */}
          <Button 
            leftIcon={<Download className="w-6 h-6" />} 
            fullWidth 
            radius="md" 
            size="lg" 
            className="bg-[rgb(20,71,230)] text-white hover:bg-blue-700 transition-all duration-200 shadow-lg transform hover:scale-105"
          >
            Export Media
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CanvasArea;
