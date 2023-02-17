using Classroom_API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Classroom_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly DataContext _context;

        public HomeController(DataContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult<User>> GetUser(User req)
        {
            var userDb = _context.Users.Where(u => u.Email == req.Email).FirstOrDefault();

            return Ok(userDb);
        }
    }
}
