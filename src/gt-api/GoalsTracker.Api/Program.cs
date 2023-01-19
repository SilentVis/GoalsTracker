using GoalsTracker.Api.Extensions;
using GoalsTracker.Api.Services.Contracts;
using GoalsTracker.Api.Services.Implementation;
using System.Xml.Linq;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.AddGoalsGraphQLApi();

builder.Services.AddScoped<IGoalsStorage, InMemoryGoalsStorage>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapGraphQL();

app.UseHttpsRedirection();

//app.UseAuthorization();

app.MapControllers();

app.Run();