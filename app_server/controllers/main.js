module.exports = (req, res, next) => {
    res.render("index", {title: "Travlr", index_url: true})
}