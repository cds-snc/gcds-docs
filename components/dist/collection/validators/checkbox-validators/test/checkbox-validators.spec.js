import { requiredCheck } from "../checkbox-validators";
describe('Required checkbox validator', () => {
    const results = [
        { value: true, res: true },
        { value: false, res: false },
    ];
    results.forEach(i => it(`Should return ${i.res} for ${i.value}`, () => {
        expect(requiredCheck.validate(i.value)).toEqual(i.res);
    }));
});
//# sourceMappingURL=checkbox-validators.spec.js.map
