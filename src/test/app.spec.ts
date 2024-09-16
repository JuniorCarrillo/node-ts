import { rootHandler, server } from '../app';

describe('GET /', () => {
  afterAll((done) => {
    server.close(done);
  });

  it('should return the correct message', (done) => {
    const req = { method: 'GET', url: '/' };
    const res = {
      send: (message) => {
        try {
          expect(message).toBe('The sedulous hyena ate the antelope!');
          done();
        } catch (error) {
          done(error);
        }
      },
    };

    rootHandler(req, res);
  });
});
