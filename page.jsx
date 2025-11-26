"use client";
import { useState } from "react";

export default function Page() {
  const [condition, setCondition] = useState("");
  const [feelings, setFeelings] = useState("");
  const [result, setResult] = useState(null);

  const getRecommendation = () => {
    let rec = [];
    const c = condition.toLowerCase();
    const f = feelings.toLowerCase();

    if (c.includes("adhd") || f.includes("hyper")) {
      rec.push("Sensory Regulation Kit (fidgets, weighted lap pad, visual timer)");
    }
    if (c.includes("autism") || f.includes("overwhelmed")) {
      rec.push("Calming Sensory Kit (noise-cancelling headphones, chewy tools, soft textures)");
    }
    if (c.includes("cp") || c.includes("motor")) {
      rec.push("Motor Therapy Kit (therapy putty, grip tools, fine motor games)");
    }
    if (c.includes("anxiety") || f.includes("scared") || f.includes("nervous")) {
      rec.push("Emotional Regulation Kit (breathing cards, stress ball, feelings chart)");
    }
    if (rec.length === 0) {
      rec.push("General Support Kit (mixed sensory items, simple motor tools, calm-down supports)");
    }

    setResult(rec);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-xl space-y-6">
        <h1 className="text-3xl font-bold text-center">Pediatric Neuro Kit Recommender</h1>

        <div className="space-y-2">
          <label className="font-medium">Patient Condition</label>
          <input
            className="w-full p-3 rounded-xl border"
            placeholder="e.g., ADHD, Autism, CP, Anxiety"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label className="font-medium">Current Feelings</label>
          <input
            className="w-full p-3 rounded-xl border"
            placeholder="e.g., overwhelmed, hyper, scared"
            value={feelings}
            onChange={(e) => setFeelings(e.target.value)}
          />
        </div>

        <button
          onClick={getRecommendation}
          className="w-full bg-blue-600 text-white p-3 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          Get Kit Recommendation
        </button>

        {result && (
          <div className="mt-4 p-4 bg-blue-50 rounded-xl">
            <h2 className="font-bold text-xl mb-2">Recommended Kit(s):</h2>
            <ul className="list-disc ml-6 space-y-1">
              {result.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}