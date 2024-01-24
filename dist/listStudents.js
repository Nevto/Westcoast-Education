"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const loadStudentCourses = (searchTerm = '') => __awaiter(void 0, void 0, void 0, function* () {
    const baseUrl = 'http://localhost:3000';
    const endPoint = 'students';
    const url = `${baseUrl}/${endPoint}?courseTitle_like=${searchTerm}`;
    const http = new HttpClient(url);
    try {
        const students = yield http.get();
        return students;
    }
    catch (error) {
        console.log("couldn't load student with respective courses:", error);
        return [];
    }
});
