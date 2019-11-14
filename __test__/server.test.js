const request = require('supertest')
const server = require('../server')

describe('server', () => {
    describe('[GET] / endpoint', () => {
        test('should return 200 OK', async () => {
            const response = await request(server).get('/')
            expect(response.status).toBe(200)
            expect(response.body).toEqual({message: 'works'})
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
                .expect({message: 'works'})
                .expect('Content-Type', /json/)
        })
    })

    describe('api/users/* endpoints', () => {
        describe('[GET] / api/users', () => {
            test('should return 200 OK', () => {
                return request(server).get('/')
                    .then(response => {
                        expect(response.status).toBe(200)
                    })
            })
        })
        describe('[POST] / api/users', () => {
            test('should return 200 OK', async () => {
                const addUser = {
                    username: "test",
                    password: "test"
                }
                const response = await request(server).post('/api/users/register').send(addUser)
                expect(response.status).toBe(201)
            })
    
            // test('should ')
        })
    })

})