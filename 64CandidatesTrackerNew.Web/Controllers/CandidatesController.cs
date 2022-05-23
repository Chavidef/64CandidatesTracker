using _64CandidatesTrackerNew.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace _64CandidatesTrackerNew.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidatesController : ControllerBase
    {
        public readonly string _connectionstring;
        public CandidatesController(IConfiguration configuration)
        {
            _connectionstring = configuration.GetConnectionString("ConStr");
        }

       

        [Route("addcandidate")]
        [HttpPost]
        public void AddCandidate(Candidate candidate)
        {
            var repo = new CandidatesRepository(_connectionstring);
            repo.AddCandidate(candidate);
        }
        [Route("GetCandidatesForRegistrationStatus")]
        [HttpGet]
        public List<Candidate> GetCandidatesForRegistrationStatus(RegistrationStatus status)
        {
            var repo = new CandidatesRepository(_connectionstring);
            return repo.GetCandidatesForRegistrationStatus(status);
        }
        [Route("viewcandidatedetails")]
        [HttpGet]
        public Candidate GetCandidate(int id)
        {
            var repo = new CandidatesRepository(_connectionstring);
            return repo.GetCandidateById(id);
        }
        [Route("updatestatus")]
        [HttpPost]
        public void UpdateStatus(StatusViewModel vm)
        {
            var repo = new CandidatesRepository(_connectionstring);
            repo.UpdateStatus(vm.id, vm.status);
        }
        [Route("getcounts")]
        [HttpGet]
        public Counts GetCounts()
        {
            var repo = new CandidatesRepository(_connectionstring);
            return repo.GetCounts();
        }

    }
}
