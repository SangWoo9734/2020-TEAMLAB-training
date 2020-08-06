function files(fileName, date, isShare, storage){
  this.name = fileName;
  this.date = date;
  this.isShare = isShare;
  this.storage = storage;
}

var stored_files = [
  new files("Backpropagation, Neural Networks 1.pdf", "2016.05.06", true, 4.75),
  new files("ConvNets in practice.pdf", "2016.05.06", false, 4.50),
  new files("Convolutional Neural Networks.pdf", "2016.05.01", true, 3.76),
  new files("Data-driven approach, knn, Linear Classification 1.pdf", "2016.05.01", false, 1.23),
  new files("Deep Learning.pdf", "2016.05.01", true, 4.32),
  new files("Introduction and Historical Context.pdf", "2016.04.29", false, 8.22),
  new files("Linear Classification 2, Optimization.pdf", "2016.04.29", false, 7.02),
  new files("Localization and Detection.pdf", "2016.04.29", true, 12.2),
  new files("Neural Networks Part2.pdf", "2016.04.25", false, 3.21),
  new files("Neural Networks Part3.pdf", "2016.04.25", true, 6.41),
  new files("Harrypotter.pdf", "2016.04.20", true, 1.22),
  new files("Top Notch.pdf", "2016.04.20", true, 2.33),
  new files("Report_final_final_final.pdf", "2016.04.20", false, 4.75)
]

function stored(fileList) {
  var storePlace = document.getElementById("storePlace");
  for (var file of fileList){
    storePlace.innerHTML += "<tr class=\"table-row\"><th style=\"width:3%;\" class=\"always\"><input type=\"checkbox\" name=\"selected\" class=\"checking\"><label for=\"#cb1\"></label></th><th style=\"width:35%;\" class=\"always\"><div class=\"file-contents\"><span class=\"glyphicon glyphicon-file\"></span>" + file.name + "</div></th><th style=\"width:12%;\"><div class=\"file-contents\">" + file.date + "</div></th><th style=\"width:10%;\"><div class=\"file-contents\">" + (file.isShare ? "공유됨" : "공유안됨") + "</div></th><th style=\"width:7%;\"><div class=\"file-contents\">" + file.storage + "MB</div></th><th></th></tr>";
  }
}
stored(stored_files); 

function sortWithStorage(x, property){
  if( x == 0) {
    stored_files.sort(function(a, b) {
      return a[property] > b[property] ? 1 : a[property] < b[property] ? -1 : 0;
    });
  } else{
    stored_files.sort(function(a, b) {
      return a[property] > b[property] ? -1 : a[property] < b[property] ? 1 : 0;
    });
  }
  
    var storePlace = document.getElementById("storePlace");
    storePlace.innerHTML = "";
    for (var file of stored_files){
      storePlace.innerHTML += "<tr class=\"table-row\"><th style=\"width:3%;\" class=\"always\"><input type=\"checkbox\" name=\"selected\" class=\"checking\"><label for=\"#cb1\"></label></th><th style=\"width:35%;\" class=\"always\"><div class=\"file-contents\"><span class=\"glyphicon glyphicon-file\"></span>" + file.name + "</div></th><th style=\"width:12%;\"><div class=\"file-contents\">" + file.date + "</div></th><th style=\"width:10%;\"><div class=\"file-contents\">" + (file.isShare ? "공유됨" : "공유안됨") + "</div></th><th style=\"width:7%;\"><div class=\"file-contents\">" + file.storage + "MB</div></th><th></th></tr>";
    }
}

function sortWithDate(x){
  if( x == 0) {
    stored_files.sort(function(a, b) {
      return a.date.slice(5) > b.date.slice(5) ? 1 : a.date.slice(5) < b.date.slice(5) ? -1 : 0;
    });
  } else{
    stored_files.sort(function(a, b) {
      return a.date.slice(5) > b.date.slice(5) ? -1 : a.date.slice(5) < b.date.slice(5) ? 1 : 0;
    });
  }
  
    var storePlace = document.getElementById("storePlace");
    storePlace.innerHTML = "";
    for (var file of stored_files){
      storePlace.innerHTML += "<tr class=\"table-row\"><th style=\"width:3%;\" class=\"always\"><input type=\"checkbox\" name=\"selected\" class=\"checking\"><label for=\"#cb1\"></label></th><th style=\"width:35%;\" class=\"always\"><div class=\"file-contents\"><span class=\"glyphicon glyphicon-file\"></span>" + file.name + "</div></th><th style=\"width:12%;\"><div class=\"file-contents\">" + file.date + "</div></th><th style=\"width:10%;\"><div class=\"file-contents\">" + (file.isShare ? "공유됨" : "공유안됨") + "</div></th><th style=\"width:7%;\"><div class=\"file-contents\">" + file.storage + "MB</div></th><th></th></tr>";
    }
}

$(document).ready(function(){
  $(".tools-hide").hide();
  $(".list-group-item").on('click', function() {
    $(".list-group-item").removeClass("active-menu");
    if($(this).hasClass("active-menu") === false) {
      $(this).addClass("active-menu");
    }
  });

  $(".dropdown-toggle").on('click', function() {
    var sub = $(this).next("ul")
    if(sub.is(":visible")){
      sub.slideUp();
    }else{
      sub.slideDown();
    }
    
  });
  $(document).on('click', function() {
    if($(this).not(".dropdown-toggle") && $(".dropdown-toggle").next("ul").is(":visible")){ 
        $(".dropdown-toggle").next("ul").slideUp();
    }
  });
  
  // $("body").on("click", function(){
  //   if($(".dropdown-toggle").next("ul").is(":visible")){
  //     $(".dropdown-toggle").next("ul").slideUp();
  //   }
  // });   
 

  $("#cb1").on("click", function(){
    $(".checking").prop('checked', this.checked);
    if($(".checking").is(":checked")){
      $(".checking").parent().parent().css("background-color", "lightgray");
    }else{
      $(".checking").parent().parent().css("background-color", "");
    }
  });

  $(".table-row").on("click", function(){
    var checkthis = $(this).find("th:first-child :checkbox");
    checkthis.prop("checked", !checkthis.is(":checked"));
    if(checkthis.is(":checked")){
      $(this).addClass("painthere");
      $(this).css("background-color", "lightgray");
    }else{
      $(this).css("background-color", "");
    }
    
  });

  $("table").click(function() {
    if($("input:checkbox[name=selected]:checked").length == 0){
    $(".tools-hide").hide();
    $(".tools-h").show();
    } else {
    $(".tools-hide").show();
    $(".tools-h").hide();
  }
  })
  

  // $("#side-menu").click(function(){
  //   if($(window).width() <= 1024){
  //       if($("#main-left").hasClass("open")){
  //         $("#main-left").removeClass("open");
  //       }
  //       else{
  //         $("#main-left").addClass("open");
  //       }
  //   }
  // }); //메뉴 생성 제거

  // $("#side-menu").click(function(){
  //   if($(window).width() <= 1024){
  //       if($("#main-left").is(":visible")){
  //         $("#main-left").fadeOut('fast');
  //       }
  //       else{
  //         $("#main-left").fadeIn('fast');
  //       }
  //   }
  // }); //메뉴 생성 제
  $("#side-menu").click(function(){
    if($(window).width() <= 1024){
      if ($("#main-left").hasClass("visi")){
        $("#main-left").animate({
          left: "-300px"
          
        }, 700);
        $("#main-left").removeClass("visi");
      } 
      else{
        $("#main-left").animate({
          left: "0px" 
          
        }, 700);
        $("#main-left").addClass("visi");
      }
    }
 }); //메뉴 생성 제

 if($(window).width() <= 767){
  $('.text-xs').hide();
  $('th').not(".always").hide();
  $(".breadcrumb").html(`<li class="roots"><a href="#"><span class="glyphicon glyphicon-option-horizontal text-info"></span></a></li>
  <li><a href="#">Home</a></li>
  <li><a href="#">Library</a></li>
  <li class="active">Data</li>`)
} else{
  $('.text-xs').hide();
  $('th').not(".always").show();
  $(".breadcrumb").html(`
  <li><a href="#">Home</a></li>
  <li><a href="#">Library</a></li>
  <li class="active">Data</li>`)
}
});

$(document).ready(function(){
if($(window).width() < 1410){
      $(".tools").hide();
      $("#resize").show();
    }else{
      $(".tools").show();
      $("#resize").hide();
    }
$(window).resize(function() {
    if($(window).width() < 1410){
      $(".tools").hide();
      $("#resize").show();
    }else{
      $(".tools").show();
      $("#resize").hide();
    }
 })
})

$("#delete").click(function(){
  var num = $("#trash").text();
  console.log(num);
  $("#trash").html(Number(num) + $("input:checkbox[name=selected]:checked").length);
  $("input:checkbox[name='selected']").filter(":checked").parents('tr').remove();
})

$(window).resize(function(){
  if($(window).width() <= 767){
    $('.text-xs').hide();
    $('th').not(".always").hide();
    $(".breadcrumb").html(`<li class="roots"><a href="#"><span class="glyphicon glyphicon-option-horizontal text-info"></span></a></li>
    <li><a href="#">Home</a></li>
    <li><a href="#">Library</a></li>
    <li class="active">Data</li>`)
  } else{
    $('.text-xs').hide();
    $('th').not(".always").show();
    $(".breadcrumb").html(`
    <li><a href="#">Home</a></li>
    <li><a href="#">Library</a></li>
    <li class="active">Data</li>`)
  }
})

