if (document.querySelector('.backdrop') && document.querySelector('.closemodal')) {
    document.querySelector('.backdrop').addEventListener('click', closeModal);
    document.querySelector('.backdrop').addEventListener('click', closeDropdown);
    document.querySelector('.closemodal').addEventListener('click', closeModal);
    window.addEventListener('keyup', closeModal);
    document.querySelector('.dropdown__menu-close').addEventListener('click', closeDropdown);

    document.querySelector('.modal__right').addEventListener('click', switchBookSide);
    document.querySelector('.modal__left').addEventListener('click', switchBookSide);
}

if (document.querySelector('.newbooks')) {
    document.querySelector('.newbooks').addEventListener('click', openModal);
    document.querySelector('.newbooks__collection').addEventListener('click', switchSlideBook);
}


if (document.querySelector('.products')) {
    document.querySelector('.products').addEventListener('click', openModal);
    document.querySelector('.products__collection').addEventListener('click', switchSlideBook);
}

if (document.querySelector('.singleprod')) {
    document.querySelector('.singleprod').addEventListener('click', readMore);
    document.querySelector('.singleprod').addEventListener('click', openModal);
}

document.querySelector('.minibasket_icon').addEventListener('click', openMiniBasket);

document.querySelector('.hamburger').addEventListener('click', openDropdown);

let miniBasketState = false;
let readMoreState = false;
let modalBookState = 'front';
let currentShownImage = null;
let currentSlideBook = 1;

function openMiniBasket() {
    console.log('test');
    if (!miniBasketState) {
        document.querySelector('.minibasket').style.display = 'block';
        miniBasketState = true;
    } else {
        document.querySelector('.minibasket').style.display = 'none';
        miniBasketState = false;
    }
}

function openDropdown() {
    document.querySelector('.dropdown').style.transform = 'translateX(0)';
    document.querySelector('.backdrop').style.display = 'translateX(0)';
}

function closeDropdown() {
    document.querySelector('.dropdown').style.transform = 'translateX(-100vw)';
}

function closeModal(e) {

    if (e.keyCode == 27 || e.type === 'click') {
        document.querySelector('.backdrop').style.display = 'none';
        document.querySelector('.modal').style.display = 'none';
    
        modalBookState = 'front';
    }
}

function openModal(e) {
    if (e.target.classList.contains('product__pic')) {
        document.querySelector('.backdrop').style.display = 'block';
        document.querySelector('.modal').style.display = 'block';

        if (e.target.classList.contains('pic1')) {
            currentShownImage = 'pic1';
            document.querySelector('.modal__pic').style.backgroundImage = 'url("./img/products/book1_front.png")';
        } else if (e.target.classList.contains('pic2')) {
            currentShownImage = 'pic2';
            document.querySelector('.modal__pic').style.backgroundImage = 'url("./img/products/book2_front.png")';
        } else if (e.target.classList.contains('pic3')) {
            currentShownImage = 'pic3';
            document.querySelector('.modal__pic').style.backgroundImage = 'url("./img/products/book3_front.png")';
        } else if (e.target.classList.contains('pic4')) {
            currentShownImage = 'pic4';
            document.querySelector('.modal__pic').style.backgroundImage = 'url("./img/products/book4_front.png")';
        }  else if (e.target.classList.contains('pic5')) {
            currentShownImage = 'pic5';
            document.querySelector('.modal__pic').style.backgroundImage = 'url("./img/products/book5_front.png")';
        }  else if (e.target.classList.contains('pic6')) {
            currentShownImage = 'pic6';
            document.querySelector('.modal__pic').style.backgroundImage = 'url("./img/products/book6_front.png")';
        }
    } else if (e.target.classList.contains('singleprod__main-left')) {
        document.querySelector('.backdrop').style.display = 'block';
        document.querySelector('.modal').style.display = 'block';

        if (e.target.classList.contains('bookcover1')) {
            currentShownImage = 'pic1';
            document.querySelector('.modal__pic').style.backgroundImage = 'url("./img/products/book1_front.png")';
        } else if (e.target.classList.contains('bookcover2')) {
            currentShownImage = 'pic2';
            document.querySelector('.modal__pic').style.backgroundImage = 'url("./img/products/book2_front.png")';
        } else if (e.target.classList.contains('bookcover3')) {
            currentShownImage = 'pic3';
            document.querySelector('.modal__pic').style.backgroundImage = 'url("./img/products/book3_front.png")';
        } else if (e.target.classList.contains('bookcover4')) {
            currentShownImage = 'pic4';
            document.querySelector('.modal__pic').style.backgroundImage = 'url("./img/products/book4_front.png")';
        } else if (e.target.classList.contains('bookcover5')) {
            currentShownImage = 'pic5';
            document.querySelector('.modal__pic').style.backgroundImage = 'url("./img/products/book5_front.png")';
        } else if (e.target.classList.contains('bookcover6')) {
            currentShownImage = 'pic6';
            document.querySelector('.modal__pic').style.backgroundImage = 'url("./img/products/book6_front.png")';
        }
    } else if (e.target.classList.contains('startbook')) {
        document.querySelector('.backdrop').style.display = 'block';
        document.querySelector('.modal').style.display = 'block';

        if (e.target.classList.contains('book1')) {
            currentShownImage = 'pic1';
            document.querySelector('.modal__pic').style.backgroundImage = 'url("./img/products/book1_front.png")';
        } else if (e.target.classList.contains('book2')) {
            currentShownImage = 'pic2';
            document.querySelector('.modal__pic').style.backgroundImage = 'url("./img/products/book2_front.png")';
        } else if (e.target.classList.contains('book3')) {
            currentShownImage = 'pic3';
            document.querySelector('.modal__pic').style.backgroundImage = 'url("./img/products/book3_front.png")';
        } else if (e.target.classList.contains('book4')) {
            currentShownImage = 'pic4';
            document.querySelector('.modal__pic').style.backgroundImage = 'url("./img/products/book4_front.png")';
        } else if (e.target.classList.contains('book5')) {
            currentShownImage = 'pic5';
            document.querySelector('.modal__pic').style.backgroundImage = 'url("./img/products/book5_front.png")';
        } else if (e.target.classList.contains('book6')) {
            currentShownImage = 'pic6';
            document.querySelector('.modal__pic').style.backgroundImage = 'url("./img/products/book6_front.png")';
        }
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

function switchBookSide() {
    if (modalBookState === 'front') {
        if (currentShownImage === 'pic1') {
            document.querySelector('.modal__pic').style.backgroundImage = 'url(./img/products/book1_back.png)';
        } else if (currentShownImage === 'pic2') {
            document.querySelector('.modal__pic').style.backgroundImage = 'url(./img/products/book2_back.png)';
        } else if (currentShownImage === 'pic3') {
            document.querySelector('.modal__pic').style.backgroundImage = 'url(./img/products/book3_back.png)';
        } else if (currentShownImage === 'pic4') {
            document.querySelector('.modal__pic').style.backgroundImage = 'url(./img/products/book4_back.png)';
        }  else if (currentShownImage === 'pic5') {
            document.querySelector('.modal__pic').style.backgroundImage = 'url(./img/products/book5_back.png)';
        }  else if (currentShownImage === 'pic6') {
            document.querySelector('.modal__pic').style.backgroundImage = 'url(./img/products/book6_back.png)';
        }

        modalBookState = 'back';
    } else {
        if (currentShownImage === 'pic1') {
            document.querySelector('.modal__pic').style.backgroundImage = 'url(./img/products/book1_front.png)';
        } else if (currentShownImage === 'pic2') {
            document.querySelector('.modal__pic').style.backgroundImage = 'url(./img/products/book2_front.png)';
        } else if (currentShownImage === 'pic3') {
            document.querySelector('.modal__pic').style.backgroundImage = 'url(./img/products/book3_front.png)';
        } else if (currentShownImage === 'pic4') {
            document.querySelector('.modal__pic').style.backgroundImage = 'url(./img/products/book4_front.png)';
        }  else if (currentShownImage === 'pic5') {
            document.querySelector('.modal__pic').style.backgroundImage = 'url(./img/products/book5_front.png)';
        }  else if (currentShownImage === 'pic6') {
            document.querySelector('.modal__pic').style.backgroundImage = 'url(./img/products/book6_front.png)';
        }

        modalBookState = 'front';
    }
}


let book1HTML = `<div class="product__pic pic1"></div>
<h2 class="product__title">Introduction to The Design and Analysis of Algorithms</h2>
<p class="product__author">av Anany Levitin</p>
<p class="product__price">149 SEK</p>
<a href="./book1.html" class="product__linkbtn">Läs mer om boken</a>
<button class="product__basketbtn" id="book1">Lägg till i kassan</button>`;
let book2HTML = `<div class="product__pic pic2"></div>
<h2 class="product__title">Introducing Data Structures with Java</h2>
<p class="product__author">av David Cousins</p>
<p class="product__price">159 SEK</p>
<a href="./book2.html" class="product__linkbtn">Läs mer om boken</a>
<button class="product__basketbtn" id="book2">Lägg till i kassan</button>`;
let book3HTML = `<div class="product__pic pic3"></div>
<h2 class="product__title">An Introduction to Object-Oriented Programming...</h2>
<p class="product__author">av C. Thomas Wu</p>
<p class="product__price">169 SEK</p>
<a href="./book3.html" class="product__linkbtn">Läs mer om boken</a>
<button class="product__basketbtn" id="book3">Lägg till i kassan</button>`;
let book4HTML = `<div class="product__pic pic4"></div>
<h2 class="product__title">The C Programming Language - Second Edition</h2>
<p class="product__author">av B. W. Kernighan och D. Ritchie</p>
<p class="product__price">179 SEK</p>
<a href="./book4.html" class="product__linkbtn">Läs mer om boken</a>
<button class="product__basketbtn" id="book4">Lägg till i kassan</button>`;
let book5HTML = `<div class="product__pic pic5"></div>
<h2 class="product__title">Concepts of Programming Languages</h2>
<p class="product__author">av Robert W. Sebesta</p>
<p class="product__price">179 SEK</p>
<a href="./book5.html" class="product__linkbtn">Läs mer om boken</a>
<button class="product__basketbtn" id="book5">Lägg till i kassan</button>`;
let book6HTML = `<div class="product__pic pic6"></div>
<h2 class="product__title">Python Programming - An Introduction to Computer Science</h2>
<p class="product__author">av John Zelle</p>
<p class="product__price">179 SEK</p>
<a href="./book6.html" class="product__linkbtn">Läs mer om boken</a>
<button class="product__basketbtn" id="book6">Lägg till i kassan</button>`;

function switchSlideBook(e) {
    if (e.target.classList.contains('rarr')) {
        if (currentSlideBook === 1) {
            document.querySelector('.prodplace1').innerHTML = book2HTML;
            document.querySelector('.prodplace2').innerHTML = book3HTML;
            document.querySelector('.prodplace3').innerHTML = book4HTML;
            document.querySelector('.prodplace4').innerHTML = book5HTML;
            currentSlideBook = 2;
        } else if (currentSlideBook === 2) {
            document.querySelector('.prodplace1').innerHTML = book3HTML;
            document.querySelector('.prodplace2').innerHTML = book4HTML;
            document.querySelector('.prodplace3').innerHTML = book5HTML;
            document.querySelector('.prodplace4').innerHTML = book6HTML;
            currentSlideBook = 3;
        } else if (currentSlideBook === 3) {
            document.querySelector('.prodplace1').innerHTML = book4HTML;
            document.querySelector('.prodplace2').innerHTML = book5HTML;
            document.querySelector('.prodplace3').innerHTML = book6HTML;
            document.querySelector('.prodplace4').innerHTML = book1HTML;
            currentSlideBook = 4;
        } else if (currentSlideBook === 4) {
            document.querySelector('.prodplace1').innerHTML = book5HTML;
            document.querySelector('.prodplace2').innerHTML = book6HTML;
            document.querySelector('.prodplace3').innerHTML = book1HTML;
            document.querySelector('.prodplace4').innerHTML = book2HTML;
            currentSlideBook = 5;
        } else if (currentSlideBook === 5) {
            document.querySelector('.prodplace1').innerHTML = book6HTML;
            document.querySelector('.prodplace2').innerHTML = book1HTML;
            document.querySelector('.prodplace3').innerHTML = book2HTML;
            document.querySelector('.prodplace4').innerHTML = book3HTML;
            currentSlideBook = 6;
        } else if (currentSlideBook === 6) {
            document.querySelector('.prodplace1').innerHTML = book1HTML;
            document.querySelector('.prodplace2').innerHTML = book2HTML;
            document.querySelector('.prodplace3').innerHTML = book3HTML;
            document.querySelector('.prodplace4').innerHTML = book4HTML;
            currentSlideBook = 1;
        }
    } else if (e.target.classList.contains('larr')) {
        if (currentSlideBook === 1) {
            document.querySelector('.prodplace1').innerHTML = book6HTML;
            document.querySelector('.prodplace2').innerHTML = book1HTML;
            document.querySelector('.prodplace3').innerHTML = book2HTML;
            document.querySelector('.prodplace4').innerHTML = book3HTML;
            currentSlideBook = 6;
        } else if (currentSlideBook === 6) {
            document.querySelector('.prodplace1').innerHTML = book5HTML;
            document.querySelector('.prodplace2').innerHTML = book6HTML;
            document.querySelector('.prodplace3').innerHTML = book1HTML;
            document.querySelector('.prodplace4').innerHTML = book2HTML;
            currentSlideBook = 5;
        } else if (currentSlideBook === 5) {
            document.querySelector('.prodplace1').innerHTML = book4HTML;
            document.querySelector('.prodplace2').innerHTML = book5HTML;
            document.querySelector('.prodplace3').innerHTML = book6HTML;
            document.querySelector('.prodplace4').innerHTML = book1HTML;
            currentSlideBook = 4;
        } else if (currentSlideBook === 4) {
            document.querySelector('.prodplace1').innerHTML = book3HTML;
            document.querySelector('.prodplace2').innerHTML = book4HTML;
            document.querySelector('.prodplace3').innerHTML = book5HTML;
            document.querySelector('.prodplace4').innerHTML = book6HTML;
            currentSlideBook = 3;
        } else if (currentSlideBook === 3) {
            document.querySelector('.prodplace1').innerHTML = book2HTML;
            document.querySelector('.prodplace2').innerHTML = book3HTML;
            document.querySelector('.prodplace3').innerHTML = book4HTML;
            document.querySelector('.prodplace4').innerHTML = book5HTML;
            currentSlideBook = 2;
        } else if (currentSlideBook === 2) {
            document.querySelector('.prodplace1').innerHTML = book1HTML;
            document.querySelector('.prodplace2').innerHTML = book2HTML;
            document.querySelector('.prodplace3').innerHTML = book3HTML;
            document.querySelector('.prodplace4').innerHTML = book4HTML;
            currentSlideBook = 1;
        }
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
    }  else if (count === 3) {
        document.querySelector('.switch1').classList.add('active');
        document.querySelector('.switch3').classList.remove('active');
    }


    if (count < items) {
        wrapper.style.left = '-' + count * containerWidth + 'px';
        console.log(`Count before incrementing: ${count}`);
        count++;
        console.log(`Count after incrementing: ${count}`);
    } else if (count === items) {
        console.log('Back to step one');
        wrapper.style.left = '0px';
        count = 1;
    }

    //setInterval(nextSlide, 4000);
}

prev.addEventListener('click', prevSlide);

function prevSlide() {
    if (count === 1) {
        document.querySelector('.switch3').classList.add('active');
        document.querySelector('.switch1').classList.remove('active');
    } else if (count === 2) {
        document.querySelector('.switch1').classList.add('active');
        document.querySelector('.switch2').classList.remove('active');
    }  else if (count === 3) {
        document.querySelector('.switch2').classList.add('active');
        document.querySelector('.switch3').classList.remove('active');
    }


    if (count > 1) {
        /**
         * The ORDER: [R-0px][B-780px][G-1560px]
         * First step: count is 1. We are on R, we want to get to B (two steps to the left).
         * If count is 1, then we set it to 2 (3-1).
         * After that, we calculate out -1560px to the left (i.e we get the green.)
         * Finally we increment COUNT to 3.
         * 
         * Second Step: Count is on 3 (we are on G, we want to go B). So, we need count to be 1.
         * Thats why we make it 1 (3 = 3 - 2)
         * Then we calculate the B: (1 * 780px)
         * Finally, we increment count by 1. So now count is 2.
         * 
         * Third Step: Count is 2. We are on B, we want to get to R (i.e. be zero).
         * So, if count is 2, we set it to 0 (2 = 2 - 2).
         * Now we calculate the R: (0 * 780px).
         * Finally we increment it to 1.
         * 
         * Fourth Step: Count is 1. We are on R, we want to get to B.
         * We repeat the first step.
         */
        count = count - 2;
        wrapper.style.left = '-' + count * containerWidth + 'px';
        count++;
        console.log(count);
    } else if (count === 1) {
        count = items - 1;
        console.log(count);
        wrapper.style.left = '-' + count * containerWidth + 'px';
        count++;
    }
}
}



// The basket
let storage = JSON.parse(localStorage.getItem('basket')) || [];
console.log(storage);

window.addEventListener('DOMContentLoaded', loadBasket);

let sum = 0;
let moms = 10;

function loadBasket() {

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
                        <p class="basket__left-book--details---skick"><span>Skick:</span> Väldigt bra</p>
                        <p class="basket__left-book--details---format"><span>Format:</span> Hardback</p>
                        <p class="basket__left-book--details---sidor"><span>Antal sidor:</span> ${item.pages}</p>
                        <p class="basket__left-book--details---vikt"><span>Vikt:</span> ${item.weight} gram</p>
                        <p class="basket__left-book--details---datum"><span>Publiceringsdatum:</span> 2018-10-16</p>
                        <p class="basket__left-book--details---desc"><span>Kort beskrivning:</span> En fantastisk, underhållande bok som har sålts i stora antal världen runt om... <a href="./book${item.id}.html"><span class="readmore">Läs mer</span></a></p>
                        <p class="delete_from_basket" data-id="${item.id}">&times; Ta bort</p>
                    </div>
                </div>
            </div>
                `;
    
                document.querySelector('.minibasket__books').insertAdjacentHTML('beforeend', loadedMiniBook);
    
                if (document.querySelector('.basket__left')) {
                    document.querySelector('.basket__left').insertAdjacentHTML('beforeend', loadedBigBook);
                }
        });

        document.querySelector('.basket_icon').dataset.items = storage.length;

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

if (document.querySelector('.products__collection')) {
    document.querySelector('.products__collection').addEventListener('click', addItemToBasket);
} else if (document.querySelector('.singleprod')) {
    document.querySelector('.singleprod').addEventListener('click', addItemToBasket);
}

// if (document.querySelector('.add_to_basket')) {
//     document.querySelector('.add_to_basket').addEventListener('click', addItemToBasket);
// }

if (document.querySelector('.results')) {
    document.querySelector('.results').addEventListener('click', addItemToBasket);

}

document.querySelector('.minibasket').addEventListener('click', removeItemFromBasket);

if (document.querySelector('.basket')) {
    document.querySelector('.basket').addEventListener('click', removeItemFromBasket);
}


function addItemToBasket(e) {
    console.log('adding');
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

    function pushBook(bookID) {
        if (e.target.id === bookID || e.target.dataset.id === bookID) {
            // console.log(`Dataset ID is: ${e.target.dataset.id} and book ID is ${bookID}`);

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

            document.querySelector('.alert_bar').classList.add('display_alert');
            document.querySelector('.alert_bar').classList.remove('danger_alert');
            document.querySelector('.alert_bar').classList.add('success_alert');
            document.querySelector('.alert_bar').innerHTML = `Boken <span>"${books[bookID].title}"</span> har lagts till din varukorg!`;
            
            setTimeout(function() {
                document.querySelector('.alert_bar').classList.remove('display_alert');
            }, 5000);
        }
    }

    updateSum();

    document.querySelector('.basket_icon').dataset.items = storage.length;

    function showAlert() {
    }

}



function removeItemFromBasket(e) {
    if (e.target.matches('.delete_from_basket')) {
        console.log(e.target.dataset.id);
        storage.forEach((item, index) => {
            if (e.target.dataset.id == item.id) {
                console.log(storage);
                storage.splice(index, 1);
            }
            console.log(storage);
            localStorage.setItem('basket', JSON.stringify(storage));
        })
        document.querySelector('.basket__left').innerHTML = `<div class="basket__left-topbar">
        <h3 class="basket__left-topbar--proddesc">Produktbeskrivning</h3>
        <h3 class="basket__left-topbar--quantity">Antal</h3>
        <h3 class="basket__left-topbar--total">Totalt</h3>
    </div>`;
    document.querySelector('.minibasket__books').innerHTML = '';
        loadBasket();
        updateSum();
    } else if (e.target.matches('.book__remove')) {
        console.log(e.target.dataset.id);
        storage.forEach((item, index) => {
            if (e.target.dataset.id == item.id) {
                console.log(storage);
                storage.splice(index, 1);
            }
            console.log(storage);
            localStorage.setItem('basket', JSON.stringify(storage));
            console.log(books);

            document.querySelector('.alert_bar').classList.add('display_alert');
            document.querySelector('.alert_bar').classList.remove('success_alert');
            document.querySelector('.alert_bar').classList.add('danger_alert');
            document.querySelector('.alert_bar').innerHTML = `Boken <span>"${books['book' + e.target.dataset.id].title}"</span> har tagits bort från din varukorg!`;
            
            setTimeout(function() {
                document.querySelector('.alert_bar').classList.remove('display_alert');
            }, 5000);
        });

        if (document.querySelector('.basket__left')) {
            document.querySelector('.basket__left').innerHTML = `<div class="basket__left-topbar">
            <h3 class="basket__left-topbar--proddesc">Produktbeskrivning</h3>
            <h3 class="basket__left-topbar--quantity">Antal</h3>
            <h3 class="basket__left-topbar--total">Totalt</h3>
        </div>`;
        }

    document.querySelector('.minibasket__books').innerHTML = '';
        loadBasket();
        updateSum();

        document.querySelector('.basket_icon').dataset.items = storage.length;

    }
}


document.querySelector('.hero__menu-top--search').addEventListener('keyup', lookSearchResults);

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

function lookSearchResults() {
    console.log(this.value);
    let booktitles = Object.values(books).map(elem => elem.title.toLowerCase());

    document.querySelector('.search__suggest').innerHTML = '';

    let storedResults = [];

    booktitles.forEach(title => {

        if (title.includes(this.value)) {
            Object.values(books).forEach(book => {
                if (title === book.title.toLowerCase()) {
                    // console.log(book);

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
                    /* Perfect! Now we get the actual book objects, everything that match what is in the input. now we just have to show that to the user and highlight what is equivalent with bold text */

                    if (this.value !== '') {
                        storedResults.push(book);
                    } else {
                        storedResults = [];
                    }
                }
            });
            // save keyword and results in LS
            localStorage.setItem('storedResults', JSON.stringify(storedResults));
            console.log(storedResults);
            console.log('searchquery is ' + JSON.parse(localStorage.getItem('searchquery')));
            
            // show them in a new result page which will be results.html. grab them from Local Storage there and display them
        }

        localStorage.setItem('searchquery', JSON.stringify(this.value));
    
    });

    // In case field is empty
    if (this.value === '') {
        document.querySelector('.search__suggest').innerHTML = '';
        storedResults = [];
    }
}

function clickSingleResult(e) {
    // console.log(e.target);

    if (e.target.matches('.search__suggest, .search__suggest *')) {
        window.location.href = `http://${window.location.hostname}:${window.location.port}/book${e.target.dataset.id}.html`; // utvecklingsläge
        // window.location.href = `http://studenter.miun.se/~yage1800/dt163g/webbshop/book${e.target.dataset.id}.html`; // produktionsläge
    }
}

function showResultsPage(e) {

    if (e.keyCode == 13 || e.type === 'click') {
        window.location.href = `http://${window.location.hostname}:${window.location.port}/results.html` || ''; // utvecklingsläge
        // window.location.href = `http://studenter.miun.se/~yage1800/dt163g/webbshop/book${e.target.dataset.id}.html`; // produktionsläge
    }
}

function loadSearchResults() {
    if (document.querySelector('.results')) {
        console.log('inside results');
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
                    <p class="results__area-book--details---skick"><span>Skick:</span> Väldigt bra</p>
                    <p class="results__area-book--details---format"><span>Format:</span> Hardback</p>
                    <p class="results__area-book--details---sidor"><span>Antal sidor:</span> ${result.pages}</p>
                    <p class="results__area-book--details---vikt"><span>Vikt:</span> ${result.weight} gram</p>
                    <p class="results__area-book--details---datum"><span>Publiceringsdatum:</span> 2018-10-16</p>
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

function directUserBack() {
    window.history.back();
}