'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('movies', [
      { title: 'Toy Story', description: 'Toys', image: 'http://placekitten.com/200/300', releaseYear: '1995', genre_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { title: 'The Terminator', description: 'Robot Arnold', image: 'http://placekitten.com/200/300', releaseYear: '1984', genre_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { title: 'Maltese Falcon', description: 'Expensive bird statue', image: 'http://placekitten.com/200/300', releaseYear: '1939', genre_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { title: 'Parasite', description: 'Family fraud', image: 'http://placekitten.com/200/300', releaseYear: '2019', genre_id: 2, createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
