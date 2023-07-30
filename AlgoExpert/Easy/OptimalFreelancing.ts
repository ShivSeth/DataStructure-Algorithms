export function optimalFreelancing(jobs: Record<string, number>[]) {
  // Write your code here.

  const days = new Array(7).fill(0);
  jobs.sort((jobA, jobB) => jobB.payment - jobA.payment);
  jobs.forEach((job) => {
    let minDays = Math.min(job.deadline, 7);
    for (let i = minDays - 1; i >= 0; i--) {
      if (days[i] === 0) {
        days[i] = job.payment;
        break;
      }
    }
  });
  return days.reduce((a, v) => a + v);
}

optimalFreelancing([
  {
    deadline: 2,
    payment: 1,
  },
  {
    deadline: 2,
    payment: 2,
  },
  {
    deadline: 2,
    payment: 3,
  },
  {
    deadline: 2,
    payment: 4,
  },
  {
    deadline: 2,
    payment: 5,
  },
  {
    deadline: 2,
    payment: 6,
  },
  {
    deadline: 2,
    payment: 7,
  },
]);
