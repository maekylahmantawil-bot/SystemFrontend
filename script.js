/* =====================================================
   LOGIN
===================================================== */

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const username =
        document.getElementById("username").value;

    const password =
        document.getElementById("password").value;

    const loginError =
        document.getElementById("loginError");


    /*
        DEMO LOGIN

        Username: admin
        Password: admin123

        This is only frontend authentication.
        PHP + MySQL can be connected later.
    */

    if (username === "admin" && password === "admin123") {

        document.getElementById("loginPage")
            .classList.add("hidden");

        document.getElementById("systemPage")
            .classList.remove("hidden");

        loginError.textContent = "";

    } else {

        loginError.textContent =
            "Invalid username or password.";

    }

});


/* =====================================================
   SHOW / HIDE PASSWORD
===================================================== */

function togglePassword() {

    const password =
        document.getElementById("password");

    const eyeIcon =
        document.getElementById("eyeIcon");


    if (password.type === "password") {

        password.type = "text";

        eyeIcon.classList.remove("fa-eye");

        eyeIcon.classList.add("fa-eye-slash");

    } else {

        password.type = "password";

        eyeIcon.classList.remove("fa-eye-slash");

        eyeIcon.classList.add("fa-eye");

    }

}


/* =====================================================
   PAGE NAVIGATION
===================================================== */

function showPage(pageId, button) {

    /*
        Hide all pages
    */

    const pages =
        document.querySelectorAll(".page");

    pages.forEach(function(page) {

        page.classList.remove("active-page");

    });


    /*
        Show selected page
    */

    const selectedPage =
        document.getElementById(pageId);

    if (selectedPage) {

        selectedPage.classList.add("active-page");

    }


    /*
        Remove active state
        from sidebar buttons
    */

    const menuItems =
        document.querySelectorAll(".menu-item");

    menuItems.forEach(function(item) {

        item.classList.remove("active");

    });


    /*
        Add active state
        to selected button
    */

    if (button) {

        button.classList.add("active");

    }


    /*
        Change page title
    */

    const titles = {

        dashboard: [
            "Dashboard",
            "Overview of university logistics activities."
        ],

        inventory: [
            "Inventory",
            "Manage and monitor available university supplies."
        ],

        inbound: [
            "Inbound Logistics",
            "Record and monitor incoming university supplies."
        ],

        outbound: [
            "Outbound Logistics",
            "Record and monitor outgoing university supplies."
        ],

        movement: [
            "Movement History",
            "View recorded logistics transactions and audit history."
        ],

        reports: [
            "Reports",
            "Generate inventory and logistics reports."
        ]

    };


    if (titles[pageId]) {

        document.getElementById("pageTitle")
            .textContent = titles[pageId][0];

        document.getElementById("pageSubtitle")
            .textContent = titles[pageId][1];

    }


    /*
        Close mobile sidebar
    */

    document.getElementById("sidebar")
        .classList.remove("open");

}


/* =====================================================
   SIDEBAR FOR MOBILE
===================================================== */

function toggleSidebar() {

    const sidebar =
        document.getElementById("sidebar");

    sidebar.classList.toggle("open");

}


/* =====================================================
   MODALS
===================================================== */

function openModal(modalId) {

    const modal =
        document.getElementById(modalId);

    modal.classList.add("show");

}


function closeModal(modalId) {

    const modal =
        document.getElementById(modalId);

    modal.classList.remove("show");

}


/* =====================================================
   SAVE TRANSACTION
===================================================== */

function saveTransaction(type) {

    alert(
        type +
        " transaction saved successfully!"
    );


    if (type === "Inbound") {

        closeModal("inboundModal");

    } else {

        closeModal("outboundModal");

    }

}


/* =====================================================
   LOGOUT
===================================================== */

function logout() {

    const confirmLogout =
        confirm(
            "Are you sure you want to logout?"
        );


    if (confirmLogout) {

        document.getElementById("systemPage")
            .classList.add("hidden");

        document.getElementById("loginPage")
            .classList.remove("hidden");


        document.getElementById("username")
            .value = "";

        document.getElementById("password")
            .value = "";

    }

}


/* =====================================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
===================================================== */

window.addEventListener("click", function(event) {

    const modals =
        document.querySelectorAll(".modal");


    modals.forEach(function(modal) {

        if (event.target === modal) {

            modal.classList.remove("show");

        }

    });

});
