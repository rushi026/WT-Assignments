const nameval = () => {
    const regex = /^[a-zA-Z ]{1,}$/;
    const name = document.getElementById('name').value;
    if (!regex.test(name)){
        alert('Please enter proper name');
        console.log('name-true');
        return true;
    }
    else{
        console.log('name-false');
        return false;
    }
}

const emailval = () => {
    const regex = /^[0-9a-z._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    const email = document.getElementById('email').value;
    if (!regex.test(email)){
        alert('Please enter proper email');
        console.log('email-true');
        return true;
    }
    else{
        console.log('email-false');
        return false;
    }
}

const urlval = () => {
    const regex = /^[(https|http)][:]\/\/[^\s$.?#].[^\s]*$/;
    const url = document.getElementById('url').value;
    if (!regex.test(url)){
        alert('Please enter proper url');
        console.log('url-true');
        return true;
    }
    else{
        console.log('url-false');
        return false;
    }
}

const adval = () => {
    const regex = /^[a-zA-Z]{1,}$/;
    const address = document.getElementById('address').value;
    if (!regex.test(address)){
        alert('Please enter proper address');
        console.log('ad-true');
        return true;
    }
    else{
        console.log('ad-false');
        return false;
    }
}

const telval = () => {
    const regex = /^[0-9]{10}$/;
    const telephone = document.getElementById('telephone').value;
    if (!regex.test(telephone)){
        alert('Please enter proper telephone');
        console.log('tel-true');
        return true;
    }
    else{
        console.log('tel-false');
        return false;
    }
}

const submitval = () => {
    nameval();
    emailval();
    urlval();
    adval();
    telval();
}