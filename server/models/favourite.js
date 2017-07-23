const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FavouriteSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  content: { type: String }
});

mongoose.model('favourite', FavouriteSchema);
