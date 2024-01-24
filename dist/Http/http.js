var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default class HttpClient {
    constructor(url) {
        this.url = url;
    }
    // T is used here as generic type Parameter, stands for type and is a placeholder
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(this.url);
                if (response.ok) {
                    const result = yield response.json();
                    return result;
                }
                else {
                    throw new Error(`${response.status} ${response.statusText}`);
                }
            }
            catch (error) {
                throw new Error(`Ett fel inträffade i get metoden: ${error}`);
            }
        });
    }
}
