const request = require("supertest");
const app = require("../app");

describe("GET /api/movies/1", () => {
  it("retourner le film 1", async () => {
    const response = await request(app).get("/api/movies/1");

    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
  });
});
describe("GET /api/movies/0", () => {
  it("retourne aucun film", async () => {
    const response = await request(app).get("/api/movies/0");

    expect(response.status).toEqual(404);
  });
});