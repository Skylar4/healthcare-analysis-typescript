import React from "react";

const Documentation = () => {
  return (
    <div className="min-h-screen px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
        Project Documentation
      </h1>

      <div className="mb-10">
        <h2 className="text-3xl font-semibold #4A4A4A mb-4">
          Sprint 1: The Rocky Start
        </h2>
        <p className="text-lg #4A4A4A">
          Sprint 1 marked the beginning of our journey, but it wasn’t without its challenges. While we focused
          on setting up the project structure and laying the groundwork, things didn't go as smoothly as we hoped.
          Despite the rough start, it was an essential phase in understanding the project's requirements and resolving
          initial technical issues. Here's a breakdown of what happened during this sprint:
        </p>

        <ul className="list-disc pl-5 mt-4 text-lg #4A4A4A">
          <li><strong>Key Goals:</strong> 
            <ul className="list-inside mt-2">
              <li>Initial project setup (file structure, dependencies, environment configuration).</li>
              <li>Basic components setup (e.g., the <code>Documentation</code> page and initial app layout).</li>
              <li>Discussion and definition of the project scope and long-term goals.</li>
              <li>Identification of roadblocks and addressing them for future sprints.</li>
            </ul>
          </li>

          <li><strong>Challenges:</strong> 
            <ul className="list-inside mt-2">
              <li>Spent more time troubleshooting than anticipated during setup.</li>
              <li>Struggled with defining the architecture and technology stack early on.</li>
              <li>Limited visible progress on features or content due to focus on foundation building.</li>
            </ul>
          </li>

          <li><strong>Outcome:</strong> 
            <p className="mt-2">
              Although not much was visible at the end of Sprint 1, we gained valuable insights that allowed us to
              improve our process and refine the scope. Sprint 1 paved the way for smoother, more efficient work
              in the following sprints.
            </p>
          </li>
        </ul>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-semibold #4A4A4A mb-4">
          Sprint 2: Building Foundations
        </h2>
        <p className="text-lg #4A4A4A">
          Sprint 2 is where we aim to build on what we learned from Sprint 1. We plan to focus on:
        </p>
        <ul className="list-disc pl-5 mt-4 text-lg #4A4A4A">
          <li>Building core features and refining the user interface.</li>
          <li>Improving documentation structure for clarity and readability.</li>
          <li>Testing the setup and refining the tech stack for future scalability.</li>
        </ul>
      </div>
    </div>
  );
};

export default Documentation;
