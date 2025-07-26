"use client";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { uploadFile, addSummary } from "../../store/features/summarySlice";
import { Loader2, UploadCloud, BookOpen } from "lucide-react";

export default function DashboardPage() {
  const dispatch = useDispatch();
  const { summaries, uploadedFiles } = useSelector((state) => state.summary);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = () => {
    if (!file) return;
    setLoading(true);

    const fakeSummary = {
      title: file.name,
      content:
        "This is a placeholder summary for demonstration. Your summarized content will appear here.",
      date: new Date().toLocaleDateString(),
    };

    setTimeout(() => {
      dispatch(uploadFile(file));
      dispatch(addSummary(fakeSummary));
      setFile(null);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-pink-100 p-6">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            📚 Notes Summarizer
          </h2>
          <p className="text-gray-600">Upload notes and get instant summaries and quizzes.</p>
        </div>

        {/* Upload Section */}
        <Card className="shadow-xl border-2 border-dashed border-indigo-300">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1 flex items-center gap-2 text-indigo-600">
                  <UploadCloud size={20} /> Upload Notes (PDF)
                </h3>
                <input
                  type="file"
                  className="block w-full border rounded p-2 mt-2 bg-white"
                  onChange={(e) => setFile(e.target.files[0])}
                />
                {file && (
                  <p className="text-sm text-gray-500 mt-1 truncate">
                    Selected: <strong>{file.name}</strong>
                  </p>
                )}
              </div>

              <div>
                <Button
                  disabled={!file || loading}
                  onClick={handleUpload}
                  className="mt-4 md:mt-0"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin mr-2 h-4 w-4" />
                      Summarizing...
                    </>
                  ) : (
                    "Upload & Summarize"
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Summary History */}
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-700">
            <BookOpen size={20} /> Summary History
          </h3>

          {summaries.length === 0 ? (
            <p className="text-sm text-gray-500 italic">No summaries yet. Upload a note to get started.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {summaries.map((summary, idx) => (
                <Card key={idx} className="shadow-md hover:shadow-lg transition">
                  <CardContent className="p-4">
                    <h4 className="text-md font-semibold text-indigo-700">
                      {summary.title}
                    </h4>
                    <p className="text-sm mt-2 h-32 overflow-y-auto text-gray-700 scrollbar-thin scrollbar-thumb-gray-300">
                      {summary.content}
                    </p>
                    <p className="text-xs text-muted mt-3 text-right text-gray-500">
                      📅 {summary.date}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
