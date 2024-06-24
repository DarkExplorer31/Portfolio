const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const returnBtn = document.getElementById('return');

/* Add listener for buttons */
if (nextBtn) {
    nextBtn.addEventListener("click", goNextModal);
} else {
    console.log("nextBtn n'existe pas ici.");
}

if (prevBtn) {
    prevBtn.addEventListener("click", goPrevModal);
} else {
    console.log("prevBtn n'existe pas ici.");
}

if (returnBtn) {
    returnBtn.addEventListener("click", goIndex);
} else {
    console.log("returnBtn n'existe pas ici.");
}

function goIndex() {
    window.location.href = "/";
}

/* Define modals */
const mainModal1 = document.getElementById('presentation');
const mainModal2 = document.getElementById('technical-skills');
const mainModal3 = document.getElementById('projects');
const mainModal4 = document.getElementById('contact-me');
const subModalInit = document.getElementById('init');
const subModalLast = document.getElementById('last');
const subModal1 = document.getElementById('python');
const subModal2 = document.getElementById('web');
const subModal3 = document.getElementById('other');
const subModal4 = document.getElementById('readen-project');
const subModal5 = document.getElementById('oc-Lettings');
const subModal6 = document.getElementById('softdesk');
const subModal7 = document.getElementById('litrevu');
const subModal8 = document.getElementById('search-best-combinaison');
const subModal9 = document.getElementById('lock-with-badge');
const subModal10 = document.getElementById('ocrv1');
const head1 = document.querySelector('.head1');
const head2 = document.querySelector('.head2');
const head3 = document.querySelector('.head3');
const head4 = document.querySelector('.head4');

let currentModal = 0;

function isHomePage() {
    return window.location.pathname === "/";
}

if (isHomePage()) {
    if (currentModal === 0) {
        mainModal1.style.display = "block";
        subModalInit.classList.add("open");
        head1.style.display = "block";
        buttonManagement();
    }
} else {
    console.log("Vous n'êtes pas sur la page d'accueil.");
}

function buttonManagement() {
    if (currentModal === 11) {
        nextBtn.style.display = "none";
        prevBtn.style.display = "block";
    } else if (currentModal === 0) {
        prevBtn.style.display = "none";
        nextBtn.style.display = "block";
    } else {
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
    }
}

function goNextModal() {
    if (currentModal < 11) {
        if (currentModal === 0) {
            mainModal1.style.display = "none";
            mainModal2.style.display = "block";
            subModalInit.classList.remove("open");
            subModal1.classList.add("open");
            head1.style.display = "none";
            head2.style.display = "block";
        } else if (currentModal === 1) {
            subModal1.classList.remove("open");
            subModal2.classList.add("open");
        } else if (currentModal === 2) {
            subModal2.classList.remove("open");
            subModal3.classList.add("open");
        } else if (currentModal === 3) {
            mainModal2.style.display = "none";
            mainModal3.style.display = "block";
            head2.style.display = "none";
            head3.style.display = "block";
            subModal3.classList.remove("open");
            subModal4.classList.add("open");
        } else if (currentModal === 4) {
            subModal4.classList.remove("open");
            subModal5.classList.add("open");
        } else if (currentModal === 5) {
            subModal5.classList.remove("open");
            subModal6.classList.add("open");
        } else if (currentModal === 6) {
            subModal6.classList.remove("open");
            subModal7.classList.add("open");
        } else if (currentModal === 7) {
            subModal7.classList.remove("open");
            subModal8.classList.add("open");
        } else if (currentModal === 8) {
            subModal8.classList.remove("open");
            subModal9.classList.add("open");
        } else if (currentModal === 9) {
            subModal9.classList.remove("open");
            subModal10.classList.add("open");
        } else if (currentModal === 10) {
            subModal10.classList.remove("open");
            subModalLast.classList.add("open");
            head3.style.display = "none";
            head4.style.display = "block";
            mainModal3.style.display = "none";
            mainModal4.style.display = "block";
        }
        currentModal++;
        buttonManagement();
    }
}

function goPrevModal() {
    if (currentModal > 0) {
        if (currentModal === 1) {
            mainModal1.style.display = "block";
            mainModal2.style.display = "none";
            head2.style.display = "none";
            head1.style.display = "block";
            subModal1.classList.remove("open");
            subModalInit.classList.add("open");
        } else if (currentModal === 2) {
            subModal1.classList.add("open");
            subModal2.classList.remove("open");
        } else if (currentModal === 3) {
            subModal2.classList.add("open");
            subModal3.classList.remove("open");
        } else if (currentModal === 4) {
            mainModal2.style.display = "block";
            mainModal3.style.display = "none";
            head3.style.display = "none";
            head2.style.display = "block";
            subModal3.classList.add("open");
            subModal4.classList.remove("open");
        } else if (currentModal === 5) {
            subModal4.classList.add("open");
            subModal5.classList.remove("open");
        } else if (currentModal === 6) {
            subModal5.classList.add("open");
            subModal6.classList.remove("open");
        } else if (currentModal === 7) {
            subModal6.classList.add("open");
            subModal7.classList.remove("open");
        } else if (currentModal === 8) {
            subModal7.classList.add("open");
            subModal8.classList.remove("open");
        } else if (currentModal === 9) {
            subModal8.classList.add("open");
            subModal9.classList.remove("open");
        } else if (currentModal === 10) {
            subModal9.classList.add("open");
            subModal10.classList.remove("open");
        } else if (currentModal === 11) {
            subModal10.classList.add("open");
            subModalLast.classList.remove("open");
            head4.style.display = "none";
            head3.style.display = "block";
            mainModal3.style.display = "block";
            mainModal4.style.display = "none";
        }
        currentModal--;
        buttonManagement();
    }
}

/* Menu const */
const menuBtn1 = document.getElementById('btn-1');
const menuBtn2 = document.getElementById('btn-2');
const menuBtn3 = document.getElementById('btn-3');
const menuBtn4 = document.getElementById('btn-4');
const menuBtn5 = document.getElementById('btn-5');
const menuBtn6 = document.getElementById('btn-6');
const menuBtn7 = document.getElementById('btn-7');
const menuBtn8 = document.getElementById('btn-8');
const menuBtn9 = document.getElementById('btn-9');
const menuBtn10 = document.getElementById('btn-10');
const menuBtn11 = document.getElementById('btn-11');
const menuBtn12 = document.getElementById('btn-12');
const menuBtn13 = document.getElementById('btn-13');
const menuBtn14 = document.getElementById('btn-14');

/* Add listener for buttons into menu */
if (menuBtn1) {
    menuBtn1.addEventListener("click", goModal1);
    menuBtn2.addEventListener("click", goModal2);
    menuBtn3.addEventListener("click", goModal3);
    menuBtn4.addEventListener("click", goModal4);
    menuBtn5.addEventListener("click", goModal5);
    menuBtn6.addEventListener("click", goModal6);
    menuBtn7.addEventListener("click", goModal7);
    menuBtn8.addEventListener("click", goModal8);
    menuBtn9.addEventListener("click", goModal9);
    menuBtn10.addEventListener("click", goModal10);
    menuBtn11.addEventListener("click", goModal11);
    menuBtn12.addEventListener("click", goModal12);
    menuBtn13.addEventListener("click", goModal13);
    menuBtn14.addEventListener("click", goModal14);
} else {
    console.log("le menu n'existe pas ici.");
}

/* Define Functions */
const mainModals = [
    mainModal1,
    mainModal2,
    mainModal3,
    mainModal4
];

const subModals = [
    subModalInit,
    subModal1,
    subModal2,
    subModal3,
    subModal4,
    subModal5,
    subModal6,
    subModal7,
    subModal8,
    subModal9,
    subModal10,
    subModalLast,
];

const heads = [
    head1, head2, head3, head4
];

function closeMainModalsExcept(modalToShow) {
    mainModals.forEach(modal => {
        if (modal !== modalToShow) {
            modal.style.display = "none";
        } else {
            modal.style.display = "block";
        }
    });
}

function closeSubModalsExcept(subModalToShow) {
    subModals.forEach(subModal => {
        if (subModal !== subModalToShow) {
            subModal.classList.remove("open");
        } else {
            subModal.classList.add("open");
        }
    });
}

function closeHeadsExcept(headToShow) {
    heads.forEach(head => {
        if (head !== headToShow) {
            head.style.display = "none";
        } else {
            head.style.display = "block";
        }
    });
}

function goModal1() {
    closeMainModalsExcept(mainModals[0]);
    closeSubModalsExcept(subModals[0]);
    closeHeadsExcept(heads[0]);
    currentModal = 0;
    buttonManagement();
}
function goModal2() {
    closeMainModalsExcept(mainModals[1]);
    closeSubModalsExcept(subModals[1]);
    closeHeadsExcept(heads[1]);
    currentModal = 1;
    buttonManagement();
}
function goModal3() {
    closeMainModalsExcept(mainModals[1]);
    closeSubModalsExcept(subModals[1]);
    closeHeadsExcept(heads[1]);
    currentModal = 1;
    buttonManagement();
}
function goModal4() {
    closeMainModalsExcept(mainModals[1]);
    closeSubModalsExcept(subModals[2]);
    closeHeadsExcept(heads[1]);
    currentModal = 2;
    buttonManagement();
}
function goModal5() {
    closeMainModalsExcept(mainModals[1]);
    closeSubModalsExcept(subModals[3]);
    closeHeadsExcept(heads[1]);
    currentModal = 3;
    buttonManagement();
}
function goModal6() {
    closeMainModalsExcept(mainModals[2]);
    closeSubModalsExcept(subModals[4]);
    closeHeadsExcept(heads[2]);
    currentModal = 4;
    buttonManagement();
}
function goModal7() {
    closeMainModalsExcept(mainModals[2]);
    closeSubModalsExcept(subModals[4]);
    closeHeadsExcept(heads[2]);
    currentModal = 4;
    buttonManagement();
}
function goModal8() {
    closeMainModalsExcept(mainModals[2]);
    closeSubModalsExcept(subModals[5]);
    closeHeadsExcept(heads[2]);
    currentModal = 5;
    buttonManagement();
}
function goModal9() {
    closeMainModalsExcept(mainModals[2]);
    closeSubModalsExcept(subModals[6]);
    closeHeadsExcept(heads[2]);
    currentModal = 6;
    buttonManagement();
}
function goModal10() {
    closeMainModalsExcept(mainModals[2]);
    closeSubModalsExcept(subModals[7]);
    closeHeadsExcept(heads[2]);
    currentModal = 7;
    buttonManagement();
}
function goModal11() {
    closeMainModalsExcept(mainModals[2]);
    closeSubModalsExcept(subModals[8]);
    closeHeadsExcept(heads[2]);
    currentModal = 8;
    buttonManagement();
}
function goModal12() {
    closeMainModalsExcept(mainModals[2]);
    closeSubModalsExcept(subModals[9]);
    closeHeadsExcept(heads[2]);
    currentModal = 9;
    buttonManagement();
}
function goModal13() {
    closeMainModalsExcept(mainModals[2]);
    closeSubModalsExcept(subModals[10]);
    closeHeadsExcept(heads[2]);
    currentModal = 10;
    buttonManagement();
}
function goModal14() {
    closeMainModalsExcept(mainModals[3]);
    closeSubModalsExcept(subModals[11]);
    closeHeadsExcept(heads[3]);
    currentModal = 11;
    buttonManagement();
}