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
        public async Task<ActionResult<User>> AddUser(User user)
        {
            if (_context.Users.Any(u => u.Email == user.Email))
                return BadRequest("User already exists");
            if (user.Password.Length < 8)
                return BadRequest("Password is too short");
            user.Password = BCrypt.Net.BCrypt.HashPassword(user.Password);
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();
            return Ok(user);
        }
    }
}
