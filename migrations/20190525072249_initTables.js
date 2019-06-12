exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("user", function(table) {
      table.increments("id");
      table.datetime("registrationDate");
      table.datetime("lastVisit");
      table.string("login").unique("login");
      table.text("name");
      table.text("fb");
      table.text("vk");
      table.text("google");
      table.text("email").unique("email");
      table.text("saltedPassword");
    })
    .createTable("quiz", function(table) {
      table.increments("id");
      table.integer("user_id");
      table.foreign("user_id").references("user.id");
      table.text("title");
      table.text("subtitle");
      table.text("descr");
      table.text("imageUrl");
      table.string("name").unique("name");
      table.datetime("created");
      table.datetime("updated");
      table.datetime("lastVote");
      table.string("type");
      table.text("backgroundUrl");
    })
    .createTable("question", function(table) {
      table.increments("id");
      table.integer("quiz_id");
      table.foreign("quiz_id").references("quiz.id");
      table.decimal("order");
      table.text("title");
      table.text("descr");
      table.text("imageUrl");
    })
    .createTable("answer", function(table) {
      table.increments("id");
      table.integer("question_id");
      table.foreign("question_id").references("question.id");
      table.decimal("order");
      table.decimal("votes");
      table.text("title");
      table.text("descr");
      table.text("imageUrl");
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable("quiz")
    .dropTable("question")
    .dropTable("answer")
    .dropTable("user");
};
