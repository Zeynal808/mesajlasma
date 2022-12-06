var ad=document.querySelector('#ad')
var sifre=document.querySelector("#sifre")
var giris=document.querySelector(`.giris`)
var msgBox=document.querySelector(`.message-box`)
var h2=document.querySelector(`h2`)
var send=document.querySelector('.send')
var textArea=document.querySelector('textarea')
var telebeler=[
    {
        ad:"ulviyye",
        sifre:'ulviyye123'
    },
    {
        ad:"leyla",
        sifre:"leyla123"
    },
    {
        ad:"efsane",
        sifre:'efsane123'
    },
    {
        ad:"pasha",
        sifre:'pasha123'
    },
    {
        ad:'vusal',
        sifre:'gullu123'
    },
]
const firebaseConfig = {
    apiKey: "AIzaSyC_5MizWj5f-iI_u1kE4gFANIP0p9EWaVc",
    authDomain: "asjdghasj.firebaseapp.com",
    databaseURL: "https://asjdghasj-default-rtdb.firebaseio.com",
    projectId: "asjdghasj",
    storageBucket: "asjdghasj.appspot.com",
    messagingSenderId: "497069010211",
    appId: "1:497069010211:web:530e504dccb124aaf2f096"
  };
  firebase.initializeApp(firebaseConfig) 
  var db=firebase.database().ref() 

  giris.onclick=function(){
    for(let i=0;i<telebeler.length;i++)
    {
        if(telebeler[i].ad==ad.value && telebeler[i].sifre==sifre.value)
        {
           $('.login').css({
            display:'none'
           })
           $('.message').css({display:'block'})
           h2.innerText=`Welcome our chat site ${ad.value}`

        }
    }
  }
  send.onclick=function(){
    var txt=textArea.value
      db.set({
        ad:ad.value,
        mesaj:txt
      })
}

db.on('value',function(snapshot){
    var x=snapshot.val()
    if(x==null||x==undefined){

    }
    else{
        var p=document.createElement('p')
        p.innerText=`${x.ad} : ${x.mesaj}`
        msgBox.append(p)
        textArea.value=''
    }
})