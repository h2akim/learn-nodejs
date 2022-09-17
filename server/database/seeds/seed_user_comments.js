const { faker } = require('@faker-js/faker');
const _ = require('lodash');
const { knex } = require('@load/bookshelf');

const generateUser = () => {
  let users = [];
  for (let count in _.range(10)) {
    const timestamp = new Date(Date.now());
    users.push({
      name: faker.name.fullName(),
      avatar: faker.image.avatar(),
      email: faker.internet.email(),
      created_at: timestamp,
      updated_at: timestamp,
    });
  }
  return users;
}

const generateComments = async () => {
  let users = await knex.table('users').pluck('id');
  let sampleSize = _.flatten(users);
  let selectedUsers = _.sampleSize(sampleSize, 5);
  let comments = [];
  for (let userId in selectedUsers) {
    const timestamp = new Date(Date.now());
    let comment = faker.lorem.sentence();
    comments.push({
      user_id: selectedUsers[userId],
      comment: comment,
      created_at: timestamp,
      updated_at: timestamp,
    });
  }
  return comments;
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {

  // Users
  await knex('users').del();
  await knex('users').insert(generateUser());

  // Comments
  await knex('comments').del();
  const comments = await generateComments();
  await knex('comments').insert(comments);

};
