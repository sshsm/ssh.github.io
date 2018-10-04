$(document).ready(
  function(){
    var tirSize=90,//тираж
    pricePaper=0,//цена бумаги
    priceFormа=0,//цена формы
    pricePrint=0;//цена печати
    var typePaper={
      "Мелованая бумага":6.8,
      "Бумага повышеной белизны":40.5,
      "Prestige лён":45
    };
    // for(x in typePaper){
    //   console.log(x)
    //   console.log(typePaper[x]);
    // }
    selectPaper();
    function selectPaper(){
      var html="";
      for(x in typePaper)
        html+="<option value='"+x+"'>"+x+"</option>";
        $("#paper").append(html);
      
    };
  }
)
