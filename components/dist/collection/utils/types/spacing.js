// Helper function to generate SpacingArray dynamically
export function generateSpacingArray() {
    const values = [];
    for (let i = 0; i <= 1250; i += 25) {
        values.push(i.toString());
    }
    return values;
}
export const SpacingArray = generateSpacingArray();
//# sourceMappingURL=spacing.js.map
