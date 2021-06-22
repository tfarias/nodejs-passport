
class HomeController {
  async index(req, res) {
   return res.render('home/index')
   
  }
}

export default new HomeController();
