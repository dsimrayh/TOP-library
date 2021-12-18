let myLibrary = [];

function Book(title, author, pages) {
	this.title = title;
 	this.author = author;
  	this.pages = pages;
	this.read = false;
}

Book.prototype.hasBeenRead = function() {
	this.read = !this.read;
}

function addBookToLibrary() {
	const bookTitle = document.querySelector("#title").value;
	const bookAuthor = document.querySelector("#author").value;
	const bookPages = document.querySelector("#pages").value;

	if(!bookTitle || !bookAuthor || !bookPages) return;

	const newBook = new Book(bookTitle, bookAuthor, bookPages)
	myLibrary.push(newBook);
	const formMask = document.querySelector("#mask");
	formMask.classList.add('hidden');
	resetForm();
}

function resetForm() {
	document.querySelector("#title").value = null;
	document.querySelector("#author").value = null;
	document.querySelector("#pages").value = null;
}

// Creates card to display with book info
function createBaseCard(book) {
	const card = document.createElement("div");
	card.classList.add("card");

	const title = document.createElement("p");
	title.classList.add("book-title");
	title.innerText = book.title;

	const author = document.createElement("p");
	author.classList.add("book-author");
	author.innerText = book.author;

	const pages = document.createElement("p");
	pages.classList.add("book-pages");
	pages.innerText = `${book.pages} pages`;

	card.appendChild(title);
	card.appendChild(author);
	card.appendChild(pages);

	return card;
}

// Creates "Read" and "Remove" buttons for cards
function createCardButtons(indexCounter) {
	const options = document.createElement("div");
	options.classList.add("book-options");

	const label = document.createElement("label");
	label.classList.add("book-read");
	label.innerText = "Read";

	const input = document.createElement("input");
	input.setAttribute("type", "checkbox")
	input.classList.add("book-read-checkbox");
	input.setAttribute("data-index", indexCounter);

	const button = document.createElement("button");
	button.classList.add("remove-book");
	button.innerText = "Remove";
	button.setAttribute("data-index", indexCounter);

	options.appendChild(label);
	options.appendChild(input);
	options.appendChild(button);

	return options;
}

function clearDisplayedLibrary() {
	const library = document.querySelector("#library");
	while(library.firstChild) {
		library.removeChild(library.lastChild);
	}
}

// Main function -- clears displayed books and reassigns indexes, displays again
function displayBooks() {
	clearDisplayedLibrary();
	const library = document.querySelector("#library");
	let indexCounter = 0;
	myLibrary.forEach(book => {
		const card = createBaseCard(book);
		const buttons = createCardButtons(indexCounter)
		card.appendChild(buttons);
		library.appendChild(card);
		indexCounter++;
	});
	addCardButtonListeners();
}

// Add listeners only to card buttons
function addCardButtonListeners() {
	const removeButtons = document.querySelectorAll(".remove-book");
	const readButtons = document.querySelectorAll(".book-read-checkbox");

	removeButtons.forEach(remove => {
		remove.addEventListener("click", (e) => {
			myLibrary.splice(e.target.dataset.index, 1);
			displayBooks();
		});
	});

	readButtons.forEach(read => {
		read.addEventListener("change", (e) => {
			myLibrary[e.target.dataset.index].hasBeenRead();
		})
	})
}

// Add listeners for non-card buttons
function addMainButtonListeners () {
	const newBookButton = document.querySelector("#new-book-btn");
	const submitNewBook = document.querySelector("#submit");
	const closeNewBookForm = document.querySelector("#close-form");
	const formMask = document.querySelector("#mask");

	newBookButton.addEventListener("click", () => {
		formMask.classList.toggle("hidden");
	});

	closeNewBookForm.addEventListener("click", () => {
		formMask.classList.toggle("hidden");
	});

	submitNewBook.addEventListener("click", (e) => {
		e.preventDefault();
		addBookToLibrary();
		displayBooks();
	})
}

addMainButtonListeners();
