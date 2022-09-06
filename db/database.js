import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/diary');

const Schema = mongoose.Schema;

const DiarySchema = new Schema({
  date: String,
  weather: String,
  body: String,
  imageURL: String
});

const Diaries = mongoose.model('Diaries', DiarySchema);
//Diaries is a model/collections under db diary

const save = (data, cb) => {
  //save the passed in data to Diaries model inside mongodb, then invoke a cb
  //fill out later when data is defined on both client and server side


}

