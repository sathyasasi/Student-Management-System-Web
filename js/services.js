/**
 * Created by bala on 13-Jan-16.
 */

app.factory('sharedServices', function(){
    var data = [];
    var type = '';
    return {
        set: function (input) {
            data = input;
        },
        get:function(){
            return data;
        },
        setType: function (input) {
            type = input;
        },
        getType:function(){
            return type;
        }
    }
})
