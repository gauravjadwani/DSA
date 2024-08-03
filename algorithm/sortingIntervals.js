function mergeIntervals(intervals) {
    if (intervals.length === 0) return [];
  
    // Sort the intervals based on the start time
    intervals.sort((a, b) => a[0] - b[0]);
  
    // Initialize a stack and push the first interval
    const stack = [intervals[0]];
  
    // Iterate through the intervals
    for (let i = 1; i < intervals.length; i++) {
      const [start, end] = intervals[i];
      const [stackStart, stackEnd] = stack[stack.length - 1];
  
      // If there's an overlap, merge the intervals
      if (stackEnd >= start) {
        stack[stack.length - 1] = [stackStart, Math.max(stackEnd, end)];
      } else {
        // No overlap, push the current interval onto the stack
        stack.push([start, end]);
      }
    }
  
    // Return the merged intervals from the stack
    return stack;
  }
  
  // Example usage
  const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
  console.log(mergeIntervals(intervals)); // Output: [[1, 6], [8, 10], [15, 18]]
  