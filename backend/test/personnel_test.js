async function runTests() {

    let chai = require("chai");
    let chaiHttp = require("chai-http");
    let server = require("index.js");

    chai.should();

    chai.use(chaiHttp);

    describe("Personnel API", () => {



        describe("GET /api/Personnel", () => {
            it("it should GET all the Personnel", (done) => {
                chai.request(server)
                    .get("/api/Personnel")
                    .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    response.body.length.should.be.eq(3);
                done();
                })
            })

        })

        // POST a new task
        describe("POST /api/Personnel", () => {
            it("it should POST a new Personnel", (done) => {
                chai.request(server)
                    .post("/api/Personnel")
                    .end((err, response) => {
                        response.should.have.status(201);
                        response.body.should.be.a('object');
                        response.body.should.have.property('lname');
                        response.body.should.have.property('email');
                        response.body.should.have.property('birth_date');
                        response.body.should.have.property('phone_number');
                        response.body.should.have.property('cin');
                        response.body.should.have.property('address');
                        response.body.should.have.property('gender');
                        response.body.should.have.property('date_emb');
                        response.body.should.have.property('salary');
                        done();
                    });
            });
        });

        // PUT (Update) an existing task
        describe("PUT /api/tasks/:id", () => {
            it("it should UPDATE an existing task", (done) => {
                chai.request(server)
                    .put("/api/tasks/1") // Assuming there's a task with ID 1 for testing
                    .end((err, response) => {
                        response.should.have.status(200);
                        response.body.should.be.a('object');
                        response.body.should.have.property('lname');
                        response.body.should.have.property('email');
                        response.body.should.have.property('birth_date');
                        response.body.should.have.property('phone_number');
                        response.body.should.have.property('cin');
                        response.body.should.have.property('address');
                        response.body.should.have.property('gender');
                        response.body.should.have.property('date_emb');
                        response.body.should.have.property('salary');
                        done();
                    });
            });
        });

        // DELETE a task
        describe("DELETE /api/tasks/:id", () => {
            it("it should DELETE a task", (done) => {
                chai.request(server)
                    .delete("/api/tasks/3") // Assuming there's a task with ID 3 for testing
                    .end((err, response) => {
                        response.should.have.status(200);
                        response.body.should.be.a('array');
                        response.body.length.should.be.eq(1); // Assuming one task is deleted
                        done();
                    });
            });
        });
        
    });
}runTests();