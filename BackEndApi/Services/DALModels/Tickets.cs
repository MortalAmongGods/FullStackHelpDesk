﻿using BackEndApi.Services.DALModels;
using System;
using System.Collections.Generic;

namespace BackEndApi.Models.Ticket
{
    public class Tickets
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string RequestTitle { get; set; }
        public string Problem { get; set; }
        public string Solution { get; set; }
        public int Priority { get; set; }
        public DateTime SubmittedTime { get; set; } = DateTime.UtcNow;
        public string AssignedTo { get; set; }
        public string Status { get; set; }
        public DateTime ResolvedTime { get; set; }

    }
}