let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let buttonInnerText = this.innerText;
        makeSound(buttonInnerText);
        buttonAnimation(buttonInnerText);
    });
}

document.addEventListener("keydown", function (event) {
    console.log(event)
    makeSound(event.keyCode);
    buttonAnimation(event.keyCode);
});

function makeSound(keyCode) {
    switch (keyCode) {
        case 81:
            let q = new Audio("sounds/hithat/openhihat1.wav");
            q.play();
            break;
        case 87:
            let w = new Audio("sounds/hithat/hihat2.wav");
            w.play();
            break;
        case 69:
            let e = new Audio("sounds/hithat/hihat3.wav");
            e.play();
            break;
        case 82:
            let r = new Audio("sounds/hithat/hihat4.wav");
            r.play();
            break;
        case 84:
            let t = new Audio("sounds/hithat/hihat16.wav");
            t.play();
            break;
        case 89:
            let y = new Audio("sounds/hithat/openhihat2.wav");
            y.play();
            break;
        case 85:
            let u = new Audio("sounds/hithat/hihat7.wav");
            u.play();
            break;
        case 73:
            let i = new Audio("sounds/hithat/hihat8.wav");
            i.play();
            break;
        case 79:
            let o = new Audio("sounds/hithat/hihat20.wav");
            o.play();
            break;

            //     /* *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/

        case 65:
            let a = new Audio("sounds/kicks/kick1.wav");
            a.play();
            break;
        case 83:
            let s = new Audio("sounds/kicks/kick2.wav");
            s.play();
            break;
        case 68:
            let d = new Audio("sounds/kicks/kick3.wav");
            d.play();
            break;
        case 70:
            let f = new Audio("sounds/kicks/kick22.wav");
            f.play();
            break;
        case 71:
            let g = new Audio("sounds/kicks/kick17.wav");
            g.play();
            break;
        case 72:
            let h = new Audio("sounds/kicks/kick6.wav");
            h.play();
            break;
        case 74:
            let j = new Audio("sounds/kicks/kick7.wav");
            j.play();
            break;
        case 75:
            let k = new Audio("sounds/kicks/kick8.wav");
            k.play();
            break;
        case 76:
            let l = new Audio("sounds/kicks/kick9.wav");
            l.play();
            break;

            /* *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/

        case 90:
            let z = new Audio("sounds/snares/snare1.wav");
            z.play();
            break;
        case 88:
            let x = new Audio("sounds/snares/snare2.wav");
            x.play();
            break;
        case 67:
            let c = new Audio("sounds/snares/snare3.wav");
            c.play();
            break;
        case 86:
            let v = new Audio("sounds/snares/snare4.wav");
            v.play();
            break;
        case 66:
            let b = new Audio("sounds/snares/snare5.wav");
            b.play();
            break;
        case 78:
            let n = new Audio("sounds/snares/snare6.wav");
            n.play();
            break;
        case 77:
            let m = new Audio("sounds/snares/snare7.wav");
            m.play();
            break;
        case 188:
            let coma = new Audio("sounds/snares/snare9.wav");
            coma.play();
            break;
        case 190:
            let punto = new Audio("sounds/snares/snare10.wav");
            punto.play();
            break;

            /* *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/

        case 49:
            let uno = new Audio("sounds/hats/hat 1.wav");
            uno.play();
            break;
        case 50:
            let dos = new Audio("sounds/hats/hat 2.wav");
            dos.play();
            break;
        case 51:
            let tres = new Audio("sounds/hats/hat 3.wav");
            tres.play();
            break;
        case 52:
            let cuatro = new Audio("sounds/hats/hat 4.wav");
            cuatro.play();
            break;
        case 53:
            let cinco = new Audio("sounds/hats/hat 05.wav");
            cinco.play();
            break;
        case 54:
            let seis = new Audio("sounds/hats/hat 06.wav");
            seis.play();
            break;
        case 55:
            let siete = new Audio("sounds/hats/hat 07.wav");
            siete.play();
            break;
        case 56:
            let ocho = new Audio("sounds/hats/hat 08.wav");
            ocho.play();
            break;
        case 57:
            let nueve = new Audio("sounds/hats/hat 09.wav");
            nueve.play();
            break;

            /* *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/

        default:
            console.log(keyCode);
    }
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + 'x' + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}
