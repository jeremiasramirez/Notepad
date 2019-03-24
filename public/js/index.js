class CreateCard{

	constructor(title,description){
		this.title = title;
		this.description = description;
	}

	createCard(){
		let cardsContainer = document.getElementById("cards");
		let elementContainer = document.createElement("div");
			elementContainer.setAttribute("class","elementContainer");
			cardsContainer.insertAdjacentElement("afterend",elementContainer);

		let titleElement= document.createElement("h1");
			titleElement.setAttribute("class","titleCard");
			titleElement.textContent = this.title; 
			elementContainer.insertAdjacentElement("afterbegin",titleElement);

		let descriptionElement= document.createElement("p"); 
			descriptionElement.setAttribute("class","descriptionCard")
			descriptionElement.textContent = this.description;
			elementContainer.appendChild(descriptionElement);

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
			},2000)
	}


}


let title = document.getElementById("note__title");
let description = document.getElementById("note__description");
let buttonSend = document.getElementById("btn__send");
 
buttonSend.addEventListener("click",(e)=>{
	if(title.value !== "" && description.value !== "" && title.value.length <= 20){
		let cr = new CreateCard(title.value ,description.value);
		localStorage.setItem(title.value,description.value);

			cr.createCard();
			cr.createdValidate();
			
			title.value = "";
			description.value = "";
	}

},false)












