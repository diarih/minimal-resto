export function mergeArrayDuplicates(arr: Order[]) {
  const mergedArray: string[] = [];
  const seenValues: Record<string, boolean> = {};

  for (const item of arr) {
    if (!seenValues[item.tableId]) {
      mergedArray.push(item.tableId);
      seenValues[item.tableId] = true;
    }
  }

  return mergedArray;
}
