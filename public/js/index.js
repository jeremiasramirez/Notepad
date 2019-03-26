class CreateCard{

	constructor(title,description){
		this.title = title;
		this.description = description;
	}

	createCard(){
		let cardsContainer = document.getElementById("cards");
		let elementContainer = document.createElement("div");
			elementContainer.setAttribute("class","elementContainer");
			elementContainer.setAttribute("id","elementContainerR");
			cardsContainer.insertAdjacentElement("afterend",elementContainer);

		let titleElement= document.createElement("h1");
			titleElement.setAttribute("class","titleCard");
			titleElement.textContent = this.title; 
			elementContainer.insertAdjacentElement("afterbegin",titleElement);

		let descriptionElement= document.createElement("p"); 
			descriptionElement.setAttribute("class","descriptionCard")
			descriptionElement.textContent = this.description;
			elementContainer.appendChild(descriptionElement);

			let remov =  document.getElementById("elementContainerR");

		if(remov!==null && remov !== undefined){

			remov.addEventListener("dblclick",(e)=>{

				let valid = document.createElement("div");
					valid.setAttribute("class","deleteWindow");
					valid.setAttribute("id","deleteWindow");
				 
					setTimeout(()=>{
						if(valid)valid.remove();
					},2000)


				let yes = document.createElement("button");
					yes.textContent = " Eliminar ";
					yes.setAttribute("id","button1Delete");
					yes.setAttribute("class","button1Delete fas fa-trash-alt ");
					valid.appendChild(yes);

				let no = document.createElement("button");
					no.textContent = " Cancelar ";
					no.setAttribute("class","button2Cancel far fa-window-close");
					no.setAttribute("id","button2Cancel");
				 
					no.setAttribute("id","button2Cancel");
					valid.appendChild(no);

					let nots = document.getElementById("button2Cancel")
 
				document.body.insertAdjacentElement("afterbegin",valid);

				yes.addEventListener("click",(e)=>{
					remov.remove();
					let msjDeletedExit = document.createElement("p");
					msjDeletedExit.textContent = " Nota eliminada ";
					msjDeletedExit.setAttribute("class","messageExit far fa-check-circle");
					setTimeout(()=>{
						msjDeletedExit.remove();
					},1000)
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
		let text = document.createElement("p"); 
			text.textContent = "Haz creado una nota ";
			let icon = document.createElement("i");
				icon.setAttribute("class","far fa-check-circle");
				text.appendChild(icon)
			text.setAttribute("class","validate");
			document.body.insertAdjacentElement("afterbegin",text);

			let time = setTimeout((e)=>{

				text.remove();
			},1000)
	}
	 



}


let title = document.getElementById("note__title");
let description = document.getElementById("note__description");
let buttonSend = document.getElementById("btn__send");
 
buttonSend.addEventListener("click",(e)=>{
	if(title.value !== "" && description.value !== "" && title.value.length <= 20){
		let empty = document.getElementById("empty__notes");
		if(empty){
			empty.remove();
		}
		let cr = new CreateCard(title.value ,description.value);
		localStorage.setItem(title.value,description.value);

			cr.createCard();
			cr.createdValidate();
			
			
			title.value = "";
			description.value = "";
	}

},false)

 








