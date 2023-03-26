class TestService {
    async getTest() {
        const users = [
            {
                id: 1,
                username: 'Alex1',
                isActivated: true,

                gamesCount: 0,
                gamesWinsCount: 0,
                sparringCount: 0,
                sparringWinsCount: 0,
            },
            {
                id: 2,
                username: 'Alex2',
                isActivated: true,

                gamesCount: 0,
                gamesWinsCount: 0,
                sparringCount: 0,
                sparringWinsCount: 0,
            },
            {
                id: 3,
                username: 'Alex3',
                isActivated: true,

                gamesCount: 0,
                gamesWinsCount: 0,
                sparringCount: 0,
                sparringWinsCount: 0,
            },
            {
                id: 4,
                username: 'Alex4',
                isActivated: true,

                gamesCount: 0,
                gamesWinsCount: 0,
                sparringCount: 0,
                sparringWinsCount: 0,
            },
        ];
        const totalCount = users.length;
        return {message: `Success!`, data: {totalCount, users}};
    }
}

export default new TestService();