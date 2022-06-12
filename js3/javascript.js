var arr = [];
$(document).ready(function(){
    $("#nhap").click(function(){
        var stt = arr.length +1;
        var testScore = { 
            name: $('#hoten').val(),
            math: $('#diemtoan').val(),
            physical: $('#diemly').val(),
            chemistry: $('#diemhoa').val()
        };
        $('#storeList').append(`<tr><td>${stt}</td><td>${testScore.name}</td><td>${testScore.math}</td><td>${testScore.physical}</td><td>${testScore.chemistry}</td><td>?</td></tr>`);
        arr.push(testScore);
        $('#hoten').val("");
        $('#diemtoan').val("");
        $('#diemly').val("");
        $('#diemhoa').val("");
    });
    $("#tb").click(function(){
        $('#storeList tr').each(function() {
            var toan = $(this).find("td").eq(2).text();
            var ly = $(this).find("td").eq(3).text();
            var hoa = $(this).find("td").eq(4).text();
            var tb = ((parseFloat(toan) + parseFloat(ly) + parseFloat(hoa))/3.0).toFixed(2);
            $(this).find("td").eq(5).html(tb);
        });
    });
    $("#xdGioi").click(function(){
        $('#storeList tr').each(function() {
            var tb = $(this).find("td").eq(5).text();
            var kt = tb>=8;
            if(kt){
                $(this).find("td").eq(0).addClass("color");
                $(this).find("td").eq(1).addClass("color");
                $(this).find("td").eq(2).addClass("color");
                $(this).find("td").eq(3).addClass("color");
                $(this).find("td").eq(4).addClass("color");
                $(this).find("td").eq(5).addClass("color");
            }
        });
    });
  });
  