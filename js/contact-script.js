function sendmail(contactform) {
    emailjs.send("gmail","MurderMysteryFeedback", {
        "from_name" : contactform.name.value,
        "from_email" : contactform.emailaddress.value,
        "user_feedback" : contactform.userfeedback.value
    })
    return false;
}