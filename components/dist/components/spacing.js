// Helper function to generate SpacingArray dynamically
function generateSpacingArray() {
    const values = [];
    for (let i = 0; i <= 1250; i += 25) {
        values.push(i.toString());
    }
    return values;
}
const SpacingArray = generateSpacingArray();

export { SpacingArray as S };

//# sourceMappingURL=spacing.js.map