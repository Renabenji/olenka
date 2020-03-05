$(document).ready(function(){
	$(".nosotros__link:first").addClass("active-color");
	$(".nosotros__space02 article").hide();
	$(".nosotros__space02 article:first").show();

	$(".nosotros__link").click(function(){
		$(".nosotros__link").removeClass("active-color");
		$(this).addClass("active-color");	
		$(".nosotros__space02 article").hide();

		var mantener = $(this).attr("href");
		$(mantener).show();
		return false;
	});

	$(".cotizacion__link:first").addClass("active-color");
	$(".ct-box01").hide();
	$(".ct-box01:first").show();

	$(".cotizacion__link").click(function(){
		$(".cotizacion__link").removeClass("active-color");
		$(this).addClass("active-color");	
		$(".ct-box01").hide();

		var mantener = $(this).attr("href");
		$(mantener).show();
		return false;
	});

	$(".proyectos__link:first").addClass("active-color");
	$(".pr-box01").hide();
	$(".pr-box01:first").show();

	$(".proyectos__link").click(function(){
		$(".proyectos__link").removeClass("active-color");
		$(this).addClass("active-color");	
		$(".pr-box01").hide();

		var mantener = $(this).attr("href");
		$(mantener).show();
		return false;
	});

	
}); 

var square = document.querySelectorAll(".ct-box02__color");
var burger = document.querySelector(".header__burger");
var menu = document.querySelector(".header__space01");
var links = document.querySelectorAll(".menu__link");
var button1 = document.querySelector(".sr-click1");
var info1 = document.querySelector(".sr-info1");
var button2 = document.querySelector(".sr-click2");
var info2 = document.querySelector(".sr-info2");
var button3 = document.querySelector(".sr-click3");
var info3 = document.querySelector(".sr-info3");

		square.forEach(function(ele){
			ele.addEventListener("click", activar)
		});

		function activar(){
			desactivar();
			this.classList.add("check");
		}
		
		function desactivar(){
			square.forEach(function(ele){
				ele.classList.remove("check");
			})
		}

	links.forEach(function(elem, index){
	var retardo = 500*index;
	elem.style.transitionDelay = retardo + "ms"
	})

	burger.addEventListener("click", abrirmenu);

		function abrirmenu(){
		menu.classList.toggle("header__space01--visible");
	}

	button1.addEventListener("click", george);

		function george(){
			info1.classList.toggle("sr-info1--visible");
		}

	button2.addEventListener("click", luz);

		function luz(){
			info2.classList.toggle("sr-info2--visible");
		}

	button3.addEventListener("click", chris);

		function chris(){
			info3.classList.toggle("sr-info3--visible");
		}

/*
		button.forEach(function(ele){
			ele.addEventListener("click", abririnfo)
		});

		function abririnfo(){
			cerrar();
			this.classList.remove("sr-info--visible");
		}

		function cerrar(){
			button.forEach(function(ele){
				ele.classList.add("sr-info--visible");
			})
		}
*/















/*		
var button = document.querySelectorAll(".ct-box01__buttoncolor");

	button.forEach(function(ele){
		ele.addEventListener("click", ir)
	});

	function ir(){
		var destino = this.getAttribute("href");
		console.log(destino);
		mostrar(destino);
	}

	function mostrar(){
		button.forEach(function(ele){
			
		})
	}
*/