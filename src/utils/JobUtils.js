module.exports = {
  remainingDays(job) {
    // cálculo de tempo dias restantes
    const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed();

    const createdDate = new Date(job.created_at); //data de criação
    const dueDay = createdDate.getDate() + Number(remainingDays); //dias de vencimento
    const dueDateInMs = createdDate.setDate(dueDay); // data de vencimento

    const timeDiffInMs = dueDateInMs - Date.now();
    // transformar milli em dias
    const dayInMs = 1000 * 60 * 60 * 24;
    const dayDiff = Math.floor(timeDiffInMs / dayInMs);

    // restam x dias
    return dayDiff;
  },
  calculateBudget: (job, valueHour) => valueHour * job["total-hours"],
};
