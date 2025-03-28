import { useEffect, useState, useRef } from "react";
import { Rnd } from "react-rnd";
import { Play, Pause, SkipBack, SkipForward, Crop, Scissors } from "lucide-react";
import { Button, Slider, Text, Container, Group, ActionIcon } from "@mantine/core";

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = (time % 60).toFixed(1);
  return `${minutes.toString().padStart(2, "0")}:${seconds.padStart(4, "0")}`;
};

const MediaPreview = ({ media, dimensions, setDimensions, timing, setTiming }) => {
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(timing?.end || 5);
  const [isPlaying, setIsPlaying] = useState(false);
  const isImage = media?.type?.startsWith("image/");

  useEffect(() => {
    if (!isImage || !isPlaying) return;

    const interval = setInterval(() => {
      setCurrentTime((prev) => {
        if (prev >= duration) {
          clearInterval(interval);
          setIsPlaying(false);
          return duration;
        }
        return prev + 0.1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying, isImage, duration]);

  useEffect(() => {
    if (!videoRef.current) return;

    const updateProgress = () => {
      const time = videoRef.current.currentTime;
      setCurrentTime(time);
      if (timing && time >= timing.end) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    };

    videoRef.current.addEventListener("timeupdate", updateProgress);
    videoRef.current.addEventListener("loadedmetadata", () => {
      setDuration(videoRef.current.duration);
      if (typeof setTiming === "function") {
        setTiming((prev) => ({
          start: Math.min(prev?.start || 0, videoRef.current.duration),
          end: Math.min(prev?.end || videoRef.current.duration, videoRef.current.duration),
        }));
      }
    });

    return () => {
      videoRef.current?.removeEventListener("timeupdate", updateProgress);
    };
  }, [media, timing, setTiming]);

  const togglePlayPause = () => {
    if (isImage) {
      setCurrentTime(0);
      setIsPlaying(true);
    } else if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.currentTime = timing?.start || 0;
        videoRef.current.play();
      }
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimelineChange = (value) => {
    const newTime = (value / 100) * duration;
    setCurrentTime(newTime);
  };

  return (
    <Container size="xl" p="xl">
      <div
        className="relative flex items-center justify-center mx-auto border border-gray-300 rounded-lg shadow-lg bg-black"
        style={{ width: dimensions.width, height: dimensions.height }}
      >
        {media ? (
          <Rnd
            size={{ width: dimensions.width, height: dimensions.height }}
            position={{ x: dimensions.x, y: dimensions.y }}
            onDragStop={(e, d) => setDimensions((prev) => ({ ...prev, x: d.x, y: d.y }))}
            onResizeStop={(e, direction, ref, delta, position) => {
              setDimensions({
                width: ref.offsetWidth,
                height: ref.offsetHeight,
                x: position.x,
                y: position.y,
              });
            }}
            bounds="parent"
            className="border border-gray-400 shadow-lg bg-white rounded-md transition-transform duration-300"
          >
            {isImage ? (
              <img src={media.url} alt="Uploaded" className="w-full h-full object-contain rounded-md" />
            ) : (
              <video ref={videoRef} src={media.url} className="w-full h-full rounded-md" />
            )}
          </Rnd>
        ) : (
          <Text align="center" color="gray" className="animate-pulse">No media uploaded.</Text>
        )}
      </div>

      {media && (
        <div className="flex flex-col items-center space-y-4 mt-4">
          <Group spacing="xs">
            <Button onClick={() => setCurrentTime(Math.max(0, currentTime - 2))} variant="light" radius="xl" size="lg" className="hover:bg-gray-200">
              <SkipBack size={24} />
            </Button>
            <Button onClick={togglePlayPause} variant="filled" style={{ backgroundColor: 'rgb(37, 99, 235)' }} radius="xl" size="lg">
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </Button>
            <Button onClick={() => setCurrentTime(Math.min(duration, currentTime + 2))} variant="light" radius="xl" size="lg" className="hover:bg-gray-200">
              <SkipForward size={24} />
            </Button>
          </Group>

          <Text size="sm" color="gray">
            {formatTime(currentTime)} / {formatTime(duration)}
          </Text>

          <div className="relative w-full h-2 bg-gray-300 rounded-full mt-2">
            <div className="absolute top-0 left-0 h-2 bg-blue-500 rounded-full" style={{ width: `${(currentTime / duration) * 100}%`, transition: "width 0.2s ease" }} />
            <Slider value={(currentTime / duration) * 100} onChange={handleTimelineChange} min={0} max={100} className="absolute top-0 left-0 w-full h-2 cursor-pointer opacity-0" />
          </div>

          <Group spacing="xs" className="mt-4">
            <ActionIcon variant="outline" color="blue" size="lg" radius="xl">
              <Scissors size={24} />
            </ActionIcon>
            <ActionIcon variant="outline" color="blue" size="lg" radius="xl">
              <Crop size={24} />
            </ActionIcon>
          </Group>
        </div>
      )}
    </Container>
  );
};

export default MediaPreview;
