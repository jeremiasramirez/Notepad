class CreateCard{
	constructor(title,description){
		// Entrada de datos
		this.title = title;
		this.description = description;

	}
	createCard(){
		/*
		  creando elementos html para la interfaz de la card
		*/

		let cardsContainer = document.getElementById("cards"),
		 		elementContainer = document.createElement("div"),
				titleElement= document.createElement("h1"),
				descriptionElement= document.createElement("p");


			elementContainer.setAttribute("class","elementContainer");
			elementContainer.setAttribute("id","elementContainerR");
			cardsContainer.insertAdjacentElement("afterend",elementContainer);


			titleElement.setAttribute("class","titleCard");
			titleElement.textContent = this.title;
			elementContainer.insertAdjacentElement("afterbegin",titleElement);


			descriptionElement.setAttribute("class","descriptionCard")
			descriptionElement.textContent = this.description;
			elementContainer.appendChild(descriptionElement);
			let remov = document.getElementById("elementContainerR");
			// verificando si la card creado existe para poder eliminarla
		if(remov!==null && remov !== undefined){
			let itera = 0;
			remov.addEventListener("dblclick",(e)=>{
				let rm = document.getElementById("deleteWindow");
				if( rm ){
						document.getElementById("deleteWindow").remove();
						localStorage.removeItem(iterator);
				}

					let valid = document.createElement("div");
									valid.setAttribute("class","deleteWindow");
									valid.setAttribute("id","deleteWindow");
									valid.setAttribute("id","deleteWindow");

									setTimeout(()=>{
										if(valid)valid.remove();
									},3000)


				let yes = document.createElement("button"),
						no = document.createElement("button"),
						nots = document.getElementById("button2Cancel"),
						msjDeletedExit = document.createElement("p");

					yes.textContent = " Eliminar ";
					yes.setAttribute("id","button1Delete");
					yes.setAttribute("class","button1Delete fas fa-trash-alt ");

					valid.appendChild(yes);

					no.textContent = " Cancelar ";
					no.setAttribute("class","button2Cancel far fa-window-close");
					no.setAttribute("id","button2Cancel");

					no.setAttribute("id","button2Cancel");
					valid.appendChild(no);

				document.body.insertAdjacentElement("afterbegin",valid);

				yes.addEventListener("click",(e)=>{

					remov.remove();

					msjDeletedExit.textContent = " Nota eliminada ";
					msjDeletedExit.setAttribute("class","messageExit far fa-trash-alt");

					setTimeout(()=>{
						msjDeletedExit.remove();
					},2500)

					document.body.insertAdjacentElement("afterbegin",msjDeletedExit);

					if(valid){

						setTimeout((e)=>{
							valid.remove();
						},0)
					}

				},false);

				no.addEventListener("click",(e)=>{

					setTimeout((e)=>{
						valid.remove();
				    	},500)

			  	},false)

		  	},false)
		}
}

	createdValidate(){

			let text = document.createElement("p"),
				icon = document.createElement("i");
				text.textContent = "Haz creado una nota ";

				icon.setAttribute("class","far fa-check-circle");

				text.appendChild(icon)
				text.setAttribute("class","validate");

			document.body.insertAdjacentElement("afterbegin",text);

			let time = setTimeout((e)=>{
				text.remove();
			},1000)

	}
}


let title = document.getElementById("note__title"),
			description = document.getElementById("note__description"),
	 		buttonSend = document.getElementById("btn__send");
	 		fa_plane = document.getElementById("fa-plane");
//funcion que elimina un elemento html en 3 segundos, le pasamos el elemento
function deletingItem(empty){

		setTimeout((e)=>{

			empty.remove();
		 
		},3000)

}

//elimina la clase de un elemento , recibe el elemento y la clase del elemento
function deleteWithClass(elements,classElement){
	elements.classList.remove(classElement);
}

//agrega clase a un elemento , recibe el elemento y la clase del elemento
function addWithClass(elements,classElement){
	elements.classList.add(classElement);
}

/*
 *elimina la clase de un elemento en tiempo definido (segundos), recibe el elemento html,
  la clase del elemento y el tiempo en milisegundos
*/
let deleteWithClassTime = (elements, classElement, definitiveTime) => {
	let elementTime = setTimeout((e)=>{
		elements.classList.remove(classElement);
	}, definitiveTime);
}


/*
 *agrega clase a un elemento en tiempo definido (segundos), recibe el elemento html, la clase del elemento
 y los segundos en milisegundos
*/
function addWithClassTime(elements, classElement, definitiveTime){
	let elementTime = setTimeout((e)=>{
		elements.classList.add(classElement);
	}, definitiveTime)
}
 

(function getData(title,description,buttonSend){

buttonSend.addEventListener("click",(e)=>{

	if(	(title.value !== " " && title.value !== "")  && 
		(description.value !== " " && description.value !== "") && 
		(title.value.length <= 28) ){

		
		addWithClass(fa_plane,"fa-plane");
		deleteWithClassTime(fa_plane,"fa-plane",2000);
		
		let empty = document.getElementById("empty__notes");

		deleteWithClass(fa_plane,"fa-plane-warning");

		fa_plane.classList.remove("fa-plane-warning");

		if(empty){

			empty.textContent += " cargando.. ";
			deletingItem(empty)
			 
		}
	
		let cr = new CreateCard(title.value ,description.value);

			cr.createCard();
			cr.createdValidate();


			title.value = "";
			description.value = "";

	}
		else{
			let backgroundButton = document.getElementById("btn__send");
				addWithClass(fa_plane,"fa-plane-warning");
				addWithClass(backgroundButton,"fa-errors",2000)
				deleteWithClassTime(fa_plane,"fa-plane-warning",2000)
			  

				 
		}

},false)

})(title,description,buttonSend)

 let logo = document.getElementById("titlePage-js"),
 		 formDisabled = document.getElementById("form-js"),
		 maxScroll = window.scrollY,
	 	 minScroll = 0;

let scrolling = (logo, maxScroll, minScroll) => {
	
		logo.addEventListener("click", (e)=>{

			if( (maxScroll) >= (minScroll) ){
				 window.scrollTo(0,0)
			}
			 
		}, false);

}
scrolling(logo, maxScroll, minScroll);



 