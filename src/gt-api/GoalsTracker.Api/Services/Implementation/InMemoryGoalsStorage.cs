using GoalsTracker.Api.Models;
using GoalsTracker.Api.Services.Contracts;

namespace GoalsTracker.Api.Services.Implementation
{
    public class InMemoryGoalsStorage : IGoalsStorage
    {

        private static IEnumerable<Goal> Goals = new List<Goal>
        {
            new Goal(){Name = "Test1"},
            new Goal(){Name = "Test2"},
            new Goal(){Name = "Test3"},
            new Goal(){Name = "Test4"},
        };

        public IEnumerable<Goal> GetAllGoals()
        {
            return Goals;
        }
    }
}
