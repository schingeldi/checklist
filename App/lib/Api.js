export default class API {
    static async get( route ) {
        return [
            {
                id: 1,
                name: 'Clean my desk',
                status: 'initial'
            },
             {
                id: 2,
                name: 'Wash the car',
                 status: 'initial'
            },
            {
                id: 3,
                name: 'Feed the dog',
                status: 'done'
            },
            {
                id: 4,
                name: 'Run 3 miles',
                status: 'cancelled'
            },
    ]
    }
}