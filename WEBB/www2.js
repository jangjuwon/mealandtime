let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let date = today.getDate();
let day = today.getDay(); // 요일

const str0 = (day).toString();
const str1 = (year).toString();
const str2 = (month).toString();
const str3 = (date).toString();

zero = "0";

if (month < 10) {
        str2of1 = zero + str2;
}

if (day < 10) {
        str3of1 = zero + str3;
}

const str4 = (str1 + str2of1 + str3of1).toString();



$.ajax({
        method: "GET",
        url: "https://open.neis.go.kr/hub/hisTimetable",
        data: { ATPT_OFCDC_SC_CODE: "M10", SD_SCHUL_CODE: "8000070", AY: str1, ALL_TI_YMD: str4, GRADE: "3", CLASS_NM: "6", KEY: "df89ee98eb524997ab802dff780a58e3" }
})

        

        .done(function (msg) {

                if (day === 6 || day === 0) {
                        var element = document.getElementById('plz');
                        element.classList.add('times');
                }


                $("p1").append("<strong>" + month + "월 " + date + "일 시간표<br><br></strong>");

                if (day === 6) {
                        $("p1").append("<strong><br><br><br>오늘은 일정이 없어요<br></strong>");
                } else if (day === 0) {
                        $("p1").append("<strong><br><br><br>오늘은 일정이 없어요<br></strong>");
                } else {

                        for (let i = 0; i < 6; i++) {
                        var ji1_1 = msg.getElementsByTagName("ITRT_CNTNT")[i]; //1교시
                        ji1_2 = ji1_1.childNodes[0];
                        ji1_3 = ji1_2.nodeValue;
                        console.log(ji1_3);
                        $("p1").append("<strong>" + (i + 1) +"교시 " + ji1_3 + "<br><br></strong>");
                        }


                        if (msg.getElementsByTagName("ITRT_CNTNT")[6] !== null) {
                                var ji7_1 = msg.getElementsByTagName("ITRT_CNTNT")[6]; //7교시
                                ji7_2 = ji7_1.childNodes[0];
                                ji7_3 = ji7_2.nodeValue;
                                console.log(ji7_3);
                                $("p1").append("<strong>7교시 " + ji7_3 + "<br><br></strong>");
                        }
                }
        }
        );


$.ajax({
        method: "GET",
        url: "https://open.neis.go.kr/hub/mealServiceDietInfo",
        data: { ATPT_OFCDC_SC_CODE: "M10", SD_SCHUL_CODE: "8000070", MLSV_YMD: str4, KEY: "df89ee98eb524997ab802dff780a58e3" }
})
        .done(function (msg) {

                $("p").append("<strong>" + month + "월 " + date + "일 급식일정<br><br></strong>");

                if (day === 6 || day === 0) {
                        $("p").append("<strong class='nulls'><br><br><br>오늘은 급식이 없어요<br></strong>");
                }
                
                for (let l = 0; l < 4; l++) {
                        
                var cho = msg.getElementsByTagName("DDISH_NM")[l]; //조식
                cho2 = cho.childNodes[0];
                cho3 = cho2.nodeValue;
                console.log(cho3);

                if (l === 0) {
                        meal = "[조식]";
                } else if (l === 1) {
                        meal = "[중식]";
                } else {
                        meal = "[석식]"; 
                }

                $("p").append("<strong>" + meal + "<br>" + cho3 + "<br><br></strong>")
                }
        }
        );