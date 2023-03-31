const carsModal = $.modal({
    title: 'Технические характеристики ',
    closable: true,
    width: '400px',
    
    footerButtons: [
        {
            text: 'Ok', type: 'primary', handler() {
                carsModal.close()
            }
        },
        
    ]
})

const cars = [
    { id: 1, title: 'Cadillac 2022', price: '140.000', tech:'Тип привода -Полный (4WD)<br>Тип кузова - SUV <br> Тип трансмиссии - АКПП 10 <br>Объем двигателя, куб.см - 6162 <br> Время разгона 0-100 км/ч, с - 6.6 <br> Максимальная скорость, км/ч	180', discount: '-5%', descr:'Непревзойденные технологии нового Cadillac Escalade откроют для Вас впечатляющие возможности и подарят невероятные ощущения от вождения.' ,img: 'https://thumbor-production-auction.hemmings.com/820x545/1254127/20221005-171520.jpg' },
    { id: 2, title: 'Cadillac 1950', price: '99.000', tech:'Тип привода - Передний<br>Тип кузова - 5/6 местное купе <br> Тип трансмиссии - МКПП 3 <br>Объем двигателя, куб.см - 5422  <br> Время разгона 0-100 км/ч, с - 15 <br> Максимальная скорость, км/ч	130' , discount: '-15%', descr:' Новые, рассечённые надвое хромированными молдингами передние крылья и задние крылья с декоративными воздухозаборниками, «жабрами», сделали облик автомобиля более стремительным.' ,img: 'https://bringatrailer.com/wp-content/uploads/2021/09/1950_cadillac_62_1950_cadillac_62_17544c85-0c04-4408-80af-38ee71a9e9cf-6QHnYy-scaled.jpg?fit=940%2C627' },
    { id: 3, title: 'Cadillac 1960', price: '84.499', tech:'Тип привода - Передний<br>Тип кузова - 4/5 местное купе <br> Тип трансмиссии - АКПП 4 <br>Объем двигателя, куб.см - 6382  <br> Время разгона 0-100 км/ч, с - 11 <br> Максимальная скорость, км/ч	145', discount: '-10%', descr:'Яркая отличительная особенность автомобиля - это громадные плавники. Шикарный, изысканный стиль подчеркивался массивными хромированными бамперами.' ,img: 'https://bringatrailer.com/wp-content/uploads/2022/10/1960_cadillac_62-convertible_1960-cadillac-conv-24003-bat-1-51694.jpg?fit=940%2C627' },
]

const toHtml = car => `
<div class="col">
<div class="card">
    <img src="${car.img}"
        class="card-img-top">
    <div class="card-body">
        <div class="flex">
            <h5 class="card-title">${car.title}</h5>
            <span class="favorites">&#x1f90d</span>
        </div>
        <p class="card-text">${car.descr}</p>
        <p class="card-text">${car.price}$</p>
        <a href="#" class="btn btn-primary" data-btn="technical" data-id="${car.id}">Технические характеристики </a>
        <a href="#" class="btn btn-danger" data-btn="buy">Купить ${car.discount} </a>
    </div>
</div>
</div>`

function render() {
    const html = cars.map(toHtml).join('')
    document.querySelector('#cars').innerHTML = html
}
render()

const favorites = document.querySelectorAll('.favorites');

favorites.forEach(favorite => {
  favorite.addEventListener('click', wish);
});

function wish(event) {
  const favorite = event.target;
  if (favorite.classList.contains('active')) {
    favorite.removeChild(favorite.lastChild);
    favorite.innerHTML = '&#x1f90d';
    favorite.classList.remove('active');
  } else {
    favorite.removeChild(favorite.firstChild);
    favorite.innerHTML = '&#x2764;';
    favorite.classList.add('active');
  }
}

document.addEventListener('click', event =>{
    event.preventDefault()
    const btnType = event.target.dataset.btn
    const id = +event.target.dataset.id
   
    if (btnType === 'technical'){
        const car = cars.find(f => f.id === id)

        carsModal.setContent(`
        <p><strong>${car.title}</strong></p>
        <p>${car.tech}</p>`
        
        )
        
        carsModal.open()
        
    }

  
})