import testService from '../sevices/test.service.js';

class TestController {
    async getTest(req, res, next) {
        try {
            const result = await testService.getTest();

            res.json(result);
        } catch (e) {
            next(e);
        }
    }
}

export default new TestController();