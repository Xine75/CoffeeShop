using System.ComponentModel.DataAnnotations;

namespace CoffeeShop.Models
{
    public class BeanVariety
    {
        public int Id { get; set; }
        [Required]
        [StringLength(50, MinimumLength=3)]
        public string Name { get; set; }
        [Required]


    }
}
