using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LoginMenu.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace LoginMenu.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private static List<User> users = new List<User>
        {
            new User { Id = 1, Name = "Budi", Email = "budi@gmail.com", Password = "budi123" },
            new User { Id = 2, Name = "Richie", Email = "richie@gmail.com", Password = "richie123" },
        };

        [HttpGet]
        public ActionResult<IEnumerable<User>> Get()
        {
            return users;
        }
    }
}

