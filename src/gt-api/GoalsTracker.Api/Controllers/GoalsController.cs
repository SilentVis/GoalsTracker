using GoalsTracker.Api.Models;
using GoalsTracker.Api.Services.Contracts;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GoalsTracker.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GoalsController : ControllerBase
    {
        private IGoalsStorage _goalsStorage;

        public GoalsController(IGoalsStorage goalsStorage) 
        {
            _goalsStorage = goalsStorage;
        }

        [HttpGet]
        public IEnumerable<Goal> GetGoals()
        {
            var goals = _goalsStorage.GetAllGoals();

            return goals;
        }
    }
}
