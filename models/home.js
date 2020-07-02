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
    },
    servTitle:{
        type: String
    },
    servSubTitle:{
        type: String
    },
    servUmIcone:{
        type: String
    },
    servUmTitle:{
        type: String
    },
    servUmDesc:{
        type: String
    },
    servDoisIcone:{
        type: String
    },
    servDoisTitle:{
        type: String
    },
    servDoisDesc:{
        type: String
    },
    servTresIcone:{
        type: String
    },
    servTresTitle:{
        type: String
    },
    servDescDesc:{
        type: String
    },
    portTitle:{
        type: String
    },
    portSubTitle:{
        type: String
    },
    portUmOriginalName:{
        type: String
    },
    portUmFileName: {
        type: String
    },
    portUmTitle:{
        type: String
    },
    portUmSubTitle:{
        type: String
    },
    portDoisOriginalName:{
        type: String
    },
    portDoisFileName: {
        type: String
    },
    portDoisTitle:{
        type: String
    },
    portDoisSubTitle:{
        type: String
    },
    portTresOriginalName:{
        type: String
    },
    portTresFileName: {
        type: String
    },
    portTresTitle:{
        type: String
    },
    portTresSubTitle:{
        type: String
    },
    portQuatroOriginalName:{
        type: String
    },
    portQuatroFileName: {
        type: String
    },
    portQuatroTitle:{
        type: String
    },
    portQuatroSubTitle:{
        type: String
    },
    portCincoOriginalName:{
        type: String
    },
    portCincoFileName: {
        type: String
    },
    portCincoTitle:{
        type: String
    },
    portCincoSubTitle:{
        type: String
    },
    portSeisOriginalName:{
        type: String
    },
    portSeisFileName: {
        type: String
    },
    portSeisTitle:{
        type: String
    },
    portSeisSubTitle:{
        type: String
    },
},
    {
        timestamps: true,
    }
);

mongoose.model('Home', home);