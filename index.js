function getFirstSelector(selector){
    return document.querySelector(selector)
}

function nestedTarget(){
    return document.querySelector('#nested .target')
}

function deepestChild(){
    let variable1 = document.getElementById('grand-node')
    return variable1.querySelectorAll('div')[3]
    
}

function increaseRankBy(n){
    const lis = document.querySelectorAll('.ranked-list li')
      for(let i = 0; i < lis.length; i++) {
          let inner = parseInt(lis[i].innerHTML)
          inner += n
          lis[i].innerHTML = inner
      }
}