using Microsoft.AspNetCore.Mvc;

namespace vue_template_hmr_router
{
    public class HomeController: Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}
