const form = document.getElementById("form");
const mailForm = document.getElementById("contactForm")
const sureSelect = document.getElementById("selectSure");
const sureIsRand = document.getElementById("sureIsRandomCheck");
const selectorCall = new Selector();
const ui = new UI();
const mail = new mailSender();

eventListeners();

function eventListeners(){

    form.addEventListener("submit", getInfo)
    mailForm.addEventListener("submit", getMessage)
    sureIsRand.addEventListener("click", getDisable)

}

// Sureler yapılınca bu fonksiyon kullanılacak eğer rastegele sure dinlenmek isteniyorsa sure seçimini kapatan fonksiyon
function getDisable(){
    const indexSureIsRand = sureIsRand.checked;
    const selectSure = sureSelect;
    if(indexSureIsRand == true){
        selectSure.setAttribute("disabled","true")
    }
    else{
        selectSure.removeAttribute("disabled");
    }
}

function getInfo(e){
    const indexselectSure = sureSelect.value;
    const indexSureIsRand = sureIsRand.checked;
    const indexsureKind = document.querySelector('input[name="inlineRadioOptions2"]:checked').value;
    const indexsureNation = document.querySelector('input[name="inlineRadioOptions1"]:checked').value;
    
    if(indexSureIsRand == true){
        const url = selectorCall.sureFinder(indexsureKind, indexsureNation, indexselectSure, indexSureIsRand);
        ui.getList(url);
    }
    else{
        const url = selectorCall.sureFinder(indexsureKind, indexsureNation, indexselectSure, indexSureIsRand);
        ui.getList(url);
    }
    e.preventDefault();
}

function getMessage(e){

    const mailName = document.getElementById("mailName").value;
    const mailEmail = document.getElementById("mailEmail").value;
    const mailPhone = document.getElementById("mailPhone").value;
    const mailMessage = document.getElementById("mailMessage").value;


   mail.sendEmail(mailName, mailEmail, mailPhone, mailMessage);

  



    e.preventDefault();
}

