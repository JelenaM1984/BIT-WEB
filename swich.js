var a = 1;
switch (a) {
    case 1:
        result = 'ponedeljak'
        break;
    case 2:
        result = 'utorak'
        break;
    case 3:
        result = 'sreda'
        break;
    case 4:
        result = 'cetvrtak'
        break;
    case 5:
        result = 'petak'
        break;
    case 6:
        result = 'subota'
        break
    case 7:
        result = 'nedelja'
        break
        default:'input must be a number between 1 and 7'
}
console.log(result);