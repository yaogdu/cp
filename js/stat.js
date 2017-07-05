/**
 * Created by poppet on 15/2/14.
 */
(function (P) {
    var _this = P.stat = {
        uploader: null,
        total: 0,
        exist: false,
        init: function () {
            console.log('smoking');
            if (!window.localStorage) {
                $('#unsupport').find('span').text('Your browser does NOT support this website,please use chrome,safari,firefox on your device.');
                $('#unsupport').show();
                return;
            }
            _this.initTotal();
            var total = _this.getVal('total');
            //TODO handle total count issue,such as inform user to add counter

            //$('#unsupport').find('span').text("来一根?还是不要了吧~ "+_this.initToday());
            //$('#unsupport').append('<br/>');
            //
            //$('#unsupport').append('<input id="begin" type = "button" value = "忍不住了~"/>');
            //$('#unsupport').append('<br/>');
            //$('#unsupport').append('<input type="button" value = "clear" id="clear"/>');

            $('#unsupport').show();

            //_this.initData();
            _this.bindEvent();
        },
        initTotal: function () {
            var total = _this.getVal('total');
            _this.total = total;

            var days = 30;
            for (var i = 0; i < days; i++) {
                var dates = _this.initSomeDay(i);
                _this.initData(dates);
            }

        },
        initToday: function () {
            var now = new Date();

            var year = now.getFullYear();
            var month = now.getMonth() + 1;
            if (month < 10) {
                month = "0" + month;
            }
            var day = now.getDate();
            if (day < 10) {
                day = "0" + day;
            }
            return year + "-" + month + "-" + day;
        },

        initSomeDay: function (d) {
            var now = new Date();
            now.setDate(now.getDate() - d);

            var year = now.getFullYear();
            var month = now.getMonth() + 1;
            if (month < 10) {
                month = "0" + month;
            }
            var day = now.getDate();
            if (day < 10) {
                day = "0" + day;
            }

            return year + "-" + month + "-" + day;
        },

        bindEvent: function () {
        },


        initData: function (today) {
            //var today = _this.initToday();
            var countStr = _this.getVal(today);

            var count = parseInt(countStr);

            var html = '';
            html += '<div class="cigr">';
            html += '<span class = "date_span">' + today + '</span>';
            if (count > 0) {
                html += '<img src="./img/smoking.png">';
                html += '<span>  X ' + count + '</span>';
            } else {
                html += '<span> Congratulations !</span>';
            }

            html += '</div>';
            $('.container').append(html);
            console.log(count + ' in total in ' + today);


        },
        getVal: function (key) {
            var storage = window.localStorage;
            if (!storage.getItem(key)) {
                storage.setItem(key, '0');
            }
            return storage.getItem(key);
        },
        setVal: function (key, value) {
            var storage = window.localStorage;
            if (storage.getItem(key)) {
                storage.removeItem(key);
            }
            storage.setItem(key, value);
        },
        clear: function () {
            var storage = window.localStorage;
            storage.clear();
        }

    };
}(app));
/**
 * Created by poppet on 15/3/22.
 */
