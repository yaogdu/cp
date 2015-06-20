/**
 * Created by poppet on 15/2/14.
 */
(function(P){
    var _this = P.signin = {
        uploader : null,
        total:0,
        signedin : false,
        signedout:false,
        init: function() {
            console.log('signin');

            _this.bindEvent();
            _this.initData();
        },
        initToday : function(){
          var now = new Date();

            var year = now.getFullYear();
            var month = now.getMonth()+1;
            if(month<10){
                month = "0"+month;
            }
            var day = now.getDate();
            if(day<10){
                day = "0"+day;
            }
            return year+"-"+month+"-"+day;
        },
        initTime : function(){
            var now = new Date();

            var year = now.getFullYear();
            var month = now.getMonth()+1;
            if(month<10){
                month = "0"+month;
            }
            var day = now.getDate();
            if(day<10){
                day = "0"+day;
            }
            var hour = now.getHours();

            if(hour <10){
                hour= "0"+hour;
            }
            var minute = now.getMinutes();

            if(minute <10){
                minute = "0"+minute;
            }
            var seconds = now.getSeconds();
            if(seconds<10){
                seconds ="0"+seconds;
            }

            return year+"-"+month+"-"+day+" "+hour+":"+minute+":"+seconds;
        },

        bindEvent:function(){

            $('#btnsignin').on('click',function(){
                _this.signin();
            });

            $('#btnsignout').on('click',function(){
                _this.signout();
            });

            $('#clear').on('click',function(){
                _this.clear();
                _this.initData();
            });

        },

        signin : function(){
            var today = _this.initToday();

            var signin = _this.getVal(today+"signin");
            if(signin && signin != ""){
                $('#signin').html(signin);
            }else{
                signin = _this.initTime();
                _this.setVal(today+"signin",signin);
                $('#signin').html(signin);
            }
            _this.initData();

        },

        signout : function(){
            var today = _this.initToday();

            var signout = _this.getVal(today+"signout");
            if(signout && signout != ""){
                $('#signout').html(signout);
            }else{
                signout = _this.initTime();
                _this.setVal(today+"signout",signout);
                $('#signout').html(signout);
            }
            _this.initData();

        },

        initData : function(){
            var today = _this.initToday();

            var signin = _this.getVal(today+"signin");

            var signout = _this.getVal(today+"signout");

            if(signin && signin!=""){
                $("#signin").html(signin);
            }else{
            }

            if(signout && signout != ""){
                $("#signout").html(signout);
            }else{
            }


        },
        getVal : function(key){
            var storage = window.localStorage;
            if(!storage.getItem(key)){
                storage.setItem(key,'');
            }
            return storage.getItem(key);
        },
        setVal : function(key,value){
            var storage = window.localStorage;
            if(storage.getItem(key)){
                storage.removeItem(key);
            }
            storage.setItem(key,value);
        },
        clear : function(){
            var storage = window.localStorage;
            storage.clear();
        }


    };
}(app));/**
 * Created by poppet on 15/3/22.
 */
