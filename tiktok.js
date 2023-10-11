const coins=[
  {
    number: '70',
    price: '1.08'
  },
  {
    number: '350',
    price: '5.48'
  },
  {
    number: '700',
    price: '9.52'
  },
  {
    number: '1400',
    price: '21.22'
  },
  {
    number: '3500',
    price: '53.42'
  },
  {
    number: '7000',
    price: '109.78'
  },
  {
    number: '17500',
    price: '241.55'
  }
]

const coinTable=document.querySelector('.coin-table')

let coinHTML=''
coins.forEach((coin)=>{
  coinHTML +=
  `<div class="coin-box" onclick="displayCoin(${coin.number},${coin.price})">
  <div class="coin-number-display">
  <img class="tt-coin" src="Coin.png" alt="">
    <span class="coin-amount-display">${coin.number}</span>
  </div>
  <center><span class="coin-price">$${coin.price}</span></center>
</div>`;
})
coinHTML= coinHTML+
`<div class="coin-box" style="padding: 0;" onclick="customCoin()">
<div class="coin-number-display" style="margin-top: 16px;">
  <img class="tt-coin" src="Coin.png" alt="">
  <span class="coin-amount-display">Custom</span>
  </div>
  <center><span class="coin-price">Large amount supported</span></center>
</div>`

coinTable.innerHTML = coinHTML;

const lastAmount = document.querySelector('.total-amount-last')

const coinBoxs=document.querySelectorAll('.coin-box');

const popup=document.querySelector('.popup')

const loading = document.querySelector('.loading')

const main=document.querySelector('main')

const recharge=document.querySelector('.recharge')

let lastPopupNumber=document.querySelector('.last-popup-number')

let rechargeCoinAmount=document.querySelector('.recharge-coin-amount')


let rechargeCoinPrice=document.querySelector('.recharge-coin-price')

let totalOrder=document.querySelector('.total-in-order')

function displayCoin(coin, price){
  
  setTimeout(()=>{
    lastAmount.innerHTML ='$' + price
    recharge.style.background='red'
    recharge.style.color='white'

    rechargeCoinAmount.innerHTML = coin + ' Coins'
    rechargeCoinPrice.innerHTML = '$' + price
    totalOrder.innerHTML = '$' + price
    lastPopupNumber.innerHTML=coin
  },1000)
}

function loadingSetup(){
  loading.style.display='block'
  setInterval(()=>{
    loading.style.display='none'
  },2950)
}

function customCoin(){
  loading.style.display='block'
  main.style.opacity=0.4
  
  loadingSetup()
  
  setTimeout(()=>{
    popup.classList.add('popup-appear')
    
      if(popup.style.display='block'){
        main.classList.add('blur-background')
      }
      else{
        main.classList.remove('blur-background')
      }
  },3000)
} 
const inputEle=document.querySelector('.coin-input')
const customTotal=document.querySelector('.total-of-custom')

const secondPopup=document.querySelector('.second-popup')

function popuphide(){
  popup.style.display = 'none'
  main.style.opacity=1
  inputEle.value=''
  customTotal.innerHTML=''
}
function popuphide2(){
  main.style.opacity=1
  secondPopup.style.display = 'none'
  main.classList.remove('blur-background')
}

// number table
const del='<i class="fa-solid fa-delete-left" style="color: #000000;"></i>'
const inputKeys=['1','2','3', del,'4','5','6','000','7','8','9','0']

const numberTable=document.querySelector('.number-table')

let html = ''
inputKeys.forEach((key)=>{
  if(key==del){
    html=`<div class="num" onclick="displayNumber(del)">${key}</div>`
  }
  else{
    html=`<div class="num" onclick="displayNumber(${key})">${key}</div>`
  }
  numberTable.innerHTML+=html
})


function displayNumber(key){
  if(key!=del){
    if(key=='000'){
      inputEle.value+='000'
    }
    else{
      inputEle.value+=key
    }
  }
  else{
    inputEle.value=inputEle.value.slice(0,-1)
  }
  calculateTotal()
}

function calculateTotal(){

  const result = (inputEle.value / (7000 / 108)).toFixed(2);

  const formattedResult = '$' + parseFloat(result).toLocaleString();

  customTotal.innerHTML = formattedResult;

  rechargeCoinAmount.innerHTML=inputEle.value +' Coins'

  rechargeCoinPrice.innerHTML= formattedResult

  totalOrder.innerHTML = formattedResult

  lastPopupNumber.innerHTML = inputEle.value
}

const popupRecharge=document.querySelector('.popup-recharge')

const username = document.querySelector('.username')

recharge.addEventListener('click',()=>{
  if(lastAmount.innerHTML!=''){
    main.classList.add('blur-background')
    RechargeCoin()
  }
  else{
    alert('Select Any option!')
  }
})

popupRecharge.addEventListener('click',()=>{
  loadingSetup()
  if(inputEle.value!=''){
    RechargeCoin()
    main.classList.add('blur-background')
  }
  else{
    alert('Enter certain amount!')
  }
})

function RechargeCoin(){
  loading.style.display='block'
  main.style.opacity=1
    setTimeout(()=>{
      main.style.opacity=0.4
      loading.style.display='none'
      popup.style.display='none'
      secondPopup.style.display='block'
    },1000)
}

const payNow = document.querySelector('.pay-now')

const processingPopup = document.querySelector('.processing-popup')

const finalPopup = document.querySelector('.final-popup')

payNow.addEventListener('click',()=>{
  secondPopup.style.display='none'
  processingPopup.style.display='block'

  setTimeout(()=>{
    processingPopup.style.display='none'
    finalPopup.style.display='block'
  },3000)
})

const getBack = document.querySelector('.get-back')

getBack.addEventListener('click',()=>{
  finalPopup.style.display='none';
  main.style.opacity=1
})

const feedbacks = document.querySelectorAll('.fa-circle-question')

feedbacks.forEach((feedback)=>{
  feedback.addEventListener('click',()=>{
    window.location.href='https://www.tiktok.com/login?lang=en&redirect_url=https%3A%2F%2Fwww.tiktok.com%2Ffeedback%3Flang%3Den'
  })
})