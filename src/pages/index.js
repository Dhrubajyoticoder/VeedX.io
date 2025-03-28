import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import CanvasArea from "../components/CanvasArea";

export default function Home() {
  const [activeTool, setActiveTool] = useState("upload");

  return (
    <div className="flex">
      
      <CanvasArea activeTool={activeTool} />
    </div>
  );
}
