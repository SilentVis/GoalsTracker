using GoalsTracker.Api.Api;
using GoalsTracker.Api.Api.Types;

namespace GoalsTracker.Api.Extensions
{
    public static class GraphQLExtensions
    {
        public static void AddGoalsGraphQLApi(this WebApplicationBuilder builder)
        {
            builder.Services.AddGraphQLServer()
                .ModifyRequestOptions(x => x.IncludeExceptionDetails = builder.Environment.IsDevelopment())
                .AddQueryType(d => d.Name(OperationTypeNames.Query))
                .AddTypeExtension<GoalsQueryExtensions>()

                .AddType<GoalType>();
                
        }
    }
}
