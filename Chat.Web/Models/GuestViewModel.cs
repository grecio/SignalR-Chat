using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using Chat.Web.Helpers;

namespace Chat.Web.Models
{
    public class GuestViewModel
    {
        [Required(ErrorMessage = "CPF obrigatório")]
        [CustomValidationCPF(ErrorMessage = "CPF inválido")]
        public string Cpf { get;  set; }

        [Required]
        [Display(Name = "Nome Completo")]
        public string DisplayName { get; set; }

        public string UserName { get; private set; }

        public string Avatar { get; set; }

        [DataType(DataType.Password)]
        public string Password { get; private set; }

        public GuestViewModel()
        {
         
        }

        public string GetUserName()
        {
            return $"guest{Cpf.OnlyNumbers()}";
        }

        public string GetPass()
        {
            return Cpf.OnlyNumbers();
        }
    }
}