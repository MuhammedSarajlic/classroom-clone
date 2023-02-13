using BCrypt.Net;
using Classroom_API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Classroom_API.Controllers
{
    [Route("api/")]
    [ApiController]
    public class RegisterController : ControllerBase
    {

        private readonly DataContext _context;
        public RegisterController(DataContext context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("register/add")]
        public async Task<ActionResult<List<User>>> AddUser(User user)
        {
            var hashedPassword = BCrypt.Net.BCrypt.HashPassword(user.Password);
            user.Password = hashedPassword;
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();
            return Ok(user);
        }
    }
}
