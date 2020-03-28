const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async ()=>{
    await connection.destroy();
  });
  it('should be able to create an new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
          	name: "APAE Porto Alegre",
          	email: "contato@apaepoa.org.br",
          	whatsapp: "5198787654",
          	city: "Porto Alegre",
          	uf: "RS"
          });
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});
