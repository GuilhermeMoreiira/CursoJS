var valores = [3, 6, 8, 7, 1, 2, 4]
valores.sort()
/*
for(var pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem os valor ${valores[pos]}`)
}
*/
for(var pos in valores) {
    console.log(`A posição ${pos} tem os valores ${valores[pos]}`)
}