import { useEffect, useState } from "react";

const Result = () => {
  interface PossibleCondition {
    name: string;
    description?: string;
    severity?: string;
  }
  interface AnalysisResult {
    status: string;
    message: string;
    result: {
      disclaimer: string;
      analysis: {
        possibleConditions: PossibleCondition[];
        generalAdvice: {
          recommendedActions: string[];
          lifestyleConsiderations: string[];
          whenToSeekMedicalAttention: string[];
        };
      };
      educationalResources: {
        medicalTerminology: Record<string, string>;
        preventiveMeasures: string[];
        reliableSources: string[];
      };
      meta: {
        analysisType: string;
        confidenceLevel: string;
        limitations: string[];
      };
    };
  }

  const [resultData, setResultData] = useState<AnalysisResult | null>(null);

  useEffect(() => {
    // Retrieve and parse the result from localStorage
    const storedResult = localStorage.getItem("result");
    if (storedResult) {
      try {
        const parsedResult = JSON.parse(storedResult);
        setResultData(parsedResult.result); // Accessing `.result` directly
      } catch (error) {
        console.error("Error parsing result data:", error);
      }
    }
  }, []);

  if (!resultData) {
    return <div>Loading result...</div>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Diagnosis Result</h1>

      {/* Status & Message */}
      <p className="text-lg font-semibold text-gray-700">
        Status: {resultData.status}
      </p>
      <p className="text-gray-600">{resultData.message}</p>

      {/* Disclaimer */}
      <div className="mt-4 p-4 bg-yellow-100 border-l-4 border-yellow-500 rounded-md">
        <p className="text-sm text-gray-800">{resultData.result.disclaimer}</p>
      </div>

      {/* General Advice */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">General Advice</h2>
        <ul className="list-disc pl-6">
          {resultData.result.analysis.generalAdvice.recommendedActions.map(
            (action, index) => (
              <li key={index} className="text-sm text-gray-700">
                {action}
              </li>
            )
          )}
        </ul>
      </div>

      {/* Educational Resources */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Educational Resources</h2>
        <p className="text-sm">
          <span className="font-semibold">Preventive Measures:</span>{" "}
          {resultData.result.educationalResources.preventiveMeasures.join(", ")}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Reliable Sources:</span>{" "}
          {resultData.result.educationalResources.reliableSources.join(", ")}
        </p>
      </div>

      {/* Meta Information */}
      <div className="mt-6 p-4 bg-blue-100 rounded-md">
        <h2 className="text-lg font-semibold">Analysis Details</h2>
        <p className="text-sm">
          <span className="font-semibold">Type:</span>{" "}
          {resultData.result.meta.analysisType}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Confidence Level:</span>{" "}
          {resultData.result.meta.confidenceLevel}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Limitations:</span>{" "}
          {resultData.result.meta.limitations.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default Result;
