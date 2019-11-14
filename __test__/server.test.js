const request = require('supertest')
const server = require('../server')

describe('server', () => {
    describe('[GET] / endpoint', () => {
        test('should return 200 OK', async () => {
            const response = await request(server).get('/')
            expect(response.status).toBe(200)
        })

        test('should return 200 OK with ES6 promise', () => {
            return request(server).get('/')
                .then(response => {
                    expect(response.status).toBe(200)
                })
        })

        test('should return 200 OK with supertest syntax', () => {
            return request(server).get('/')
                .expect(200)
                .expect('Content-Type', /json/)
        })
    })

    // describe('[POST] / endpoint', () => {
    //     test('should return 200 OK', async () => {

    //     }) 
    // })
})