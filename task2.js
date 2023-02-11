const numberPhone = prompt('Введите номер телефона');

function getFormattedPhone(phone) {
    var formattedPhone;

    if(phone.length == 12 && phone.charAt(0) == "+") {

        for(let i = 0; i < phone.length; i++) {
            if(i == 2) {
                formattedPhone = formattedPhone + " (" + phone.charAt(i);
            } else if (i == 4) {
                formattedPhone = formattedPhone + phone.charAt(i) + ") ";
            } else if (i == 7) {
                formattedPhone = formattedPhone + phone.charAt(i) + "-";
            } else if (i == 9) {
                formattedPhone = formattedPhone + phone.charAt(i) + "-";
            } else {
                formattedPhone += phone.charAt(i);
            }
        }

        alert(formattedPhone);

    } else {
        alert('Введите номер из 12 символов, первый символ +');
    }
}

getFormattedPhone(numberPhone);