function ShowProduct() {
    let productList = JSON.parse(localStorage.getItem('cards'))


    let x = "";
    productList.forEach(element => {
        console.log(element.price);
        x += `
        <div class="card mb-3">
        <div class="card-body">
            <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                    <div>
                        <img src="${element.image}">
                    </div>
                    <div class="ms-3">
                        <h5>${element.name}</h5>
                        <p class="small mb-0">${element.description}</p>
                    </div>
                </div>
                <div class="  align-items-center">
                    <div style="width: 50px;">
                        <h5 class="fw-normal mb-0"></h5>
                        <input id="${element.cardId}" type="number" value='${element.cardCount}' onchange="handleCountChange('${element.cardId}',this.value)">
                    </div>
                    <div style="width: 80px;">
                        <h5 class="mb-0">${element.price} </h5>
                    </div>
                    <div style="width: 80px;">
                    <h5 id="totalPrice" class="mb-0">${element.totalPrice} AZN</h5>
                </div>
                    <p class='dlt' data-id=${element.cardId}  >
                    <i  class="fas fa-trash-alt"></i></p>
                    
                </div>
            </div>
        </div>
    </div>
   `

    });

    document.querySelector('.card-itemssss').innerHTML = x


    DeleteItem();
}

ShowProduct()


function DeleteItem() {

    let productList = JSON.parse(localStorage.getItem('cards'))


    let deleteElement = document.querySelectorAll('.dlt')
    console.log(deleteElement);


    for (let dltElement of deleteElement) {
        dltElement.addEventListener('click', function () {
            let dataId = this.getAttribute('data-id');
            console.log(dataId);
            let existPr = productList.find(pr => pr.cardId === dataId);
            console.log(existPr);
            let index = productList.indexOf(existPr);
            productList.splice(index, 1)
            localStorage.setItem('cards', JSON.stringify(productList));



            if (existPr.cardCount >= 0) {
                this.parentElement.parentElement.parentElement.parentElement.remove();
                ShowCountProduct()
            }


           


        })
    }
   

}


function ShowCountProduct() {
    let product_list = JSON.parse(localStorage.getItem('cards'));
    document.querySelector('.say').innerHTML = product_list.length;
}

ShowCountProduct()

function handleCountChange(productId, newCount) {
    let productList = JSON.parse(localStorage.getItem('cards'));
    if (newCount >= 0) {
        productList.forEach(element => {
            if (element.cardId === productId) {
                element.cardCount = newCount;
                element.totalPrice = element.price.split(' ')[0]*newCount; 
            }
        });
        localStorage.setItem('cards', JSON.stringify(productList));
    }
    else {
        alert("Minimum deyer 0 ola biler")
    }
    DeleteItem();
    ShowProduct();

}
