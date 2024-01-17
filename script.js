const raiting = document.querySelector(`.raiting`);
let lastClickedLi = null;
const two = document.querySelector(`.two`)

const button = document.querySelector`button`
const closeTwo = document.querySelector(`.x`)

raiting.addEventListener(`click`,function(li){
	const clickedLi = li.target;
	if (clickedLi.tagName === 'LI' && clickedLi.parentNode.classList.contains('raiting')) {

// Ändrar tillbaka färgen på föregående knapp
		if (lastClickedLi){
			lastClickedLi.style.backgroundColor = `var(--clr-neutral-mediumGrey)`
			}
// --------------------------------------------------------------

// Ändrar färg och vilken som är föregående knapp
		clickedLi.style.backgroundColor = 'var(--clr-primary-orange)';
		lastClickedLi = clickedLi;
// --------------------------------------------

// Ändra textcontent på selected nummer
document.querySelector(`.selected`).textContent = (`You selected ${clickedLi.textContent} out of 5`);
// -------------------------------------------------------------

// Button till nästa sida
			button.addEventListener(`click`, function(){
			two.classList.remove(`hidden`)
		})
// --------------------------------------------------------
	}
});

// Går tillbaka till första sidan
closeTwo.addEventListener(`click`, function(){
	two.classList.add(`hidden`)
})





