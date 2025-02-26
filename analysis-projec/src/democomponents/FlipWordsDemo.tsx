import { FlipWords } from "../components/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["better", "Stronger", "Healthier"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Welcome! feel
        <FlipWords words={words} /> <br />
       make the most of your Life
      </div>
    </div>
  );
}
