export function DateToText(lastTime) {
  var DeltaTime = parseInt(new Date().valueOf() - new Date(lastTime).valueOf());
    var result ;

    if(DeltaTime/1000/60<1){
        result = 'چند ثاینه'
    }
    else if(DateToText/1000/60>1){
        result= ` ${Math.floor(DateToText/1000/60)} دقیقه ی پیش`
    }

    return result

}
