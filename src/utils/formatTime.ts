const units = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'week', seconds: 604800 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
    { label: 'second', seconds: 1 }
  ];

  const formatDate = (date: string | number | Date) => {
    const _date = new Date(date);
    const time = Math.floor(
      (new Date().valueOf() - new Date(_date).valueOf()) / 1000
    );
    const { interval, unit } = calculateTimeDifference(time);
    const suffix = interval === 1 ? '' : 's';
    return `${interval} ${unit}${suffix} ago`;
  };

  const calculateTimeDifference = (time: number) => {
    for (let { label, seconds } of units) {
      const interval = Math.floor(time / seconds);
      if (interval >= 1) {
        return {
          interval: interval,
          unit: label
        };
      }
    }
    return {
      interval: 0,
      unit: ''
    };
  };

  export { formatDate };