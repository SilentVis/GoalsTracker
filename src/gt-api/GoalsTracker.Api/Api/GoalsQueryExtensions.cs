using GoalsTracker.Api.Models;
using GoalsTracker.Api.Services.Contracts;

namespace GoalsTracker.Api.Api
{
    [ExtendObjectType(OperationTypeNames.Query)]
    public class GoalsQueryExtensions
    {
        [GraphQLDescription("Test endpoint")]
        public IEnumerable<Goal> GetGoals(
            [Service] IGoalsStorage goalsStorage)
        {
            return goalsStorage.GetAllGoals();
        }
    }
}
