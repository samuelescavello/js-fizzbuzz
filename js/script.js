const squareWrapper = document.createElement('div');

squareWrapper.className = 'flex-wrap d-flex  justify-content-between  align-content-center '
squareWrapper.setAttribute('id','boxes');

let numBox = 100;
let tmpHTml = '';
for (let i = 0; i < numBox; i++ ){
    tmpHTml += <div class="box">${i + 1}</div>;
}


squareWrapper.innerHTML = tmpHTml;
const container = document.querySelector('.container')
container.append (squareWrapper)