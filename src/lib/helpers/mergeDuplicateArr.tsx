export function mergeArrayDuplicates(arr: any[]) {
  const mergedArray = [];
  const seenValues: any = {};

  for (const item of arr) {
    if (!seenValues[item.tableId]) {
      mergedArray.push(item.tableId);
      seenValues[item.tableId] = true;
    }
  }

  return mergedArray;
}
