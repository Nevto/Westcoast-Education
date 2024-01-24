export default class HttpClient {
    private url: string;

    constructor(url: string) {
        this.url = url;
    }

    // T is used here as generic type Parameter, stands for type and is a placeholder
    async get<T>(): Promise<T> {
        try {
            const response = await fetch(this.url);

            if (response.ok) {
                const result = await response.json();
                return result;
            } else {
                throw new Error(`${response.status} ${response.statusText}`);
            }

        } catch (error) {
            throw new Error(`Ett fel inträffade i get metoden: ${error}`);
        }
    }
}