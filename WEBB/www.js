let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let date = today.getDate();
let day = today.getDay(); // 요일

const str0 = (day).toString();
const str1 = (year).toString();
const str2 = (month).toString();
const str3 = (date).toString();
const str4 = (str1 + "0" + str2 + str3).toString();



$.ajax({
        method: "GET",
        url: "https://open.neis.go.kr/hub/hisTimetable",
        data: { ATPT_OFCDC_SC_CODE: "M10", SD_SCHUL_CODE: "8000070", AY: str1, ALL_TI_YMD: str4, GRADE: "3", CLASS_NM: "6", KEY: "df89ee98eb524997ab802dff780a58e3" }
})


        .done(function (msg) {

                if (day === 6) {
                        var element = document.getElementById('plz');
                        element.classList.add('times');
                } else if (day === 0) {
                        var element = document.getElementById('plz');
                        element.classList.add('times');
                }


                $("p1").append("<strong>" + month + "월 " + date + "일 시간표<br><br></strong>");

                if (day === 6) {
                        $("p1").append("<strong><br><br><br>오늘은 일정이 없어요<br></strong>");
                } else if (day === 0) {
                        $("p1").append("<strong><br><br><br>오늘은 일정이 없어요<br></strong>");
                } else {

                        var ji1_1 = msg.getElementsByTagName("ITRT_CNTNT")[0]; //1교시
                        ji1_2 = ji1_1.childNodes[0];
                        ji1_3 = ji1_2.nodeValue;
                        console.log(ji1_3);
                        $("p1").append("<strong>1교시 " + ji1_3 + "<br><br></strong>"); //2교시

                        var ji2_1 = msg.getElementsByTagName("ITRT_CNTNT")[1];
                        ji2_2 = ji2_1.childNodes[0];
                        ji2_3 = ji2_2.nodeValue;
                        console.log(ji2_3);
                        $("p1").append("<strong>2교시 " + ji2_3 + "<br><br></strong>");//3교시

                        var ji3_1 = msg.getElementsByTagName("ITRT_CNTNT")[2];
                        ji3_2 = ji3_1.childNodes[0];
                        ji3_3 = ji3_2.nodeValue;
                        console.log(ji3_3);
                        $("p1").append("<strong>3교시 " + ji3_3 + "<br><br></strong>"); //4교시

                        var ji4_1 = msg.getElementsByTagName("ITRT_CNTNT")[3];
                        ji4_2 = ji4_1.childNodes[0];
                        ji4_3 = ji4_2.nodeValue;
                        console.log(ji4_3);
                        $("p1").append("<strong>4교시 " + ji4_3 + "<br><br></strong>"); //5교시

                        var ji5_1 = msg.getElementsByTagName("ITRT_CNTNT")[4];
                        ji5_2 = ji5_1.childNodes[0];
                        ji5_3 = ji5_2.nodeValue;
                        console.log(ji5_3);
                        $("p1").append("<strong>5교시 " + ji5_3 + "<br><br></strong>"); //6교시

                        var ji6_1 = msg.getElementsByTagName("ITRT_CNTNT")[5];
                        ji6_2 = ji6_1.childNodes[0];
                        ji6_3 = ji6_2.nodeValue;
                        console.log(ji6_3);
                        $("p1").append("<strong>6교시 " + ji6_3 + "<br><br></strong>");


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

                if (day === 6) {
                        $("p").append("<strong class='nulls'><br><br><br>오늘은 급식이 없어요<br></strong>");
                } else if (day === 0) {
                        $("p").append("<strong class='nulls'><br><br><br>오늘은 급식이 없어요<br></strong>");
                }

                var cho = msg.getElementsByTagName("DDISH_NM")[0]; //조식
                cho2 = cho.childNodes[0];
                cho3 = cho2.nodeValue;
                console.log(cho3);
                $("p").append("<strong>[조식]<br>" + cho3 + "<br><br></strong>")

                var jung = msg.getElementsByTagName("DDISH_NM")[1]; //중식
                jung2 = jung.childNodes[0];
                jung3 = jung2.nodeValue;
                console.log(jung3);
                $("p").append("<strong>[중식]<br>" + jung3 + "<br><br></strong>");

                var suk = msg.getElementsByTagName("DDISH_NM")[2]; //석식
                suk2 = suk.childNodes[0];
                suk3 = suk2.nodeValue;
                console.log(suk3);
                $("p").append("<strong>[석식]<br>" + suk3 + "<br><br></strong>");

        }
        );