window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px";
  }
}

document.getElementById("next").addEventListener("click", Nextpage);

var i = 0;
var tList = ["\"Nicholas displayed a good team spirit and was a dedicated member of the Media Society from 2018 to 2020. Throughout these three years, he contributed regularly to the society\'s activity and was always ready to carry out tasks assigned to the best of his ability. He showed commitment in perfecting his computing skills in video-scripting and video-editing. Nicholas\' strength in resilience and perfection would stand him in good stead with any organisation he joins in the future\"",
  "\"Nicholas is a pleasant and unassuming student who has a calm and composed demenour. He has shown a positive attitude in his time here in Yuying Secondary School and ths will be a great asset in his future undertakings. He is stable and calm in manner and weathers difficulties with equanminity. He is serious in his work and has a good work attitude. Nicholas can be counted upon to carry out his duties and responsibilies to the best of his abilities. He will be an asset in any organisation.\"",
  "\"Nicholas was also a active in serving the community around him. He was involved in helping to plan and execute the Yuying Changemakers Values-in-Action initiative in 2019, where he displayed empathy and appereciation for the migrant workers and elderly in society. Nicholas also planned and execute the Yuying Changemakers Values-in-Action project in 2020, where his group directed a video campaign to encourage respectful and appropriate online etiquette in response to Covid-19.\""
  //,"\"He is polite and considerate towards his peers and teachers, often lending a helping a hand to those in need. \""
];
var nList = ["~ Mdm Tan", "~ Mr Chia", "~ Mr Goh"];
function Nextpage() {
  if (i <= 0) i = tList.length;
  i--;
  document.getElementById("testimony").innerHTML = tList[i];
  document.getElementById("teacher-name").innerHTML = nList[i];
}

//  thankyou alert box
function tyMessage() {
  alert("Thank you for sending me an email, I will reply to you soon!");
}