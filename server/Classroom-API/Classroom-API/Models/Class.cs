namespace Classroom_API.Models
{
    public class Class
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Section { get; set; } = string.Empty;
        public int TeacherId { get; set; } // Foreign key

        // Navigation properties
        //public User? Teacher { get; set; }
        public ICollection<User>? Students { get; set; }
    }
}
