const ensureAuth = require("../middleware/auth").ensureAuth;
const assert = require("chai").assert;
const truncate = require("../helpers/hbs").truncate;
const formatDate = require("../helpers/hbs").formatDate;
const stripTags = require("../helpers/hbs").stripTags;
const editIcon = require("../helpers/hbs").editIcon;
const select = require("../helpers/hbs").select;

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
