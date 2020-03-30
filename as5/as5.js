const change_work_name = () => {
    const select = document.getElementById('select');
    const work_name = document.getElementById('workname');
    if(select.value === 'Student' || select.value === 'Faculty Member'){
        work_name.innerHTML = 'School/College Name';
    }
    else{
        work_name.innerHTML = 'Company/Firm Name';
    }

}
