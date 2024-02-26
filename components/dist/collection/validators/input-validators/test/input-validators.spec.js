import { requiredField, requiredFileInput } from "../input-validators";
import { Blob } from "buffer";
const createFileFromMockFile = (file) => {
    const blob = new Blob([file.body], { type: file.mimeType });
    blob['lastModifiedDate'] = new Date();
    blob['name'] = file.name;
    return blob;
};
const createMockFileList = (files) => {
    const fileList = {
        length: files.length,
        item(index) {
            return fileList[index];
        },
        [Symbol.iterator]: function () {
            throw new Error('Function not implemented.');
        },
    };
    files.forEach((file, index) => (fileList[index] = createFileFromMockFile(file)));
    return fileList;
};
describe('Required input validator', () => {
    const results = [
        { value: 'Text field value', res: true },
        { value: '', res: false },
        { value: ' ', res: false },
    ];
    results.forEach(i => it(`Should return ${i.res} for ${i.value}`, () => {
        expect(requiredField.validate(i.value)).toEqual(i.res);
    }));
});
describe('Required file input validator', () => {
    const results = [
        {
            value: createMockFileList([
                { body: 'test', mimeType: 'text/plain', name: 'test1.txt' },
                { body: 'test', mimeType: 'text/plain', name: 'test2.txt' },
            ]),
            res: true,
        },
        {
            value: createMockFileList([
                { body: 'test', mimeType: 'text/plain', name: 'test1.txt' },
            ]),
            res: true,
        },
        { value: createMockFileList([]), res: false },
    ];
    results.forEach(i => it(`Should return ${i.res} for ${i.value}`, () => {
        expect(requiredFileInput.validate(i.value)).toEqual(i.res);
    }));
});
//# sourceMappingURL=input-validators.spec.js.map
