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

			remov.addEventListener("dblclick",(e)=>{
				let rm = document.getElementById("deleteWindow");
				if( rm ){
						document.getElementById("deleteWindow").remove();
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

(function getData(title,description,buttonSend){

buttonSend.addEventListener("click",(e)=>{

	if(	(title.value !== "")  && (description.value !== "") && (title.value.length <= 40) ){

		let empty = document.getElementById("empty__notes");

		if(empty){

			empty.textContent += " cargando.. ";

			setTimeout((e)=>{
				empty.remove();
			},3000)


		}
		let cr = new CreateCard(title.value ,description.value);

			cr.createCard();
			cr.createdValidate();


			title.value = "";
			description.value = "";

	}

},false)

})(title,description,buttonSend)
