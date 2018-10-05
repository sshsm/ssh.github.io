$(document).ready(
  function(){
    var tirSize=90,//тираж
    pricePaper=0,//цена бумаги
    priceFormа=0,//цена формы
    pricePrint=0,//цена печати
    sum=0;
    var typePaper={
      "Мелованая бумага":6.8,
      "Бумага повышеной белизны":40.5,
      "Prestige лён":45
    };
    var typeColor={
      "Одностороняя ч/б":{"forma":110,"print":14},
      "Двухстороняя ч/б":{"forma":220,"print":28},
      "Одностороняя цветная":{"forma":110,"print":37},
      "Двухстороняя цветная + ч/б":{"forma":220,"print":51},
      "Двухстороняя цветная":{"forma":220,"print":74}
    };
    // for(x in typeColor){
    //   console.log(x)
    //   console.log(typeColor[x]["forma"]);
    // }
    selectPaper();
    selectColor();
    /*************************************/
    $("#tirazh").change(function(){
      tirSize=$("#tirazh").val();
      suma();
    });
    /***********************************/
    $("#paper").change(function(){
      var p=$("#paper").val();
      pricePaper=typePaper[p]*tirSize;
      suma();
    });
    /*************************************/
    $("#color").change(function(){
      var c=$("#color").val();
      priceFormа=typeColor[c]["forma"];
      pricePrint=typeColor[c]["print"]*tirSize;
      $(".images img").hide("slow");
      switch (c) {
        case "Одностороняя ч/б":
          $("#1_0").show();
          break;
        case "Двухстороняя ч/б":
          $("#1_1").show();
          break;
        case "Одностороняя цветная":
          $("#4_0").show();
          break;
        case "Двухстороняя цветная + ч/б":
          $("#4_1").show();
          break;
        case "Двухстороняя цветная":
          $("#4_4").show();
          break;
        default:

      }
      suma();
    });

    function suma()
    {
      sum=pricePaper+priceFormа+pricePrint;
      $(".itogo span").text(sum);
    }
    /*********************/
    function selectPaper(){
      var html="";
      for(x in typePaper)
        html+="<option value='"+x+"'>"+x+"</option>";
        $("#paper").append(html);
    }
    /*********************/
    function selectColor(){
      var html="";
      for(x in typeColor)
        html+="<option value='"+x+"'>"+x+"</option>";
        $("#color").append(html);
    }
  }
)
