using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _64CandidatesTrackerNew.Data
{
  public class CandidatesContextFactory: IDesignTimeDbContextFactory<CandidatesDataContext>
    {
        public CandidatesDataContext CreateDbContext(string[] args)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), $"..{Path.DirectorySeparatorChar}64CandidatesTrackerNew.Web"))
                .AddJsonFile("appsettings.json")
                .AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true).Build();

            return new CandidatesDataContext(config.GetConnectionString("ConStr"));
        }
    }
}
