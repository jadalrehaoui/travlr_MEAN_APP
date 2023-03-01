module.exports = (req, res, next) => {
    res.render("news", {title: "News", news_url: true})
}