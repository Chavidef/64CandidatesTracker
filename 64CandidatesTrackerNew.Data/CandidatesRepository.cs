﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _64CandidatesTrackerNew.Data
{
   public class CandidatesRepository
    {
        private readonly string _connectionString;

        public CandidatesRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        public void AddCandidate(Candidate candidate)
        {
            using var context = new CandidatesDataContext(_connectionString);
            context.Candidates.Add(candidate);
            context.SaveChanges();
        }
        public List<Candidate> GetCandidatesForRegistrationStatus(RegistrationStatus status)
        {
            using var context = new CandidatesDataContext(_connectionString);
            return context.Candidates.Where(c => c.RegistrationStatus == status).ToList();
        }
        public Candidate GetCandidateById(int id)
        {
            using var context = new CandidatesDataContext(_connectionString);
            return context.Candidates.FirstOrDefault(c => c.Id == id);
        }
        public void UpdateStatus(int id, RegistrationStatus status)
        {
            using var context = new CandidatesDataContext(_connectionString);
            context.Candidates.FirstOrDefault(c => c.Id == id).RegistrationStatus = status;
            context.SaveChanges();
        }







        //public List<Post> GetAll(int pgnum)
        //{
        //    using var context = new BlogDataContext(_connectionString);
        //    return context.Posts.OrderByDescending(p => p.Date).Skip(pgnum).Take(3).ToList();
        //}
        //public int GetPostCount()
        //{
        //    using var context = new BlogDataContext(_connectionString);
        //    return context.Posts.Count();
        //}

    }
}
