using AutoMapper;
using Chat.Web.Helpers;
using Chat.Web.Hubs;
using Chat.Web.Models;
using Chat.Web.Models.ViewModels;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.AspNet.SignalR;
using Microsoft.Owin.Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;


namespace Chat.Web.Controllers
{
    public class GuestController : Controller
    {

        private ApplicationSignInManager _signInManager;
        private ApplicationUserManager _userManager;
        private ApplicationDbContext db = new ApplicationDbContext();

        public ApplicationSignInManager SignInManager
        {
            get
            {
                return _signInManager ?? HttpContext.GetOwinContext().Get<ApplicationSignInManager>();
            }
            private set
            {
                _signInManager = value;
            }
        }

        public ApplicationUserManager UserManager
        {
            get
            {
                return _userManager ?? HttpContext.GetOwinContext().GetUserManager<ApplicationUserManager>();
            }
            private set
            {
                _userManager = value;
            }
        }

        private IAuthenticationManager AuthenticationManager
        {
            get
            {
                return HttpContext.GetOwinContext().Authentication;
            }
        }

        public GuestController()
        {

        }

        public GuestController(ApplicationUserManager userManager, ApplicationSignInManager signInManager)
        {
            UserManager = userManager;
            SignInManager = signInManager;
        }

        // GET: Guest
        [AllowAnonymous]
        public ActionResult Index()
        {
            return View();
        }


        // GET: GuestChat
        public ActionResult GuestChat()
        {
            if (!User.Identity.IsAuthenticated)
                return RedirectToAction("Index");

            return View();
        }

        //
        // POST: /Account/Login
        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Login(GuestViewModel model)
        {

            if (!ModelState.IsValid)
            {
                return View(model);
            }

            // Map avatar value to static Base64 avatar
            int index = 0;
            if (int.TryParse(model.Avatar, out index))
            {
                if (index > StaticResources.Avatars.Count - 1)
                    index = 0;
            }


            var user = await UserManager.FindAsync(model.GetUserName(), model.GetPass());

            if (user == null)
            {
                user = new ApplicationUser { UserName = model.GetUserName(), DisplayName = model.DisplayName, Avatar = StaticResources.Avatars[index] };

                var result = await UserManager.CreateAsync(user, model.GetPass());

                if (result.Succeeded)
                {
                    await SignInManager.SignInAsync(user, isPersistent: false, rememberBrowser: false);

                    // For more information on how to enable account confirmation and password reset please visit http://go.microsoft.com/fwlink/?LinkID=320771
                    // Send an email with this link
                    // string code = await UserManager.GenerateEmailConfirmationTokenAsync(user.Id);
                    // var callbackUrl = Url.Action("ConfirmEmail", "Account", new { userId = user.Id, code = code }, protocol: Request.Url.Scheme);
                    // await UserManager.SendEmailAsync(user.Id, "Confirm your account", "Please confirm your account by clicking <a href=\"" + callbackUrl + "\">here</a>");

                    
                    return RedirectToAction("GuestChat");
                }

                AddErrors(result);
            }

            await SignInManager.SignInAsync(user, isPersistent: false, rememberBrowser: false);


            return RedirectToAction("GuestChat");

        }

   
        [HttpGet]
        public ActionResult LogOff()
        {
            AuthenticationManager.SignOut(DefaultAuthenticationTypes.ApplicationCookie);
            return RedirectToAction("Index");
        }

        private void AddErrors(IdentityResult result)
        {
            foreach (var error in result.Errors)
            {
                ModelState.AddModelError("", error);
            }
        }
    }
}