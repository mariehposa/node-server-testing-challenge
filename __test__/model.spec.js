const model = require('../user/userModel');
const db = require('../data/dbConfig');

beforeEach(async () => {
    await db('project').truncate()  //to clear the database
})

describe('project model', () => {
    describe('insert function', () => {
        let project
        test('should insert a new user', async () => {
            await model.addUser({ username: 'emily', password: 'emily'})
            await model.addUser({ username: 'mimi', password: 'mimi'})

            project = await db('project')
            expect(project).toHaveLength(2)
        })
    })
})