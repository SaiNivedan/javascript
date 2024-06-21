const items = ["apple", "banana", "orange", "apple", "mango"];

const uniqueItem = new Set();

for (const item of items) {
    if (uniqueItem.has(item)) {
        console.log("Duplicate: ", item);
        break;
    }
    uniqueItem.add(item);
}
