var imageBox = document.querySelector(".image-box");
var qrImage = document.querySelector("#qrImage");
var input = document.querySelector("#input");
var downloadButton = document.querySelector("#download");

function generateQrCode(){
    if(input.value.length>0){
    qrImage.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
    input.value = "";
    }
    else{
        input.classList.add("eror");
        setTimeout(() => {
            input.classList.remove("eror");
        }, 1000);
    }
   
}

downloadButton.addEventListener("click",()=>{
    let imageBox = document.querySelector("qrImage");

    if(imageBox !== ""){
        let imgAttr = imageBox.getAttribute('src');
        downloadButton.setAttribute('href',imgAttr)
    }
    else{
        downloadButton.setAttribute('href',`${document.querySelector('canvas').toDataURL()}`);
    }
})
