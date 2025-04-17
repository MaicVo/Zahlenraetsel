"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_check_pipe_1 = require("./date-check.pipe");
describe('DateCheckPipe', () => {
    it('create an instance', () => {
        const pipe = new date_check_pipe_1.DateCheckPipe();
        expect(pipe).toBeTruthy();
    });
});
