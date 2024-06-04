function sendMail(contactForm) {
    emailjs.send("service_x622bv9","template_n2lp9wk", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("Success", response);
        },
        function(error) {
            console.log("It failed", error);
        });
    return false;
}
