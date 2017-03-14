import Ember from 'ember';

export default Ember.Object.create({

  _records: [
    { title: "The Real Keith Hulu: An Autobigraphy" },
    { title: "Carousels Are Dumb: Volume I" },
    { title: "The Merge Conflict from Hell" }
  ],

  books() {
    return Ember.copy(this._records);
  },

  addBook(book) {
    this._records.push(book);
  },

  removeBook(book) {
    const index = this._records.indexOf(book);
    this._records.splice(index, 1);
  }

});
