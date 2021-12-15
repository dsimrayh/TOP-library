let library = [];

// Boiler plate constructor =====================

function Book(title, author, pages, read) {
	this.title = title;
 	this.author = author;
  	this.pages = pages;
  	this.read = read;
  	this.info = function() {
  		return `${title} by ${author}, ${pages} pages, ${read ? 'read' : 'not yet read'}`;
  	}
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const LOTR = new Book("Lord of the Rings", "J.R.R. Tolkien", 300, true);

console.log(theHobbit.info());
console.log(LOTR.info());

// ==================================


function addBookToLibrary() {
	// Call when user sunmits new book form
}

function displayBooks() {
	// Loop through array and display books
	// Called once on load, called subsequently on each add / remove
}

function addAllButtonListeners () {
	// Still needs to be added to
	const newBookButton = document.querySelector("#new-book-btn");
	const submitNewBook = document.querySelector("#submit");
	const closeNewBookForm = document.querySelector("#close-form");
	const formMask = document.querySelector("#mask");

	newBookButton.addEventListener('click', () => {
		formMask.classList.toggle('hidden');
	});

	closeNewBookForm.addEventListener('click', () => {
		formMask.classList.toggle('hidden');
	});

	submitNewBook.addEventListener('click', (e) => {
		e.preventDefault();
	})
}

addAllButtonListeners();
