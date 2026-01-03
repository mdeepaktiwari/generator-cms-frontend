import React, { useEffect, useState } from "react";
import { ErrorIcon, LoadingIcon, WriteIcon } from "../component/Icons";
import moment from "moment";
import { capitalizeWord, getColorType } from "../utils/global";
import { useNavigate } from "react-router-dom";
import { contentHistory } from "../services/content";

export default function ContentHistory() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [contentItems, setContentItems] = useState([]);
  const navigate = useNavigate();

  async function getContentHistory() {
    try {
      setIsLoading(true);
      setError(null);
      const res = await contentHistory();
      setContentItems(res?.data?.content);
    } catch (error) {
      console.error("Error in fetching content history", error);
      setError("Failed to load content history. Please try again");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getContentHistory();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Content history
          </h1>
          <p className="text-gray-600 text-lg">
            View all your generated content
          </p>
        </div>

        {isLoading && (
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            <LoadingIcon style="animate-spin h-12 w-12 text-indigo-600 mb-4" />
            <p className="text-gray-600 text-lg">Loading content...</p>
          </div>
        )}

        {error && !isLoading && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-red-600 text-center flex items-center justify-center gap-2">
              <ErrorIcon style="w-5 h-5" />
              {error}
            </p>
            <button
              onClick={getContentHistory}
              className="mt-4 mx-auto block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        )}

        {!isLoading && !error && contentItems.length === 0 && (
          <div className="bg-white rounded-2xl shadow-xl p-12 border border-gray-100">
            <div className="flex flex-col items-center justify-center text-gray-400">
              <WriteIcon style="w-24 h-24 mb-4 opacity-50" />
              <p className="text-lg font-medium mb-2">No content yet</p>
              <p className="text-sm text-center">
                Start generating content to see them here
              </p>
            </div>
          </div>
        )}

        {!isLoading && !error && contentItems?.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {contentItems.map((item, index) => (
              <div
                key={item._id || item.id || index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${getColorType(
                          item?.type
                        )}`}
                      >
                        {capitalizeWord(item?.type)}
                      </span>
                      <p className="text-xs text-gray-500 font-medium">
                        {moment(item?.createdAt).endOf("day").fromNow()}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-gray-700 text-sm line-clamp-1">
                      {item?.content}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        navigate(`/content-details/${item._id}`);
                      }}
                      className="flex-1 cursor-pointer bg-indigo-600 text-white py-2.5 px-4 rounded-lg font-semibold text-sm hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
                    >
                      View full content
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
