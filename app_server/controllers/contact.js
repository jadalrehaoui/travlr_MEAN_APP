module.exports = (req, res, next) => {
    res.render("contact", {title: "Contact", contact_url: true})
}