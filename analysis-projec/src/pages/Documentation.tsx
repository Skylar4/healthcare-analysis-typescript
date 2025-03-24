import { useState } from "react";

const sprints = [
  {
    number: 1,
    title: "Rocky Start",
    description: `Sprint 1 marked the beginning of our journey, but it wasn’t without its challenges. While we focused
on setting up the project structure and laying the groundwork, things didn't go as smoothly as we hoped.
Despite the rough start, it was an essential phase in understanding the project's requirements and resolving
initial technical issues. Here's a breakdown of what happened during this sprint:`,

    goals: [
      "Initial project setup (file structure, dependencies, environment configuration).",
      "Basic components setup (e.g., the Documentation page and initial app layout).",
      "Discussion and definition of the project scope and long-term goals.",
      "Identification of roadblocks and addressing them for future sprints.",
    ],

    challenges: [
      "Spent more time troubleshooting than anticipated during setup.",
      "Struggled with defining the architecture and technology stack early on.",
      "Limited visible progress on features or content due to focus on foundation building.",
    ],

    outcome:
      "Although not much was visible at the end of Sprint 1, we gained valuable insights that allowed us to improve our process and refine the scope. Sprint 1 paved the way for smoother, more efficient work in the following sprints.",
  },
  {
    number: 2,
    title: "Building Foundations",
    description: `Sprint 2 is where we aim to build on what we learned from Sprint 1. We plan to focus on:`,

    goals: [
      "Building core features and refining the user interface.",
      "Improving documentation structure for clarity and readability.",
      "Testing the setup and refining the tech stack for future scalability.",
    ],
  },
  {
    number: 3,
    title: "To Be Announced",
    description: "Sprint 3 details will be added soon.",
    goals: [],
  },
];

const Documentation = () => {
  const [selectedSprint, setSelectedSprint] = useState(1);

  // fallback to first sprint to ensure `sprint` is never undefined
  const sprint = sprints.find((s) => s.number === selectedSprint) ?? sprints[0];

  return (
    <div className="min-h-screen px-6 py-12 bg-gray-50">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
        Project Documentation
      </h1>

      {/* Sprint Selection Boxes */}
      <div className="flex justify-center gap-6 mb-10">
        {sprints.map((s) => (
          <button
            key={s.number}
            onClick={() => setSelectedSprint(s.number)}
            className={`w-24 h-24 flex flex-col items-center justify-center rounded-xl border-2 font-semibold text-lg transition-all duration-200
              ${
                selectedSprint === s.number
                  ? "bg-blue-400 text-black border-blue-400"
                  : "bg-white text-black border-white hover:bg-blue-100 shadow-md"
              }`}
          >
            <span className="text-sm">Sprint</span>
            <span className="text-2xl font-bold">{s.number}</span>
          </button>
        ))}
      </div>

      {/* Sprint Content Box */}
      <div className="bg-blue-200 rounded-2xl p-8 mx-8 shadow-md">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">{sprint.title}</h2>
        <p className="text-lg text-gray-800 mb-6 whitespace-pre-line">{sprint.description}</p>

        {sprint.goals.length > 0 && (
          <>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Key Goals:</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-800">
              {sprint.goals.map((goal, index) => (
                <li key={index}>{goal}</li>
              ))}
            </ul>
          </>
        )}

        {sprint.challenges && (
          <>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Challenges:</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-800">
              {sprint.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </>
        )}

        {sprint.outcome && (
          <>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Outcome:</h3>
            <p className="text-gray-800">{sprint.outcome}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Documentation;

