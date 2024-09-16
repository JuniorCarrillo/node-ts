import { rootHandler } from './app';

describe('GET /', () => {
  it('should return the correct message', () => {
    const req = {};
    const res = {
      send: jest.fn(),
    };

    rootHandler(req, res);

    expect(res.send).toHaveBeenCalledWith('The sedulous hyena ate the antelope!');
  });
});
