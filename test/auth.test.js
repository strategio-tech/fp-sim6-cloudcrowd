const ensureAuth = require("../middleware/auth").ensureAuth;
const ensureGuest = require("../middleware/auth").ensureGuest;
const truncate = require("../helpers/hbs").truncate;
const formatDate = require("../helpers/hbs").formatDate;
const stripTags = require("../helpers/hbs").stripTags;
const editIcon = require("../helpers/hbs").editIcon;
const select = require("../helpers/hbs").select;
const chai = require("chai");
const expect = chai.expect;
const assert = chai.assert;
const on = require("chai").use(require("chai-spies"));

describe("ensureAuth", () => {
  it("should call next() if the request is authenticated", () => {
    // Stub the req object
    const req = {
      isAuthenticated: () => true,
    };

    // Stub the res object
    const res = {
      redirect: (path) => {},
    };

    // Spy on the redirect function
    const spy = chai.spy.on(res, "redirect");

    // Call the ensureAuth function
    ensureAuth(req, res, () => {});

    // Assert that the redirect function was not called
    expect(spy).to.not.have.been.called();
  });

  it("should redirect to '/' if the request is not authenticated", () => {
    // Stub the req object
    const req = {
      isAuthenticated: () => false,
    };

    // Stub the res object
    const res = {
      redirect: (path) => {},
    };

    // Spy on the redirect function
    const spy = chai.spy.on(res, "redirect");

    // Call the ensureAuth function
    ensureAuth(req, res, () => {});

    // Assert that the redirect function was called with the '/' path
    expect(spy).to.have.been.called.with("/");
  });
});

describe("ensureGuest", () => {
  it("should call next() if the request is not authenticated", () => {
    // Stub the req object
    const req = {
      isAuthenticated: () => false,
    };

    // Stub the res object
    const res = {
      redirect: (path) => {},
    };

    // Spy on the redirect function
    const spy = chai.spy.on(res, "redirect");

    // Call the ensureGuest function
    ensureGuest(req, res, () => {});

    // Assert that the redirect function was not called
    expect(spy).to.not.have.been.called();
  });

  it("should redirect to '/dashboard' if the request is authenticated", () => {
    // Stub the req object
    const req = {
      isAuthenticated: () => true,
    };

    // Stub the res object
    const res = {
      redirect: (path) => {},
    };

    // Spy on the redirect function
    const spy = chai.spy.on(res, "redirect");

    // Call the ensureGuest function
    ensureGuest(req, res, () => {});

    // Assert that the redirect function was called with the '/dashboard' path
    expect(spy).to.have.been.called.with("/dashboard");
  });
});

describe("test storybooks", function () {
  it("test formatDate", function (done) {
    assert.equal(formatDate("2018-01-01 12:00:00", "YYYY-MM-DD"), "2018-01-01");
    done();
  });
});

describe("test storybooks", function () {
  it("test truncate", function (done) {
    assert.equal("abcd", truncate("abcd", 5));
    assert.equal("abcd", truncate("abcd", 5));
    assert.equal("abcde" + "...", truncate("abcde" + "...", 5));
    assert.equal("abcde" + "...", truncate("abcde" + "...", 5));
    assert.equal("abcde" + "...", truncate("abcdef", 5));
    assert.equal("abcde" + "...", truncate("abcdef", 5));
    assert.equal("abcde" + "...", truncate("abcdefg", 5));
    assert.equal("abcde" + "...", truncate("abcdefg", 5));
    assert.equal("abcde" + "...", truncate("abcdefgh", 5));
    assert.equal("abcde" + "...", truncate("abcdefgh", 5));
    assert.equal("abcde" + "...", truncate("abcdefghi", 5));
    assert.equal("abcde" + "...", truncate("abcdefghi", 5));
    assert.equal("abcde" + "...", truncate("abcdefghij", 5));
    assert.equal("abcde" + "...", truncate("abcdefghij", 5));
    assert.equal("abcde" + "...", truncate("abcdefghijk", 5));
    assert.equal("abcde" + "...", truncate("abcdefghijk", 5));
    assert.equal("abcde" + "...", truncate("abcdefghijkl", 5));
    assert.equal("abcde" + "...", truncate("abcdefghijkl", 5));
    assert.equal("abcde" + "...", truncate("abcdefghijklm", 5));
    assert.equal("abcde" + "...", truncate("abcdefghijklm", 5));
    assert.equal("abcde" + "...", truncate("abcdefghijklmn", 5));
    assert.equal("abcde" + "...", truncate("abcdefghijklmn", 5));
    assert.equal("abcde" + "...", truncate("abcdefghijklmno", 5));
    assert.equal("abcde" + "...", truncate("abcdefghijklmno", 5));
    assert.equal("abcde" + "...", truncate("abcdefghijklmnop", 5));
    assert.equal("abcde" + "...", truncate("abcdefghijklmnop", 5));
    assert.equal("abcde" + "...", truncate("abcdefghijklmnopq", 5));
    assert.equal("abcde" + "...", truncate("abcdefghijklmnopq", 5));
    assert.equal("abcde" + "...", truncate("abcdefghijklmnopqr", 5));
    assert.equal("abcde" + "...", truncate("abcdefghijklmnopqr", 5));
    assert.equal("abcde" + "...", truncate("abcdefghijklmnopqrs", 5));
    assert.equal("abcde" + "...", truncate("abcdefghijklmnopqrs", 5));
    assert.equal("abcde" + "...", truncate("abcdefghijklmnopqrst", 5));
    assert.equal("abcde" + "...", truncate("abcdefghijklmnopqrst", 5));
    assert.equal("abcde" + "...", truncate("abcdefghijklmnopqrstu", 5));
    assert.equal("abcde" + "...", truncate("abcdefghijklmnopqrstu", 5));
    assert.equal("abcde" + "...", truncate("abcdefghijklmnopqrstuv", 5));
    assert.equal("abcde" + "...", truncate("abcdefghijklmnopqrstuv", 5));
    assert.equal("abcde" + "...", truncate("abcdefghijklmnopqrstuvw", 5));
    assert.equal("abcde" + "...", truncate("abcdefghijklmnopqrstuvw", 5));
    assert.equal("abcde" + "...", truncate("abcdefghijklmnopqrstuvwx", 5));
    assert.equal("abcde" + "...", truncate("abcdefghijklmnopqrstuvwx", 5));
    assert.equal("abcde" + "...", truncate("abcdefghijklmnopqrstuvwxy", 5));
    assert.equal("abcde" + "...", truncate("abcdefghijklmnopqrstuvwxy", 5));
    assert.equal("abcde" + "...", truncate("abcdefghijklmnopqrstuvwxyz", 5));
    assert.equal("abcde" + "...", truncate("abcdefghijklmnopqrstuvwxyz", 5));
    assert.equal("abcde" + "...", truncate("abcdefghijklmnopqrstuvwxyz", 5));
    done();
  });
});

describe("test storybooks", function () {
  it("test stripTags", function (done) {
    assert.equal(stripTags("<p>hello</p>"), "hello");
    done();
  });
});

describe("test storybooks", function () {
  it("test editIcon", function (done) {
    let storyUser = {
      _id: "test",
    };
    let loggedUser = {
      _id: "test",
    };
    let storyId = 1;
    let floating = true;
    let result = editIcon(storyUser, loggedUser, storyId, floating);
    assert.equal(
      result,
      `<a href="/stories/edit/${storyId}" class="btn-floating halfway-fab blue"><i class="fas fa-edit fa-small"></i></a>`
    );
    done();
  });
});

describe("test storybooks", function () {
  it("test select", function (done) {
    let result = select("test", {
      fn: function () {
        return '<option value="test">test</option><option value="test1">test1</option>';
      },
    });
    assert.equal(
      result,
      '<option value="test" selected="selected" selected="selected">test</option><option value="test1">test1</option>'
    );
    done();
  });
});
