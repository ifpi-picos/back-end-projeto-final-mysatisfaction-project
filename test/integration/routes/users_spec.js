describe('Routes: Usuarios', () => {
  let request;
  let app;

  before(async () => {
    app = await setupApp();
    request = supertest(app);
  });

  after(async () => await app.database.connection.close());

  const defaultUsuario = {
    nome: 'Default usuario',
    email: 'leal@leal.com',
    senha: '1234'
  };

  describe('GET /users', () => {
    it('retorna uma lista de usuários', done => {
      request.get('/users').end((err, res) => {
        expect(res.body[0]).to.eql(defaultUsuario);
        done(err);
      });
    });
  });
});