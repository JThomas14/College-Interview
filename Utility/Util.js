const { UpdateUserInfo, setUserInfo } = require('../firebase/firebaseconnect');
const getUser = require('../firebase/firebaseconnect').getUserInfo
const getCollection = require('../firebase/firebaseconnect').getCollectionInfo
const set = require('../firebase/firebaseconnect').setUserInfo


module.exports = {
    
    GetUserWithSessionID: async(SessionID) => {
        var Found = false
        await getCollection("Users").then(function(users){
            users.forEach(element => {
                if (element["SessionID"] == SessionID && SessionID != undefined) {
                    Found = element["Uname"]
                }
            });
        })
        return Found
    }
}