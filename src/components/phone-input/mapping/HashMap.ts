export class HashMap<T> {
  private hashMap: { [key: string]: T } = {};

  // Add a key-value pair to the hash map
  addToHashMap(key: string, value: T): void {
    this.hashMap[key] = value;
  }

  // Get a value from the hash map by key
  getValueFromHashMap(key: string): T | null {
    return this.hashMap[key];
  }

  // Check if a key exists in the hash map
  keyExistsInHashMap(key: string): boolean {
    return key in this.hashMap;
  }

  // Remove a key-value pair from the hash map
  removeFromHashMap(key: string): void {
    delete this.hashMap[key];
  }

  // Get all keys from the hash map
  getAllKeysFromHashMap(): string[] {
    return Object.keys(this.hashMap);
  }

  // Get all values from the hash map
  getAllValuesFromHashMap(): T[] {
    return Object.values(this.hashMap);
  }

  // Clear the hash map (remove all key-value pairs)
  clearHashMap(): void {
    this.hashMap = {};
  }
}
