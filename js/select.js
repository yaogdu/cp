/**
 * Created by poppet on 17/7/6.
 */


var cities = {
    "beijing":[
        {"text":"海淀","value":"haidian"},
        {"text":"东城","value":"dongcheng"},
        {"text":"西城","value":"xicheng"}
    ],
    "shanghai":[
        {"text":"静安","value":"jingan"},
        {"text":"徐汇","value":"xuhui"},
        {"text":"虹口","value":"hongkou"}
    ],
    "hebei":[
        {"text":"石家庄","value":"shijiazhuang"},
        {"text":"邯郸","value":"handan"},
        {"text":"唐山","value":"tangshan"}
    ]

};




document.getElementById("province").onchange = function (){

    var pro = this.value;

    console.log(pro);

    var cityArray  =cities[pro];

    var cityHtml = "";

    for(var i in cityArray){
        var city = cityArray[i];
        var text = city["text"];
        var value = city["value"];

        cityHtml += "<option value='"+value+"' >"+text+"</option>";

    }

    document.getElementById("city").innerHTML = cityHtml;


};

