/* =========================
   ENTER BIRTHDAY SYSTEM
========================= */

function enterSystem() {

    const loader = document.querySelector(".loader");
    const music = document.getElementById("bg-music");

    /* NYALAIN MUSIK */

    if (music) {

        music.volume = 0.35;

        music.play();

    }

    /* HILANGKAN LOADING SCREEN */

    if (!loader) return;

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    }, 800);

}

/* =========================
   OPEN INVITATION
========================= */

function openInvitation() {

    const invitation = document.getElementById("invitation");
    const accessButton = document.getElementById("access-invitation-btn");

    if (!invitation) {
        console.error("Invitation section tidak ditemukan!");
        return;
    }

    /* Tampilkan invitation */
    invitation.classList.remove("hidden");

    /* Optional: sembunyikan tombol setelah dibuka */
    if (accessButton) {
        accessButton.style.display = "none";
    }

    /* Scroll ke invitation */
    setTimeout(() => {

        invitation.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 100);
}


/* =========================
   ACCEPT INVITATION
========================= */

function acceptInvitation() {

    const eventDetails = document.getElementById("event-details");
    const acceptMessage = document.getElementById("accept-message");
    const acceptButton = document.querySelector(".accept-btn");
    const guestDatabase = document.querySelector(".guest-database");
    console.log("ACCEPT INVITATION CLICKED");


    /* =========================
       SHOW ACCEPT MESSAGE
    ========================== */

    if (acceptMessage) {

        acceptMessage.textContent =
            "✓ INVITATION ACCEPTED. EVENT DETAILS UNLOCKED.";

        acceptMessage.style.display = "block";

    }


    /* =========================
       SHOW EVENT DETAILS
    ========================== */

    if (!eventDetails) {

        console.error("Event details tidak ditemukan!");
        return;

    }

    eventDetails.classList.add("show");
    
    if (guestDatabase) {

    guestDatabase.classList.add("show-event");

}

    /* =========================
       DISABLE ACCEPT BUTTON
    ========================== */

    if (acceptButton) {

        acceptButton.textContent =
            "[ INVITATION ACCEPTED ✓ ]";

        acceptButton.disabled = true;

        acceptButton.style.opacity = "0.5";

        acceptButton.style.cursor = "default";

    }


    /* =========================
       SCROLL TO EVENT
    ========================== */

    setTimeout(() => {

        eventDetails.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 500);

}


/* =========================
   OPEN LOCATION
========================= */

function openLocation() {

    /*
       GANTI LINK GOOGLE MAPS DI BAWAH
       KALAU LOCATION SUDAH ADA
    */

    const locationURL =
        "https://maps.google.com";

    window.open(
        locationURL,
        "_blank"
    );

}


/* =========================
   BIRTHDAY COUNTDOWN
========================= */

const birthdayDate =
    new Date("2026-09-20T19:00:00+07:00").getTime();


function updateCountdown() {

    const days =
        document.getElementById("days");

    const hours =
        document.getElementById("hours");

    const minutes =
        document.getElementById("minutes");

    const seconds =
        document.getElementById("seconds");


    /* Pastikan semua element ada */

    if (
        !days ||
        !hours ||
        !minutes ||
        !seconds
    ) {
        return;
    }


    const now =
        new Date().getTime();

    const distance =
        birthdayDate - now;


    /* =========================
       EVENT SUDAH DIMULAI
    ========================== */

    if (distance <= 0) {

        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";

        return;
    }


    /* =========================
       CALCULATE TIME
    ========================== */

    const d = Math.floor(
        distance /
        (1000 * 60 * 60 * 24)
    );

    const h = Math.floor(
        (
            distance %
            (1000 * 60 * 60 * 24)
        ) /
        (1000 * 60 * 60)
    );

    const m = Math.floor(
        (
            distance %
            (1000 * 60 * 60)
        ) /
        (1000 * 60)
    );

    const s = Math.floor(
        (
            distance %
            (1000 * 60)
        ) /
        1000
    );


    /* =========================
       UPDATE DISPLAY
    ========================== */

    days.textContent =
        String(d).padStart(2, "0");

    hours.textContent =
        String(h).padStart(2, "0");

    minutes.textContent =
        String(m).padStart(2, "0");

    seconds.textContent =
        String(s).padStart(2, "0");

}


/* =========================
   START COUNTDOWN
========================= */

updateCountdown();

setInterval(
    updateCountdown,
    1000
);
/* =========================
   MEMORY LIGHTBOX
========================= */

const memoryFiles =
    document.querySelectorAll(".memory-file");

const lightbox =
    document.getElementById("memory-lightbox");

const lightboxImage =
    document.getElementById("lightbox-image");

const lightboxTitle =
    document.getElementById("lightbox-title");

const lightboxClose =
    document.getElementById("lightbox-close");


/* =========================
   OPEN MEMORY
========================= */

memoryFiles.forEach((file) => {

    file.addEventListener(
        "click",
        () => {

            const image =
                file.querySelector("img");

            const title =
                file.querySelector(
                    ".file-info strong"
                );


            if (
                !image ||
                !lightbox ||
                !lightboxImage
            ) {
                return;
            }


            /* Set Image */

            lightboxImage.src =
                image.src;

            lightboxImage.alt =
                image.alt;


            /* Set Title */

            if (
                title &&
                lightboxTitle
            ) {

                lightboxTitle.textContent =
                    title.textContent.trim();

            }


            /* Show Lightbox */

            lightbox.classList.add(
                "show"
            );


            /* Disable Background Scroll */

            document.body.style.overflow =
                "hidden";

        }
    );

});


/* =========================
   CLOSE LIGHTBOX FUNCTION
========================= */

function closeLightbox() {

    if (!lightbox) return;


    lightbox.classList.remove(
        "show"
    );


    /* Enable Background Scroll */

    document.body.style.overflow =
        "auto";

}


/* =========================
   CLOSE BUTTON
========================= */

if (lightboxClose) {

    lightboxClose.addEventListener(
        "click",
        closeLightbox
    );

}


/* =========================
   CLICK OUTSIDE IMAGE
========================= */

if (lightbox) {

    lightbox.addEventListener(
        "click",
        (event) => {

            if (
                event.target === lightbox
            ) {

                closeLightbox();

            }

        }
    );

}


/* =========================
   ESC KEY
========================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape"
        ) {

            closeLightbox();

        }

    }
);