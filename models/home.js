const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var home = new Schema({
    topTitle:{
        type: String
    },
    topSubTitle:{
        type: String
    },
    topTextBtn:{
        type: String
    },
    topLinkBtn:{
        type: String
    }
  },
    {
        timestamps: true,
    }
  );

  mongoose.model('Home', home);