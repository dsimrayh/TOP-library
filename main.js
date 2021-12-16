let myLibrary = [];

function Book(title, author, pages) {
	this.title = title;
 	this.author = author;
  	this.pages = pages;
	this.read = false;
}

// Return values are used to allow/prevent displayBooks function from being called
function addBookToLibrary() {
	const bookTitle = document.querySelector("#title").value;
	const bookAuthor = document.querySelector("#author").value;
	const bookPages = document.querySelector("#pages").value;

	if(!bookTitle || !bookAuthor || !bookPages) return false;

	const newBook = new Book(bookTitle, bookAuthor, bookPages)
	myLibrary.push(newBook);
	const formMask = document.querySelector("#mask");
	formMask.classList.add('hidden');
	resetForm();

	return true;
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
	pages.innerText = book.pages

	card.appendChild(title);
	card.appendChild(author);
	card.appendChild(pages);

	return card;
}

// Creates "Read" and "Remove" for cards
function createCardOptions() {
	const options = document.createElement("div");
	options.classList.add("book-options");

	const label = document.createElement("label");
	label.classList.add("book-read");
	label.innerText = "Read";

	const input = document.createElement("input");
	input.setAttribute("type", "checkbox")
	input.classList.add("book-read-checkbox");

	const button = document.createElement("button");
	button.classList.add("remove-book");
	button.innerText = "Remove";

	options.appendChild(label);
	options.appendChild(input);
	options.appendChild(button);

	return options;
}

function displayBooks() {
	const library = document.querySelector("#library");
	myLibrary.forEach(book => {
		const card = createBaseCard(book);
		const options = createCardOptions()
		card.appendChild(options);
		library.appendChild(card);
	});
}

function addAllButtonListeners () {
	// Still needs to be added to
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
		const bookAdded = addBookToLibrary();
		if(bookAdded) displayBooks();
		else return;
	})
}

addAllButtonListeners();
