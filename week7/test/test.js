const expect = require("chai").expect;
const request = require("request");

describe("Projects API", function () {
    const projectUrl = "http://localhost:3000/api/projects";
    //test1 
    it("Test 1: Should get the list of projects successfully", function (done) {
        request.get(projectUrl, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    // test 2 
    it("Test 2: Check to see if we have correct properties", function (done) {

        request.get(projectUrl, function (error, response, body) {
            const data = JSON.parse(body).data;
            const firstProject = data[0];
            expect(firstProject).to.have.property('title');
            expect(firstProject).to.have.property('image');
            expect(firstProject).to.have.property('link');
            expect(firstProject).to.have.property('description');
            done();
        });
    });

    // test 3:
    it("Test 3: Should add a new project successfully", function (done) {
        const myNewProject = {
            title: "My New Test Project",
            description: "A project added by our tester."
        };
        request.post({ url: projectUrl, json: true, body: myNewProject }, function (error, response, body) {
            expect(response.statusCode).to.equal(201);
            expect(body.message).to.equal("Project successfully added");
            done();
        });
    });

    // test 4:
    it("Test 4: if the enterd URL does not exist return error 404", function (done) {
        const wrongUrl = "http://localhost:3000/wrong-url";
        request.get(wrongUrl, function (error, response, body) {
            expect(response.statusCode).to.equal(404);
            done();
        });
    });

});