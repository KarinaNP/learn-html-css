
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('manha')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
    //bondinha
    img.src = 'pexels-matthias-groeneveld-5933631.jpg'
    document.body.style.background = '#73A2BF'
  } else if (hora >= 12 && hora < 18){
    //boa taide
    img.src = 'pexels-samer-daboul-2672678.jpg'
    document.body.style.background = '#F28705'
  } else{
    //banoite
    img.src = 'pexels-roberto-nickson-2885320.jpg'
    document.body.style.background ='#122640'
  } 
}
