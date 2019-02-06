// Variabler för DOM-elementen
const elements = {
    backdrop: document.querySelector('.backdrop'),
    closeModal: document.querySelector('.closemodal'),
    singleProd: document.querySelector('.singleprod'),
    basketIcon: document.querySelector('.basket_icon'),
    miniBasket: document.querySelector('.minibasket'),
    wishlist: document.querySelector('.wishlist'),
    wishlistIcon: document.querySelector('.wishlist_icon'),
    modal: document.querySelector('.modal'),
    modalPic: document.querySelector('.modal__pic'),
    basketLeft: document.querySelector('.basket__left'),
    productsCollection: document.querySelector('.products__collection'),
    alertBar: document.querySelector('.alert_bar')
};

// Händelsehanterare
window.addEventListener('DOMContentLoaded', loadBasket);
window.addEventListener('DOMContentLoaded', loadWishlist);

if (elements.backdrop && elements.closeModal) {
    elements.backdrop.addEventListener('click', closeModal);
    elements.backdrop.addEventListener('click', closeDropdown);
    elements.closeModal.addEventListener('click', closeModal);
    window.addEventListener('keyup', closeModal);
    document.querySelector('.dropdown__menu-close').addEventListener('click', closeDropdown);

    document.querySelector('.modal__right').addEventListener('click', switchBookSide);
    document.querySelector('.modal__left').addEventListener('click', switchBookSide);
}

if (elements.backdrop) {
    elements.backdrop.addEventListener('click', closeDropdown);
    document.querySelector('.dropdown__menu-close').addEventListener('click', closeDropdown);
}

if (document.querySelector('.newbooks')) {
    document.querySelector('.newbooks').addEventListener('click', openModal);
    document.querySelector('.newbooks__collection').addEventListener('click', switchSlideBook);
}


if (document.querySelector('.products')) {
    document.querySelector('.products').addEventListener('click', openModal);
    elements.productsCollection.addEventListener('click', switchSlideBook);
}

if (elements.singleProd) {
    elements.singleProd.addEventListener('click', readMore);
    elements.singleProd.addEventListener('click', openModal);
}

if (elements.productsCollection) {
    elements.productsCollection.addEventListener('click', addItemToBasket);
    elements.productsCollection.addEventListener('click', addItemToWishlist);
} else if (elements.singleProd) {
    elements.singleProd.addEventListener('click', addItemToBasket);
    elements.singleProd.addEventListener('click', addItemToWishlist);
}

if (document.querySelector('.hero__menu-top--basket')) {
    document.querySelector('.hero__menu-top--basket').addEventListener('click', addItemToBasket);
}

if (document.querySelector('.wishlistpage__area')) {
    document.querySelector('.wishlistpage__area').addEventListener('click', addItemToBasket);
}

if (document.querySelector('.results')) {
    document.querySelector('.results').addEventListener('click', addItemToBasket);

}

if (document.querySelector('.search')) {
    document.querySelector('.search').addEventListener('click', clickSingleResult);
    document.querySelector('.searchbtn').addEventListener('click', showResultsPage);
    document.querySelector('.hero__menu-top--search').addEventListener('keyup', showResultsPage);
}

if (document.querySelector('.singleprod__returnbtn')) {
    document.querySelector('.singleprod__returnbtn').addEventListener('click', directUserBack);
}

if (document.querySelector('.results')) {
    window.addEventListener('DOMContentLoaded', loadSearchResults);
}

if (document.querySelector('.basket')) {
    document.querySelector('.basket').addEventListener('click', removeItemFromBasket);
}

elements.miniBasket.addEventListener('click', removeItemFromBasket);

elements.basketIcon.addEventListener('click', openMiniBasket);

elements.wishlistIcon.addEventListener('click', openWishlist);

document.querySelector('.hamburger').addEventListener('click', openDropdown);

document.querySelector('.hero__menu-top--search').addEventListener('keyup', lookSearchResults);

document.querySelector('.wishlist__top-emptylist').addEventListener('click', emptyWishlist);

// Variabler för olika kontroller i if-satser
let miniBasketState = false;
let wishlistState = false;
let readMoreState = false;
let modalBookState = 'front';
let currentShownImage = null;
let currentSlideBook = 1;

// Lokala variabler för att lagra information
let storage = JSON.parse(localStorage.getItem('basket')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let sum = 0;
let moms = 10;

let books = {
    book1: {
        id: 1,
        title: 'Introduction to the Design and Analysis of Algorithms',
        author: 'Anany Levitin',
        price: 149,
        pages: 562,
        weight: 323,
        imgURL: 'background-image: url(../img/products/book1_front.png)'
    },
    book2: {
        id: 2,
        title: 'Introducing Data Structures with Java',
        author: 'David Cousins',
        price: 159,
        pages: 393,
        weight: 323,
        imgURL: 'background-image: url(../img/products/book2_front.png)'
    },
    book3: {
        id: 3,
        title: 'An Introduction to Object-Oriented Programming with Java',
        author: 'C. Thomas Wu',
        price: 169,
        pages: 983,
        weight: 523,
        imgURL: 'background-image: url(../img/products/book3_front.png)'
    },
    book4: {
        id: 4,
        title: 'The C Programming Language',
        author: 'B. Kernighan och D. Ritchie',
        price: 179,
        pages: 272,
        weight: 193,
        imgURL: 'background-image: url(../img/products/book4_front.png)'
    },
    book5: {
        id: 5,
        title: 'Concepts of Programming Languages',
        author: 'Anany Levitin',
        price: 179,
        pages: 809,
        weight: 463,
        imgURL: 'background-image: url(../img/products/book5_front.png)'
    },
    book6: {
        id: 6,
        title: 'Python Programming - An Introduction to Computer Science',
        author: 'John Zelle',
        price: 189,
        pages: 514,
        weight: 363,
        imgURL: 'background-image: url(../img/products/book6_front.png)'
    },
};

let booksArray = Object.values(books);

// Funktion som skapar HTML-template för enstaka bok
function createTemplate(id) {
    let template = null;
    booksArray.forEach(book => {
        if (id == book.id) {
            template = `<div class="product__pic pic${book.id}"><div class="add_to_wishlist" data-id="book${book.id}">🧡</div></div>
            <h2 class="product__title">${book.title}</h2>
            <p class="product__author">av ${book.author}</p>
            <p class="product__price">${book.price} SEK</p>
            <a href="./book${book.id}.html" class="product__linkbtn">Läs mer om boken</a>
            <button class="product__basketbtn" id="book${book.id}">Lägg till i kassan</button>`;
        }
    });

    return template;
}


// Funktioner som triggas igång vid händelser
function openMiniBasket() {
    if (!miniBasketState) {
        elements.miniBasket.style.display = 'block';
        elements.wishlist.style.display = 'none';
        miniBasketState = true;
    } else {
        elements.miniBasket.style.display = 'none';
        miniBasketState = false;
    }
}

function openWishlist() {
    if (!wishlistState) {
        elements.wishlist.style.display = 'block';
        elements.miniBasket.style.display = 'none';
        wishlistState = true;
    } else {
        elements.wishlist.style.display = 'none';
        wishlistState = false;
    }
}

function openDropdown() {
    document.querySelector('.dropdown').style.transform = 'translateX(0)';
    elements.backdrop.style.display = 'block';
}

function closeDropdown() {
    document.querySelector('.dropdown').style.transform = 'translateX(-100vw)';
    elements.backdrop.style.display = 'none';
}

function closeModal(e) {
    if (e.keyCode == 27 || e.type === 'click') {
        elements.backdrop.style.display = 'none';
        elements.modal.style.display = 'none';
        modalBookState = 'front';
    }
}

function openModal(e) {

    // Identifierar typ av bild och visar den
    function checkModalPic(className) {
        for (let i = 1; i <= booksArray.length; i++) {
            if (e.target.classList.contains(`${className+i}`)) {
                currentShownImage = `pic${i}`;
                elements.modalPic.style.backgroundImage = `url("./img/products/book${i}_front.png")`;
            }
        }
    }


    if (e.target.classList.contains('product__pic')) {
        elements.backdrop.style.display = 'block';
        elements.modal.style.display = 'block';

        checkModalPic('pic');

    } else if (e.target.classList.contains('singleprod__main-left')) {
        elements.backdrop.style.display = 'block';
        elements.modal.style.display = 'block';

        checkModalPic('bookcover');

    } else if (e.target.classList.contains('startbook')) {
        elements.backdrop.style.display = 'block';
        elements.modal.style.display = 'block';

        checkModalPic('book');
    }

}

function readMore(e) {
    if (e.target.classList.contains('readmore')) {
        if (!readMoreState) {
            document.querySelector('.singleprod__main-right--details---beskrivning').innerHTML = '<span>Kort beskrivning:</span> En fantastisk, underhållande bok som har sålts i stora antal världen runt om. Boken har haft en stor positiv påverkan på många människor, och läsarna har gett väldigt goda omdömen. <span class="readmore">Läs mindre</span></p>';
            readMoreState = true;
        } else {
            document.querySelector('.singleprod__main-right--details---beskrivning').innerHTML = '<span>Kort beskrivning:</span> En fantastisk, underhållande bok som har sålts i stora antal världen runt om... <span class="readmore">Läs mer</span>';
            readMoreState = false;
        }
    }
}

// Visar de olika sidorna av boken
function switchBookSide() {
    let reversedSide = null;

    // Loopar igenom böckerna, testar sida
    function checkSide(side) {
        side === 'front' ? reversedSide = 'back' : reversedSide = 'front';

        for (let i = 1; i <= booksArray.length; i++) {
            if (currentShownImage === `pic${i}`) {
                elements.modalPic.style.backgroundImage = `url(./img/products/book${i}_${reversedSide}.png)`;
            }
        }
        modalBookState = reversedSide;
    }

    checkSide(modalBookState);
}

let countBooksRight = 1;
let countBooksLeft = booksArray.length;

// Funktion för att flytta runt på produktsektionen
function switchSlideBook(e) {
    if (e.target.classList.contains('rarr')) {
        if (currentSlideBook < booksArray.length) {
            countBooksRight = currentSlideBook + 1;
        } else if (currentSlideBook === booksArray.length) {
            countBooksRight = 1;
        }

        for (let i = 1; i < 5; i++) {
            document.querySelector(`.prodplace${i}`).innerHTML = createTemplate(countBooksRight);
            countBooksRight < booksArray.length ? countBooksRight++ : countBooksRight = 1;
        }

        currentSlideBook < booksArray.length ? currentSlideBook++ : currentSlideBook = 1;
    } else if (e.target.classList.contains('larr')) {
        if (currentSlideBook === 1) {
            countBooksLeft = booksArray.length;
        } else if (currentSlideBook > 1) {
            countBooksLeft = currentSlideBook - 1;
        }

        for (let i = 1; i < 5; i++) {
            document.querySelector(`.prodplace${i}`).innerHTML = createTemplate(countBooksLeft);
            countBooksLeft === booksArray.length ? countBooksLeft = 1 : countBooksLeft++;
        }

        currentSlideBook === 1 ? currentSlideBook = booksArray.length : currentSlideBook--;
    }
}

if (document.querySelector('.gallery')) {
    let containerWidth = document.querySelector('.gallery').offsetWidth;
    let wrapper = document.querySelector('.slide');
    let items = document.querySelectorAll('.show').length;
    let count = 1;

    let next = document.querySelector('.gallery__rarr');
    let prev = document.querySelector('.gallery__larr');

    next.addEventListener('click', nextSlide);

    function nextSlide() {

        if (count === 1) {
            document.querySelector('.switch2').classList.add('active');
            document.querySelector('.switch1').classList.remove('active');
        } else if (count === 2) {
            document.querySelector('.switch3').classList.add('active');
            document.querySelector('.switch2').classList.remove('active');
        } else if (count === 3) {
            document.querySelector('.switch1').classList.add('active');
            document.querySelector('.switch3').classList.remove('active');
        }


        if (count < items) {
            wrapper.style.left = '-' + count * containerWidth + 'px';
            count++;
        } else if (count === items) {
            wrapper.style.left = '0px';
            count = 1;
        }

    }

    prev.addEventListener('click', prevSlide);

    function prevSlide() {
        if (count === 1) {
            document.querySelector('.switch3').classList.add('active');
            document.querySelector('.switch1').classList.remove('active');
        } else if (count === 2) {
            document.querySelector('.switch1').classList.add('active');
            document.querySelector('.switch2').classList.remove('active');
        } else if (count === 3) {
            document.querySelector('.switch2').classList.add('active');
            document.querySelector('.switch3').classList.remove('active');
        }


        if (count > 1) {
            count = count - 2;
            wrapper.style.left = '-' + count * containerWidth + 'px';
            count++;
        } else if (count === 1) {
            count = items - 1;
            wrapper.style.left = '-' + count * containerWidth + 'px';
            count++;
        }
    }
}


function loadBasket() {
    // Laddar korgen från LS om det finns någon
    storage = JSON.parse(localStorage.getItem('basket')) || [];

    // Skapar en tom korg initialt
    if (elements.basketLeft) {
        elements.basketLeft.innerHTML = `<div class="basket__left-topbar">
        <h3 class="basket__left-topbar--proddesc">Produktbeskrivning</h3>
        <h3 class="basket__left-topbar--quantity">Antal</h3>
        <h3 class="basket__left-topbar--total">Totalt</h3>
        </div>`;
    }

    // Tömmer korgen initialt
    document.querySelector('.minibasket__books').innerHTML = '';

    if (storage) {
        storage.forEach(item => {
            sum += item.price;
            let loadedMiniBook = `
                <div class="book">
                <div class="book__img" style="${item.imgURL}"></div>
                <div class="book__details">
                    <h3 class="book__details-title">${item.title}</h3>
                    <label  class="book__details-label">Antal:</label>
                    <input type="number" class="book__details-input" value="1">
                    <p class="book__details-price">${item.price} SEK</p>
                </div>
                <p class="book__remove" data-id=${item.id}>&times; TA BORT</p>
                </div>
                `;

            let loadedBigBook = `
                <div class="product">
                <div class="basket__left-info">
                    <div class="basket__left-info--desc">
                        <h3 class="basket__left-info--desc---title">${item.title}</h3>
                        <p class="basket__left-info--desc---author">${item.author}</p>
                    </div>
                    <div class="basket__left-info--quant">
                        <input type="number" class="prod_quantity" value="1">
                    </div>
                    <h1 class="basket__left-info--price">${item.price} SEK</h1>
                </div>
                <div class="basket__left-book">
                    <div class="basket__left-book--img" style="${item.imgURL}"></div>
                    <div class="basket__left-book--details">
                        <p class="skick"><span>Skick:</span> Väldigt bra</p>
                        <p class="format"><span>Format:</span> Hardback</p>
                        <p class="sidor"><span>Antal sidor:</span> ${item.pages}</p>
                        <p class="vikt"><span>Vikt:</span> ${item.weight} gram</p>
                        <p class="datum"><span>Publiceringsdatum:</span> 2018-10-16</p>
                        <p class="basket__left-book--details---desc"><span>Kort beskrivning:</span> En fantastisk, underhållande bok som har sålts i stora antal världen runt om... <a href="./book${item.id}.html"><span class="readmore">Läs mer</span></a></p>
                        <p class="delete_from_basket" data-id="${item.id}">&times; Ta bort</p>
                    </div>
                </div>
            </div>
                `;

            document.querySelector('.minibasket__books').insertAdjacentHTML('beforeend', loadedMiniBook);

            if (elements.basketLeft) {
                elements.basketLeft.insertAdjacentHTML('beforeend', loadedBigBook);
            }
        });

        elements.basketIcon.dataset.items = storage.length;

        if (sum === 0) moms = 0;
    }

    document.querySelector('.minibasket__total-top--quantity').innerHTML = `<span>${storage.length}</span> varor`;

    document.querySelector('.minibasket__total-top--total').innerHTML = `Totalt: <span>${sum} SEK</span>`;

    if (document.querySelector('.basket__right-box--pris---value')) {
        document.querySelector('.basket__right-box--pris---value').textContent = `${sum} SEK`;
        document.querySelector('.basket__right-box--moms---value').textContent = `${moms} SEK`;
        document.querySelector('.basket__right-box--totalt---value').textContent = `${sum + moms} SEK`;
    }

    if (document.querySelector('.checkout__right-box--pris')) {
        document.querySelector('.checkout__right-box--pris---value').textContent = `${sum} SEK`;
        document.querySelector('.checkout__right-box--moms---value').textContent = `${moms} SEK`;
        document.querySelector('.checkout__right-box--totalt---value').textContent = `${sum + moms} SEK`;
    }

}

function loadWishlist() {
    // Laddar in önskelistan från LS
    wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    // Tömmer önskelistan initialt

    if (document.querySelector('.wishlistpage__area')) {
        document.querySelector('.wishlistpage__state').innerHTML = `Du har för närvarande <span>${wishlist.length}</span> böcker tillagda i önskelistan.`;

        document.querySelector('.wishlistpage__area').innerHTML = `<div class="wishlistpage__area-topbar">
        <h3 class="wishlistpage__area-topbar--proddesc wishlistpage__area-proddesc">Produktbeskrivning</h3>
        <h3 class="wishlistpage__area-topbar--quantity wishlistpage__area-quantity">Antal</h3>
        <h3 class="wishlistpage__area-topbar--total wishlistpage__area-total">Totalt</h3>
    </div>`;
    }

    // Tömmer önskelistan
    document.querySelector('.wishlist__books').innerHTML = '';

    if (wishlist) {
        wishlist.forEach(item => {
            let loadedMiniBook = `
                <div class="wishlist__books-book">
                <div class="wishlist__books-book--img" style="${item.imgURL}"></div>
                <div class="wishlist__books-book--desc">
                    <h2 class="wishlist__books-book--desc---title">${item.title}</h2>
                    <p class="wishlist__books-book--desc---author">Av ${item.author}</p>
                    <p class="wishlist__books-book--desc---price">${item.price} SEK</p>
                    <button class="wishlist__books-book--desc---basket_btn" data-id="book${item.id}">Lägg till i varukorg</button>
                </div>
            </div>
                `;

            let loadedBigBook = `
                <div class="product">
                    <div class="wishlistpage__area-info">
                        <div class="wishlistpage__area-info--desc">
                            <h3 class="wishlistpage__area-info--desc---title">${item.title}</h3>
                            <p class="wishlistpage__area-info--desc---author">${item.author}</p>
                        </div>
                        <div class="wishlistpage__area-info--quant">
                            <input type="number" class="prod_quantity" value="1">
                        </div>
                        <h1 class="wishlistpage__area-info--price">${item.price} SEK</h1>
                    </div>
                    <div class="wishlistpage__area-book">
                        <div class="wishlistpage__area-book--img" style="${item.imgURL}"></div>
                        <div class="wishlistpage__area-book--details">
                            <p class="skick"><span>Skick:</span> Väldigt bra</p>
                            <p class="format"><span>Format:</span> Hardback</p>
                            <p class="sidor"><span>Antal sidor:</span> ${item.pages}</p>
                            <p class="vikt"><span>Vikt:</span> ${item.weight} gram</p>
                            <p class="datum"><span>Publiceringsdatum:</span> 2018-10-16</p>
                            <p class="wishlistpage__area-book--details---desc"><span>Kort beskrivning:</span> En fantastisk, underhållande bok som har sålts i stora antal världen runt om... <a href="./book${item.id}.html"><span class="readmore">Läs mer</span></a></p>
                            <p class="add_to_basket" data-id="book${item.id}">Lägg till i varukorgen</p>
                        </div>
                    </div>
                </div>
                `;

            document.querySelector('.wishlist__books').insertAdjacentHTML('beforeend', loadedMiniBook);

            if (document.querySelector('.wishlistpage__area')) {
                document.querySelector('.wishlistpage__area').insertAdjacentHTML('beforeend', loadedBigBook);
            }
        });

        elements.wishlistIcon.dataset.wished = wishlist.length;

    }

}

function updateSum() {
    sum = 0;
    storage.forEach(item => {
        sum += item.price;

    })

    if (sum === 0) moms = 0;

    document.querySelector('.minibasket__total-top--quantity').innerHTML = `<span>${storage.length}</span> varor`;

    document.querySelector('.minibasket__total-top--total').innerHTML = `Totalt: <span>${sum} SEK</span>`;

    if (document.querySelector('.basket__right-box--pris---value')) {
        document.querySelector('.basket__right-box--pris---value').textContent = `${sum} SEK`;
        document.querySelector('.basket__right-box--moms---value').textContent = `${moms} SEK`;
        document.querySelector('.basket__right-box--totalt---value').textContent = `${sum + moms} SEK`;
    }
}


function addItemToBasket(e) {
    if (e.target.matches('.product__basketbtn')) {
        pushBook(e.target.id);
        showAlert();
    }
    if (e.target.matches('.singleprod__main-right--buttons---checkout')) {
        pushBook(e.target.id);
        showAlert();
    }

    if (e.target.matches('.add_to_basket')) {
        pushBook(e.target.dataset.id);
        showAlert();
    }

    if (e.target.matches('.wishlist__books-book--desc---basket_btn')) {
        pushBook(e.target.dataset.id);
        showAlert();
    }

    // Funktion för att lägga till böcker i varukorgen
    function pushBook(bookID) {
        if (e.target.id === bookID || e.target.dataset.id === bookID) {

            // Save in LS
            storage.push(books[bookID]);
            localStorage.setItem('basket', JSON.stringify(storage));
            let newBook = `
            <div class="book">
            <div class="book__img" style="${books[bookID].imgURL}"></div>
            <div class="book__details">
                <h3 class="book__details-title">${books[bookID].title}</h3>
                <label  class="book__details-label">Antal:</label>
                <input type="number" class="book__details-input" value="1">
                <p class="book__details-price" value="1">${books[bookID].price} SEK</p>
            </div>
            <p class="book__remove" data-id="${books[bookID].id}">&times; TA BORT</p>
            </div>
            `;

            document.querySelector('.minibasket__books').insertAdjacentHTML('afterbegin', newBook);

            elements.alertBar.classList.add('display_alert');
            elements.alertBar.classList.remove('danger_alert');
            elements.alertBar.classList.add('success_alert');
            elements.alertBar.innerHTML = `Boken <span>"${books[bookID].title}"</span> har lagts till din varukorg!`;

            setTimeout(function () {
                elements.alertBar.classList.remove('display_alert');
            }, 5000);
        }
    }

    updateSum();

    elements.basketIcon.dataset.items = storage.length;

    function showAlert() {}

}



function removeItemFromBasket(e) {
    if (e.target.matches('.delete_from_basket') || e.target.matches('.book__remove')) {
        storage.forEach((item, index) => {
            if (e.target.dataset.id == item.id) {
                storage.splice(index, 1);
            }
            localStorage.setItem('basket', JSON.stringify(storage));
            loadBasket();
            updateSum();
        });

        elements.alertBar.classList.add('display_alert');
        elements.alertBar.classList.remove('success_alert');
        elements.alertBar.classList.add('danger_alert');
        elements.alertBar.innerHTML = `Boken <span>"${books['book' + e.target.dataset.id].title}"</span> har tagits bort från din varukorg!`;

        setTimeout(function () {
            elements.alertBar.classList.remove('display_alert');
        }, 5000);
    } else if (e.target.matches('.delete_from_basket')) {
        elements.basketLeft.innerHTML = `<div class="basket__left-topbar">
        <h3 class="basket__left-topbar--proddesc">Produktbeskrivning</h3>
        <h3 class="basket__left-topbar--quantity">Antal</h3>
        <h3 class="basket__left-topbar--total">Totalt</h3>
    </div>`;
        document.querySelector('.minibasket__books').innerHTML = '';
    } else if (e.target.matches('.book__remove')) {

        if (elements.basketLeft) {
            elements.basketLeft.innerHTML = `<div class="basket__left-topbar">
            <h3 class="basket__left-topbar--proddesc">Produktbeskrivning</h3>
            <h3 class="basket__left-topbar--quantity">Antal</h3>
            <h3 class="basket__left-topbar--total">Totalt</h3>
        </div>`;
        }

        elements.basketIcon.dataset.items = storage.length;

    }
}


// Sökfunktionalitet
function lookSearchResults() {
    let booktitles = Object.values(books).map(elem => elem.title.toLowerCase());

    document.querySelector('.search__suggest').innerHTML = '';

    let storedResults = [];

    booktitles.forEach(title => {

        if (title.includes(this.value)) {
            Object.values(books).forEach(book => {
                if (title === book.title.toLowerCase()) {

                    let choice = `
                    <div class="search__suggest-choice" data-id="${book.id}">
                    <div class="search__suggest-choice--icon" data-id=${book.id}>
                        <div class="search__suggest-choice--icon---glass" data-id=${book.id}></div>
                        <div class="search__suggest-choice--icon---handle" data-id=${book.id}></div>
                    </div>
                    <p class="search__suggest-choice--text" data-id=${book.id}>${book.title}</p>
                    </div>
                    `;

                    document.querySelector('.search__suggest').insertAdjacentHTML('beforeend', choice);

                    if (this.value !== '') {
                        storedResults.push(book);
                    } else {
                        storedResults = [];
                    }
                }
            });
            // sparar sökord i LS
            localStorage.setItem('storedResults', JSON.stringify(storedResults));
        }

        localStorage.setItem('searchquery', JSON.stringify(this.value));

    });

    // Om sökfältet är tomt
    if (this.value === '') {
        document.querySelector('.search__suggest').innerHTML = '';
        storedResults = [];
    }
}

// Funktion för att klicka på enstaka resultat
function clickSingleResult(e) {

    if (e.target.matches('.search__suggest, .search__suggest *')) {
        // window.location.href = `http://${window.location.hostname}:${window.location.port}/book${e.target.dataset.id}.html`; // utvecklingsläge
        window.location.href = `http://studenter.miun.se/~yage1800/dt163g/webbshop/book${e.target.dataset.id}.html`; // produktionsläge
    }
}

// Funktion som tar användaren till results.html
function showResultsPage(e) {

    if (e.keyCode == 13 || e.type === 'click') {
        // window.location.href = `http://${window.location.hostname}:${window.location.port}/results.html` || ''; // utvecklingsläge
        window.location.href = `http://studenter.miun.se/~yage1800/dt163g/webbshop/book${e.target.dataset.id}.html`; // produktionsläge
    }
}

// Funktion som laddar alla sökresultat
function loadSearchResults() {
    if (document.querySelector('.results')) {
        let results = JSON.parse(localStorage.getItem('storedResults')) || [];
        let query = JSON.parse(localStorage.getItem('searchquery')) || '';
        document.querySelector('.results__state').innerHTML = `Du sökte efter <span>"${query}"</span>. Antalet resultat är ${results.length}/6.`;

        results.forEach(result => {
            let resultMarkup = `
            <div class="product">
            <div class="results__area-info">
                <div class="results__area-info--desc">
                    <h3 class="results__area-info--desc---title">${result.title}</h3>
                    <p class="results__area-info--desc---author">${result.author}</p>
                </div>
                <div class="results__area-info--quant">
                    <input type="number" class="prod_quantity" value="1">
                </div>
                <h1 class="results__area-info--price">${result.price} SEK</h1>
            </div>
            <div class="results__area-book">
                <div class="results__area-book--img" style="${result.imgURL}"></div>
                <div class="results__area-book--details">
                    <p class="skick"><span>Skick:</span> Väldigt bra</p>
                    <p class="format"><span>Format:</span> Hardback</p>
                    <p class="sidor"><span>Antal sidor:</span> ${result.pages}</p>
                    <p class="vikt"><span>Vikt:</span> ${result.weight} gram</p>
                    <p class="datum"><span>Publiceringsdatum:</span> 2018-10-16</p>
                    <p class="results__area-book--details---desc"><span>Kort beskrivning:</span> En fantastisk, underhållande bok som har sålts i stora antal världen runt om... <a href="./book${result.id}.html"><span class="readmore">Läs mer</span></a></p>
                    <p class="add_to_basket" data-id="book${result.id}">Lägg till i varukorgen</p>
                    <p class="add_to_wishlist" data-id="book${result.id}">Lägg till i önskelista ❤️</p>
                </div>
            </div>
        </div>
            `;

            document.querySelector('.results__area').insertAdjacentHTML('beforeend', resultMarkup);

        });

    }
}

// Funktion som för användaren tillbaka till föregående sida
function directUserBack() {
    window.history.back();
}

// Funktion för att lägga till böcker i önskelistan
function addItemToWishlist(e) {
    if (e.target.matches('.singleprod__main-right--buttons---wishlist')) {
        pushBook(e.target.dataset.id);
        // showAlert();
    } else if (e.target.matches('.add_to_wishlist')) {
        pushBook(e.target.dataset.id);
    }

    function pushBook(bookID) {
        if (e.target.dataset.id === bookID) {

            // Save in LS
            wishlist.push(books[bookID]);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            let newBook = `
            <div class="wishlist__books-book">
            <div class="wishlist__books-book--img" style="${books[bookID].imgURL}"></div>
            <div class="wishlist__books-book--desc">
                <h2 class="wishlist__books-book--desc---title">${books[bookID].title}</h2>
                <p class="wishlist__books-book--desc---author">Av ${books[bookID].author}</p>
                <p class="wishlist__books-book--desc---price">${books[bookID].price} SEK</p>
                <button class="wishlist__books-book--desc---basket_btn" data-id="book${books[bookID].id}">Lägg till i varukorg</button>
            </div>
        </div>
            `;

            document.querySelector('.wishlist__books').insertAdjacentHTML('afterbegin', newBook);

            elements.alertBar.classList.add('display_alert');
            elements.alertBar.classList.remove('danger_alert');
            elements.alertBar.classList.add('success_alert');
            elements.alertBar.innerHTML = `Boken <span>"${books[bookID].title}"</span> har lagts till din önskelista! ❤`;

            setTimeout(function () {
                elements.alertBar.classList.remove('display_alert');
            }, 5000);
        }
    }

    elements.wishlistIcon.dataset.wished = wishlist.length;
};


// Funktion för att tömma önskelistan
function emptyWishlist() {
    let wishlist = [];

    localStorage.setItem('wishlist', JSON.stringify(wishlist));

    loadWishlist();
}

// Funktion för pilen som för användaren till toppen av sidan
function scrollUp() {
    window.scrollTo(0, 0);
}