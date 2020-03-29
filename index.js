window.onload=function(){
	var g=new Grammar()
	email_rules(g)
	document.getElementsByClassName("wr")[0].innerHTML=g.generate().split("\n").join("<br>")
}