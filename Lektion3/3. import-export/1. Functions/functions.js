export const fixName = (name) => {
    return name.trim()
    .charAt(0)
    .toUpperCase() + name.slice(1)
    .toLowerCase();
}

export const validate = (user, cb) => {
    user.firstName.trim() !== ''
    ? cb(user)
    : console.log('All users must have a name');
}

export const sendMessage = (text, cb) =>{
    console.log('sending message');
    setTimeout(()=>{
        let res = addText(text);
        cb(res);
    }, 2000)
}

function addText(text){
    return text += ' From private func'
}