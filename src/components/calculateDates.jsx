export const getMonthCount = (start, end) => {
    const startYear = start.getFullYear();
    const startMonth = start.getMonth();
    const endYear = end.getFullYear();
    const endMonth = end.getMonth();

    const monthCount = (endYear - startYear) * 12 + (endMonth - startMonth) + 1;

    return monthCount;
};

export const getWeekCount = (start, end) => {
    const oneDay = 24 * 60 * 60 * 1000;
    const diffDays = Math.round(Math.abs((start.getTime() - end.getTime()) / oneDay));
    const diffWeeks = Math.floor(diffDays / 7);
    return diffWeeks;
};

export const getWeeksByMonth = (startDate, endDate) => {
    const weeksByMonth = {};

    let currentDate = new Date(startDate);
    while (currentDate <= endDate) {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1;
        const key = `${year}-${month}`;

        if (!weeksByMonth[key]) {
            weeksByMonth[key] = 1;
        } else {
            weeksByMonth[key]++;
        }

        currentDate.setDate(currentDate.getDate() + 7);
    }

    return weeksByMonth;
};
