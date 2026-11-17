import { useScrollProgress } from '../hooks/useScrollProgress';

export function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] h-[2px] bg-gradient-to-r from-sky-400 via-sky-300 to-blue-500 will-change-transform"
      style={{
        transform: `scaleX(${progress / 100})`,
        transformOrigin: '0%',
      }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    />
  );
}
