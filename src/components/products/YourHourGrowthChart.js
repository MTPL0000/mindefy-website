"use client";
import { useState, useEffect, useRef } from "react";

export default function YourHourGrowthChart() {
  const [animationProgress, setAnimationProgress] = useState(0);
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const chartRef = useRef(null);

  const data = [
    { year: "2018", users: 0.5 },
    { year: "2019", users: 0.8 },
    { year: "2020", users: 1.2 },
    { year: "2021", users: 2.0 },
    { year: "2022", users: 3.0 },
    { year: "2023", users: 3.8 },
    { year: "2024", users: 4.5 },
    { year: "2025", users: 5.0 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            const duration = 1500;
            const startTime = Date.now();

            const animate = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);
              setAnimationProgress(progress);

              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the component is visible
      }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
    };
  }, [hasAnimated]);

  const maxUsers = 8;
  const chartHeight = 300;
  const chartWidth = 600;
  const padding = { top: 20, right: 40, bottom: 50, left: 60 };

  const xScale = (index) => {
    const availableWidth = chartWidth - padding.left - padding.right;
    return padding.left + (index / (data.length - 1)) * availableWidth;
  };

  const yScale = (value) => {
    const availableHeight = chartHeight - padding.top - padding.bottom;
    return chartHeight - padding.bottom - (value / maxUsers) * availableHeight;
  };

  // Calculate how many segments to show based on animation progress
  const totalSegments = data.length - 1;
  const currentSegment = animationProgress * totalSegments;
  const completedSegments = Math.floor(currentSegment);
  const segmentProgress = currentSegment - completedSegments;

  // Generate path for the animated line
  const getAnimatedPath = () => {
    if (completedSegments === 0 && segmentProgress === 0) return "";

    let path = `M ${xScale(0)} ${yScale(data[0].users)}`;

    for (let i = 0; i < completedSegments; i++) {
      path += ` L ${xScale(i + 1)} ${yScale(data[i + 1].users)}`;
    }

    // Add partial segment
    if (completedSegments < totalSegments && segmentProgress > 0) {
      const fromIndex = completedSegments;
      const toIndex = completedSegments + 1;
      const fromX = xScale(fromIndex);
      const fromY = yScale(data[fromIndex].users);
      const toX = xScale(toIndex);
      const toY = yScale(data[toIndex].users);

      const currentX = fromX + (toX - fromX) * segmentProgress;
      const currentY = fromY + (toY - fromY) * segmentProgress;

      path += ` L ${currentX} ${currentY}`;
    }

    return path;
  };

  // Determine which dots should be visible
  const visibleDots = completedSegments + (segmentProgress > 0 ? 1 : 0);

  return (
    <div
      ref={chartRef}
      className="flex flex-col justify-center rounded-2xl p-9 h-fit"
      style={{ boxShadow: "0px 0px 16px 0px #00000026" }}
    >
      <h3 className="text-xl md:text-2xl font-semibold font-poppins text-[#000000] mb-4">
        Year-Wise User Growth
        <span className="block text-sm text-[#6A7282] font-poppins font-medium">
          2018 – 2025 Journey
        </span>
      </h3>

      {/* Chart SVG */}
      <div className="mb-8 relative">
        <svg
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          className="w-full h-auto"
        >
          {/* Grid lines */}
          {[0, 2, 4, 6, 8].map((value) => (
            <g key={value}>
              <line
                x1={padding.left}
                y1={yScale(value)}
                x2={chartWidth - padding.right}
                y2={yScale(value)}
                stroke="#E5E7EB"
                strokeWidth="1"
              />
              <text
                x={padding.left - 15}
                y={yScale(value) + 5}
                fill="#9CA3AF"
                fontSize="12"
                textAnchor="end"
              >
                {value}
              </text>
            </g>
          ))}

          {/* X-axis labels */}
          {data.map((point, index) => (
            <text
              key={point.year}
              x={xScale(index)}
              y={chartHeight - padding.bottom + 30}
              fill="#6B7280"
              fontSize="14"
              textAnchor="middle"
              className="font-medium"
            >
              {point.year}
            </text>
          ))}

          {/* Y-axis label */}
          <text
            x={20}
            y={chartHeight / 2}
            fill="#9CA3AF"
            fontSize="12"
            textAnchor="middle"
            transform={`rotate(-90, 20, ${chartHeight / 2})`}
          >
            Million Users
          </text>

          {/* Animated line */}
          <path
            d={getAnimatedPath()}
            fill="none"
            stroke="#3B82F6"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Line segments for hover (invisible, full width) */}
          {animationProgress >= 1 &&
            data
              .slice(0, -1)
              .map((point, index) => (
                <line
                  key={`hover-line-${index}`}
                  x1={xScale(index)}
                  y1={yScale(point.users)}
                  x2={xScale(index + 1)}
                  y2={yScale(data[index + 1].users)}
                  stroke="transparent"
                  strokeWidth="20"
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredPoint(index)}
                  onMouseLeave={() => setHoveredPoint(null)}
                />
              ))}

          {/* Dots */}
          {data.map((point, index) => {
            const isVisible = index <= visibleDots;
            return (
              <g key={point.year}>
                {isVisible && (
                  <>
                    <circle
                      cx={xScale(index)}
                      cy={yScale(point.users)}
                      r="6"
                      fill="#3B82F6"
                      className="transition-all duration-200"
                    />
                    {/* Hover area */}
                    <circle
                      cx={xScale(index)}
                      cy={yScale(point.users)}
                      r="20"
                      fill="transparent"
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredPoint(index)}
                      onMouseLeave={() => setHoveredPoint(null)}
                    />
                    {/* Hover effect ring */}
                    {hoveredPoint === index && (
                      <circle
                        cx={xScale(index)}
                        cy={yScale(point.users)}
                        r="10"
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="2"
                        opacity="0.5"
                      />
                    )}
                  </>
                )}
              </g>
            );
          })}
        </svg>

        {/* Tooltip */}
        {hoveredPoint !== null && (
          <div
            className="absolute bg-gray-900 text-white px-4 py-2 rounded-lg shadow-xl pointer-events-none z-10 transition-all duration-200"
            style={{
              left: `${(xScale(hoveredPoint) / chartWidth) * 100}%`,
              top: `${
                (yScale(data[hoveredPoint].users) / chartHeight) * 100 - 15
              }%`,
              transform: "translate(-50%, -100%)",
            }}
          >
            <div className="text-center">
              <div className="text-xs text-gray-300 mb-1">
                {data[hoveredPoint].year}
              </div>
              <div className="text-lg font-bold">
                {data[hoveredPoint].users}M
              </div>
              <div className="text-xs text-gray-300">Users</div>
            </div>
            {/* Arrow */}
            <div
              className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full"
              style={{
                width: 0,
                height: 0,
                borderLeft: "6px solid transparent",
                borderRight: "6px solid transparent",
                borderTop: "6px solid #111827",
              }}
            />
          </div>
        )}
      </div>

      {/* Stats Cards */}
      <div className="flex flex-wrap gap-4 justify-center">
        <div
          className={`w-38 bg-[#A6D6FF] p-4 rounded-2xl text-center transform transition-all duration-700 ${
            animationProgress >= 0.3
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-xl text-[#20448F] font-poppins font-semibold mb-1">
            5M
          </p>
          <p className="text-xs text-[#20448F] font-medium font-poppins">
            Total Users
          </p>
        </div>
        <div
          className={`w-38 bg-[#A6D6FF] p-4 rounded-2xl text-center transform transition-all duration-700 ${
            animationProgress >= 0.4
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-xl text-[#20448F] font-poppins font-semibold mb-1">
            25
          </p>
          <p className="text-xs text-[#20448F] font-medium font-poppins">
            Languages
          </p>
        </div>
        <div
          className={`w-38 bg-[#A6D6FF] p-4 rounded-2xl text-center transform transition-all duration-700 ${
            animationProgress >= 0.5
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-xl text-[#20448F] font-poppins font-semibold mb-1">
            8 yrs
          </p>
          <p className="text-xs text-[#20448F] font-medium font-poppins">
            Journey
          </p>
        </div>
      </div>
    </div>
  );
}
