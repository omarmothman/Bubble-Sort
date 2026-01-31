 var i;
var j;
var Array = [10,5,22,68,99,1,4,2];

for(i=0;i<Array.length;i++) {

    for (j=0; j<Array.length; j++) {

        if(Array[j]>Array[j+1]) {
            temp = Array[j+1];
            c = Array[j];
            Array[j+1] = c;
            Array[j] = temp;

        }
        else continue;
    }
}

console.log(Array);