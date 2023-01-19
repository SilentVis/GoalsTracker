using GoalsTracker.Api.Models;

namespace GoalsTracker.Api.Services.Contracts
{
    public interface IGoalsStorage
    {
        IEnumerable<Goal> GetAllGoals();
    }
}
