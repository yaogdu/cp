/**
 * Created by poppet on 15/2/14.
 */
(function(P){
    var _this = P.smoking = {
        uploader : null,
        total:0,
        exist : false,
        init: function() {


            console.log('smoking');
            if(!window.localStorage){
                $('#unsupport').find('span').text('Your browser does NOT support this website,please use chrome,safari,firefox on your device.');
                $('#unsupport').show();
                return;
            }
            _this.initTotal();
            var total = _this.getVal('total');
            //TODO handle total count issue,such as inform user to add counter

            $('#unsupport').find('span').text("来一根?还是不要了吧~ "+_this.initToday());
            $('#unsupport').append('<br/>');

            $('#unsupport').append('<input id="begin" type = "button" value = "忍不住了~"/>');
            $('#unsupport').append('<br/>');
            $('#unsupport').append('<input type="button" value = "clear" id="clear"/>');
            $('#unsupport').append('<a href="stat.html"> Go stat</a>');

            $('#unsupport').show();

            _this.initData();
            _this.bindEvent();
        },
        initTotal : function(){
            var total = _this.getVal('total');
            _this.total = total;
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
        bindEvent:function(){

            $('#begin').on('click',function(){
                _this.oneMore();
            })

            //setTimeout(_this.timeRun('00:00:00'),1000);
            $('#clear').on('click',function(){
                _this.setVal('total',0);
                _this.clear();
                _this.initData();
            });
        },

        oneMore : function(){
            var today = _this.initToday();
            if(_this.exist){
                var countStr = _this.getVal(today);
                var count = parseInt(countStr);

                if(count >=10){
                    if(confirm("already "+count + " today")){
                        count += 1;
                        _this.setVal(today,count);
                    }
                }else{
                    count += 1;
                    _this.setVal(today,count);
                }

            }else{
                _this.setVal(today,1);
            }
            _this.initData();

        },

        initData : function(){
            var today = _this.initToday();
            var countStr = _this.getVal(today);

            var count = parseInt(countStr);

            if(count == 0 ){
                _this.exist = false;
            }else{
                _this.exist = true;
                var html = '';
                for(var i =0; i< count;i++){
                    html += '<div class="cigr">';
                    html += '<img src="./img/smoking.png">';
                    html += '</div>';
                }
                $('.container').html(html);

                console.log(count + ' in total in ' +today);
            }


        },
        getVal : function(key){
            var storage = window.localStorage;
            if(!storage.getItem(key)){
                storage.setItem(key,'0');
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
