//                 ▀██                           ▄    ▄▀█▄ 
//   ▄▄▄▄    ▄▄▄▄   ██ ▄▄     ▄▄▄        ▄▄▄▄  ▄██▄  ▄██▄   
// ▄█▄▄▄██ ▄█   ▀▀  ██▀ ██  ▄█  ▀█▄    ▄█   ▀▀  ██    ██    
// ██      ██       ██  ██  ██   ██    ██       ██    ██    
//  ▀█▄▄▄▀  ▀█▄▄▄▀ ▄██▄ ██▄  ▀█▄▄█▀     ▀█▄▄▄▀  ▀█▄▀ ▄██▄   
// if you see this smile for echoctf 😉 

const staff = [
    "Isa Ebrahim (0xRar)",
    "John Doe (jdoe)"
];

const vd = [
    "Hitman Alharbi(HitmanF15)",
    "Jenna Doe (jedoe)"
];

// loop through the staff array
let s = staff.length
for (let i=0; i < s; i++) {
    const sm = document.getElementById("staff-names");
    sm.innerText += staff[i] + "\n";
}

// loop through the vd array
let v = vd.length
for (let i=0; i < v; i++) {
    const vds = document.getElementById("vd-names");
    vds.innerText += vd[i] + "\n";
}
