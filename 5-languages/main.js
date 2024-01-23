const lang = prompt('Выберете язык');

switch (lang) {
    case 'en':
        console.log('Hello!');
        break;
    case 'it':
        console.log('Ciao!');
        break;
    case 'es':
        console.log('¡Hola!')
        break;
    default:
        console.log('Язык неопознан')
}