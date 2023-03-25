
class TestService {
    async getTest() {
        const result = {};
        return {message: `Ok!`, data: {result}};
    }
}

export default new TestService();