const request = require('supertest')
const router = require('./companions-router')
const db = require('../../data/db-config')
const server = require('../server')

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})
beforeEach(async ()=>{
    await db.seed.run()
})
afterAll(async () => {
    await db.destroy()
})
describe('[GET] /companions',()=>{
    let res
    beforeEach(async () => {
        res = await request(server).get('/api/companions')
    })
    test('responds with 200 ok', async () => {
        expect(res.status).toBe(200)
    })
})