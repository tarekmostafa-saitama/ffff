var context = document.querySelector('#myimg').getContext('2d');
var canvas = document.querySelector('#myimg');
var img = new Image();
img.src = `imgs/${getUrlParameter('img')}.jpeg`;
img.onload = () => {
    // document.querySelector('#myimg').width = img.width;
    // document.querySelector('#myimg').height = img.height;
    // var wrh = img.width / img.height;
    // var newWidth = 700;
    // var newHeight = newWidth / wrh;
    // if (newHeight > 800) {
    //     newHeight = 800;
    //     newWidth = newHeight * wrh;
    // }
    img.width = 700;
    img.height = 800;
    context.drawImage(img, 0, 0, 700, 800);
    context.stroke();

    context.font = 'bold 20pt Cairo';
    context.textAlign = 'center';

    let text = getUrlParameter('name');
    if(getUrlParameter('img') == '1'){
        context.fillStyle = 'black';
        context.fillText(text,  360, 420);
        context.fillStyle = '#802429';
        // context.fillText('محبكم',  575, 680);
    }else{
        context.fillStyle = 'black';
        context.fillText(text, 575, 725);
        context.fillStyle = '#802429';
        context.fillText('محبكم',  575, 680);
    }
    context.stroke();

    var canvas = document.querySelector('#myimg');
   
    var dataURL = canvas.toDataURL("image/jpeg", 1.0);

    downloadImage(dataURL, 'my-canvas.jpeg');
   
}

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};




function downloadImage(data, filename = 'untitled.jpeg') {
    document.querySelector("#downloadImg").setAttribute("href",data);
    document.querySelector("#downloadImg").setAttribute("download",filename);
    document.querySelector('#downloadImg').click();

  
}