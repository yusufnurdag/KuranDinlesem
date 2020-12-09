class UI{

    getList(url){

        const element = document.getElementById("result");
        const iframeCollection = document.getElementById("result").children;
        this.url = url;
        
        if(iframeCollection.length == 0 ){
           
            element.innerHTML += `
                <div class="container mob-cont">
                <div class="embed-responsive embed-responsive-16by9">
                <iframe id="iframe" class="border border-warning"  src="${url}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                </div>
                 `
                //  setTimeout(function(){ 
                //  const list = document.getElementById("iframe");
                //  var innerDoc = list.contentDocument || list.contentWindow.document;
                //  console.log(innerDoc);
                // }, 1500);
                 
        }
        else{
            element.childNodes[1].remove();
              
            element.innerHTML += `
                <div class="container mob-cont">
                <div class="embed-responsive embed-responsive-16by9">
                <iframe class="border border-warning"  src="${url}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                </div>
                 `
              
        }
    }


    mailControl(mailResult){
        const mailElement = document.getElementById("mailSituation");
        
        if(mailResult == "OK"){
            mailElement.innerHTML +=`
            <div id="mailAlert" class="alert alert-success" role="alert">
            Gönderiniz BAŞARIYLA gerçekleşti.
            </div>
            `
            
            setTimeout(function(){
                const mailAlert = document.getElementById("mailAlert");
                mailAlert.remove();
            },5000);
        }
        else{
            mailElement.innerHTML +=`
            <div id="mailAlert" class="alert alert-danger" role="alert">
            Lütfen Yıldızlı Alanları Eksiksiz Doldurunuz.
            </div>
            `
            setTimeout(function(){
            const mailAlert = document.getElementById("mailAlert");
            mailAlert.remove();
            },5000);
        }
    }

}