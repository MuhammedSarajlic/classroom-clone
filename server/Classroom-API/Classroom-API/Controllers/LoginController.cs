using BCrypt.Net;
using Classroom_API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Classroom_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly DataContext _context;

        public LoginController(DataContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult<string>> CheckUser(LoginCreds creds)
        {
            var userDb = _context.Users.Where(u => u.Email == creds.Email).FirstOrDefault();
            if (userDb == null) return BadRequest("User not found");
            if (!BCrypt.Net.BCrypt.Verify(creds.Password, userDb.Password))
            {
                return BadRequest("Password incorrect");
            }

            return Ok("You are signed in");
        }
    }
}
